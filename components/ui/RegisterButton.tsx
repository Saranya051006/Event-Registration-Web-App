"use client";

import { motion } from "framer-motion";

// ─── RegisterButton ─────────────────────────────────────────────────
// Futuristic cyber CTA with animated corner brackets, shimmer on
// hover, arrow slide, and crimson glow. Fully keyboard-accessible.
// ────────────────────────────────────────────────────────────────────

export default function RegisterButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="pt-2"
    >
      <button
        type="button"
        className="
          group relative inline-flex items-center gap-3
          px-10 py-4 sm:px-12 sm:py-[18px]
          text-sm sm:text-base font-semibold uppercase tracking-[0.18em]
          text-white/90 cursor-pointer

          bg-gradient-to-b from-white/[0.06] to-transparent
          border border-[#DC143C]/30
          rounded-sm

          shadow-[0_0_20px_rgba(220,20,60,0.15)]

          transition-all duration-300 ease-out
          hover:-translate-y-0.5
          hover:shadow-[0_0_32px_rgba(220,20,60,0.35)]
          hover:border-[#DC143C]/50

          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-[#DC143C]

          overflow-hidden
        "
      >
        {/* ── Top metallic highlight ── */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0 top-0 h-px
            bg-gradient-to-r from-transparent via-white/20 to-transparent
          "
        />

        {/* ── Hover shimmer sweep ── */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(105deg,transparent_40%,rgba(220,20,60,0.1)_50%,transparent_60%)]
            bg-[length:250%_100%] bg-[200%_0]
            transition-[background-position] duration-700 ease-out
            group-hover:bg-[-50%_0]
          "
        />

        {/* ── Corner brackets ── */}
        {/* Top-left */}
        <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t border-l border-[#DC143C]/50 animate-[cornerPulse_3s_ease-in-out_infinite]" />
        {/* Top-right */}
        <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t border-r border-[#DC143C]/50 animate-[cornerPulse_3s_ease-in-out_infinite_0.4s]" />
        {/* Bottom-left */}
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#DC143C]/50 animate-[cornerPulse_3s_ease-in-out_infinite_0.8s]" />
        {/* Bottom-right */}
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#DC143C]/50 animate-[cornerPulse_3s_ease-in-out_infinite_1.2s]" />

        {/* ── Label ── */}
        <span className="relative z-10">Secure Your Spot</span>

        {/* ── Arrow icon ── */}
        <svg
          aria-hidden="true"
          className="
            relative z-10 w-4 h-4 text-[#DC143C]
            transition-transform duration-300 ease-out
            group-hover:translate-x-1
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </motion.div>
  );
}
