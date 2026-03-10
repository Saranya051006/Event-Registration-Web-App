"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";

// ─── Stat data ──────────────────────────────────────────────────────
interface StatDef {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatDef[] = [
  { prefix: "", value: 500, suffix: "+", label: "Hackers", sublabel: "Worldwide participants" },
  { prefix: "", value: 48, suffix: "h", label: "Non-stop", sublabel: "Of intense building" },
  { prefix: "$", value: 20, suffix: "K", label: "Prize Pool", sublabel: "In cash & perks" },
];

// ─── Framer Motion variants ─────────────────────────────────────────
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Count-up hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();

    function tick(now: number) {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

// ─── Single stat card ───────────────────────────────────────────────
function StatCard({ stat, started }: { stat: StatDef; started: boolean }) {
  const count = useCountUp(stat.value, 1600, started);

  return (
    <motion.div
      variants={cardVariant}
      className="
        group relative flex flex-col items-center justify-center gap-1.5
        min-w-[130px] px-7 py-5 sm:px-9 sm:py-6
        rounded-xl overflow-hidden
        backdrop-blur-md bg-white/[0.04]
        border border-white/[0.08]
        transition-shadow duration-300
        hover:shadow-[0_0_24px_rgba(220,20,60,0.18)]
      "
    >
      {/* Crimson top accent line */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#DC143C]/60 to-transparent"
      />

      <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white/70">
        {stat.label}
      </span>
      <span className="text-[10px] sm:text-[11px] text-white/30 font-light">
        {stat.sublabel}
      </span>
    </motion.div>
  );
}

// ─── StatsRow ───────────────────────────────────────────────────────
export default function StatsRow() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !inView) {
        setInView(true);
        controls.start("show");
      }
    },
    [controls, inView],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap justify-center gap-5 sm:gap-6"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} started={inView} />
      ))}
    </motion.div>
  );
}
