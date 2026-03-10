"use client";

import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";

// ─── Framer Motion variants ─────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Stat data ──────────────────────────────────────────────────────
interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "500+", label: "Hackers" },
  { value: "48 h", label: "Non-stop" },
  { value: "$20K", label: "In Prizes" },
];

// ─── Hero section ───────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      className="
        relative z-10 min-h-[85vh] w-full overflow-visible
        flex flex-col items-center justify-center
        px-6 pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24
      "
    >
      {/* ── Hero content ────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-y-10 max-w-5xl"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* ── Event badge ── */}
        <motion.span
          variants={fadeUp}
          className="
            inline-block rounded-full
            border border-white/[0.06] bg-white/[0.03]
            px-5 py-1.5 text-[11px] font-medium uppercase
            tracking-[0.25em] text-red-300/70 backdrop-blur-md
          "
        >
          March 28 – 30, 2026 &nbsp;·&nbsp; Virtual &amp; In-Person
        </motion.span>

        {/* ── Main title ── */}
        <motion.h1
          variants={fadeUp}
          className="
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl
            font-extrabold leading-[0.92] tracking-tight
            drop-shadow-[0_0_20px_rgba(220,38,38,0.12)]
          "
        >
          <span className="bg-gradient-to-b from-[#f8fafc] to-[#f8fafc]/50 bg-clip-text text-transparent">
            HACK
          </span>
          <span className="bg-gradient-to-r from-red-500 via-rose-600 to-rose-800 bg-clip-text text-transparent">
            VERSE
          </span>{" "}
          <span className="bg-gradient-to-b from-[#f8fafc]/70 to-[#f8fafc]/25 bg-clip-text text-transparent">
            2026
          </span>
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          variants={fadeUp}
          className="
            max-w-xl text-base sm:text-lg md:text-xl
            font-light leading-relaxed text-[#94a3b8]
          "
        >
          Build the future with{" "}
          <span className="text-[#f8fafc] font-normal">developers</span> pushing
          the boundaries of what&apos;s possible.
        </motion.p>

        {/* ── CTA ── */}
        <motion.div variants={fadeUp} className="pt-2">
          <GradientButton className="text-sm sm:text-base md:text-lg px-14 py-4">
            Register Now
          </GradientButton>
        </motion.div>

        {/* ── Glassmorphism stat cards ── */}
        <motion.div
          variants={fadeUp}
          className="pt-10 flex flex-wrap justify-center gap-5 sm:gap-6"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="
                flex flex-col items-center justify-center gap-1
                min-w-[100px] px-6 py-4 sm:px-8 sm:py-5
                rounded-xl
                backdrop-blur-md bg-white/[0.04]
                border border-white/[0.07]
              "
            >
              <span className="text-xl sm:text-2xl font-semibold text-[#f8fafc]">
                {value}
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#94a3b8]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          variants={fadeUp}
          className="pt-6 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#94a3b8]/40 font-medium">
            Scroll to Discover
          </span>
          <div className="relative w-5 h-8 rounded-full border border-white/[0.15]">
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[3px] h-[3px] rounded-full bg-white/60 animate-[scrollDot_1.8s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
