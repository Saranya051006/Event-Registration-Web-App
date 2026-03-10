"use client";

import { motion } from "framer-motion";

// ─── Framer Motion variants ─────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── HeroSubheading ─────────────────────────────────────────────────
// Supporting paragraph + decorative divider + tagline beneath the
// hero title. Uses staggered Framer Motion entrance animations.
// ────────────────────────────────────────────────────────────────────

export default function HeroSubheading() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 max-w-[600px] text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* ── Paragraph ── */}
      <motion.p
        variants={fadeUp}
        className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/[0.45]"
      >
        <span className="text-white font-medium">48 hours.</span>{" "}
        <span className="text-[#DC143C] font-medium">No limits.</span>{" "}
        Build what the world hasn&apos;t seen yet alongside the{" "}
        <span className="text-white font-normal">sharpest minds</span> in
        technology.
      </motion.p>

      {/* ── Decorative divider: line — ◆ ◆ ◆ — line ── */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 w-full max-w-xs"
        aria-hidden="true"
      >
        <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#DC143C]/30" />
        <span className="flex items-center gap-1.5 text-[#DC143C]/50 text-[8px]">
          <span>◆</span>
          <span>◆</span>
          <span>◆</span>
        </span>
        <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#DC143C]/30" />
      </motion.div>

      {/* ── Tagline ── */}
      <motion.span
        variants={fadeUp}
        className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/25 font-medium"
      >
        Code &nbsp;·&nbsp; Create &nbsp;·&nbsp; Conquer
      </motion.span>
    </motion.div>
  );
}
