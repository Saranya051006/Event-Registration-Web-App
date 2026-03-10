"use client";

import { motion } from "framer-motion";

// ─── HeroTitle ──────────────────────────────────────────────────────
// Cinematic hackathon headline with per-word glow treatment and an
// animated glowing underline. Expects the Bebas Neue CSS variable
// (--font-bebas) to be defined via next/font in the root layout.
// ────────────────────────────────────────────────────────────────────

export default function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center gap-4"
    >
      {/* ── Title ── */}
      <h1
        className="
          font-bebas font-extrabold uppercase leading-[0.92] tracking-tight text-center
          [font-size:clamp(3.2rem,10vw,9rem)]
        "
      >
        {/* HACK — white with strong white glow */}
        <span
          className="
            text-white
            drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]
            animate-[heroGlowWhite_4s_ease-in-out_infinite]
          "
        >
          HACK
        </span>

        {/* VERSE — crimson gradient with red neon glow */}
        <span
          className="
            bg-gradient-to-r from-[#DC143C] via-[#FF2255] to-[#DC143C]
            bg-clip-text text-transparent
            drop-shadow-[0_0_24px_rgba(220,20,60,0.5)]
            animate-[heroGlowRed_4s_ease-in-out_infinite]
          "
        >
          VERSE
        </span>{" "}

        {/* 2026 — light gray with soft white glow */}
        <span
          className="
            text-[#d1d5db]
            drop-shadow-[0_0_14px_rgba(255,255,255,0.18)]
            animate-[heroGlowWhite_4s_ease-in-out_infinite_0.5s]
          "
        >
          2026
        </span>
      </h1>

      {/* ── Glowing underline ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="
          h-[2px] w-40 sm:w-56 md:w-72 origin-center rounded-full
          bg-gradient-to-r from-transparent via-[#DC143C] to-transparent
          shadow-[0_0_12px_rgba(220,20,60,0.5)]
          animate-[underlineGlow_3s_ease-in-out_infinite]
        "
        aria-hidden="true"
      />
    </motion.div>
  );
}
