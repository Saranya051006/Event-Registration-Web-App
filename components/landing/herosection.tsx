"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import DateBanner from "@/components/ui/DateBanner";
import HeroTitle from "@/components/ui/HeroTitle";
import HeroSubheading from "@/components/ui/HeroSubheading";
import RegisterButton from "@/components/ui/RegisterButton";
import StatsRow from "@/components/ui/StatsRow";

// ─── Framer Motion variants ─────────────────────────────────────────
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Props ──────────────────────────────────────────────────────────
interface HeroSectionProps {
  /** Animated background layers (particles, shooting stars, noise, etc.) */
  children?: ReactNode;
}

// ─── Hero section ───────────────────────────────────────────────────
export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section
      className="
        relative z-10 h-screen w-full
        flex flex-col items-center justify-center
        bg-[#0a0205]
        overflow-hidden
      "
    >
      {/* ── Animated background slot ── */}
      {children && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
          {children}
        </div>
      )}

      {/* ── Hero content ────────────────────────────────────────── */}
      <motion.div
        className="
          relative z-10 flex flex-col items-center text-center
          w-full max-w-5xl
          px-6 py-10 sm:py-14 lg:py-16
          gap-y-6 sm:gap-y-8
        "
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* 1 — Event badge */}
        <motion.div variants={fadeUp}>
          <DateBanner />
        </motion.div>

        {/* 2 — Main title */}
        <motion.div variants={fadeUp}>
          <HeroTitle />
        </motion.div>

        {/* 3 — Subtitle */}
        <motion.div variants={fadeUp}>
          <HeroSubheading />
        </motion.div>

        {/* 4 — CTA button */}
        <motion.div variants={fadeUp}>
          <RegisterButton />
        </motion.div>

        {/* 5 — Stats row */}
        <motion.div variants={fadeUp} className="w-full">
          <StatsRow />
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-3"
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
