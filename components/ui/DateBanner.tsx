"use client";

import { motion } from "framer-motion";

// ─── DateBanner ─────────────────────────────────────────────────────
// Animated hero badge displaying the hackathon date & format.
// Uses Framer Motion for the entrance and CSS keyframes for the
// continuous shimmer + pulse effects.
// ────────────────────────────────────────────────────────────────────

export default function DateBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="status"
      aria-label="Event date: March 28 to 30, 2026 — Hybrid Experience"
      className="relative inline-flex items-center gap-3 rounded-full
        px-6 py-2 sm:px-7 sm:py-2.5
        bg-[#DC143C]/[0.06] backdrop-blur-md
        border border-[#DC143C]/20
        shadow-[0_0_24px_rgba(220,20,60,0.12)]
        overflow-hidden select-none"
    >
      {/* ── Shimmer overlay ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full
          animate-[bannerShimmer_3.5s_linear_infinite]
          bg-[linear-gradient(105deg,transparent_40%,rgba(220,20,60,0.13)_50%,transparent_60%)]
          bg-[length:250%_100%]"
      />

      {/* ── Left indicator dot ── */}
      <span
        aria-hidden="true"
        className="relative flex h-2 w-2 shrink-0"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#DC143C]/40 animate-[bannerPulse_2s_ease-in-out_infinite]" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#DC143C]" />
      </span>

      {/* ── Text ── */}
      <span className="relative z-10 text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-red-300/80">
        Mar 28–30, 2026 &nbsp;·&nbsp; Hybrid Experience
      </span>

      {/* ── Right indicator dot ── */}
      <span
        aria-hidden="true"
        className="relative flex h-2 w-2 shrink-0"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#DC143C]/40 animate-[bannerPulse_2s_ease-in-out_infinite_0.6s]" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#DC143C]" />
      </span>
    </motion.div>
  );
}
