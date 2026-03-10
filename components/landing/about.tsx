"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

// ─── Title segments with per-segment styling ────────────────────────
const titleSegments = [
  { text: "About ", className: "text-[#f8fafc]" },
  {
    text: "HackVerse",
    className:
      "bg-gradient-to-r from-red-500 via-rose-600 to-rose-800 bg-clip-text text-transparent",
  },
];

const CHAR_DELAY = 0.05; // seconds per character

// Total character count (for knowing when the last char animates)
const totalChars = titleSegments.reduce((sum, s) => sum + s.text.length, 0);

const PARAGRAPH_TEXT =
  "HackVerse 2026 is where innovation meets ambition. Over an intense 48-hour experience, developers, designers, and tech enthusiasts come together to build powerful solutions that push the boundaries of technology. From AI-driven applications and cutting-edge web platforms to groundbreaking product ideas, HackVerse is a playground for creativity, collaboration, and problem-solving. Participants will compete across multiple tracks including design challenges, competitive coding, startup pitching, and hands-on technical workshops guided by industry mentors.";

export default function AboutSection() {
  const [titleDone, setTitleDone] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  let charIndex = 0;

  return (
    <section ref={sectionRef} className="relative z-10 pt-10 pb-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-y-8">
        {/* ── Title glow ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-red-500/15 blur-[100px]"
        />

        {/* ── Typing title ── */}
        <h2 className="relative text-3xl sm:text-5xl font-bold tracking-tight font-pixelify">
          {titleSegments.map((segment) => (
            <span key={segment.text} className={segment.className}>
              {segment.text.split("").map((char) => {
                const i = charIndex++;
                const isLast = i === totalChars - 1;
                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: i * CHAR_DELAY, duration: 0.05 }}
                    onAnimationComplete={
                      isLast ? () => setTitleDone(true) : undefined
                    }
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          ))}
          {/* Blinking cursor while title is typing */}
          {!titleDone && isInView && (
            <motion.span
              className="inline-block w-[3px] h-[0.85em] bg-red-500 ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </h2>

        {/* ── Terminal paragraph (appears after title finishes) ── */}
        {titleDone && (
          <div className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#94a3b8] font-sans">
            <TypeAnimation
              sequence={[PARAGRAPH_TEXT]}
              speed={50}
              repeat={0}
              cursor={true}
              wrapper="p"
            />
          </div>
        )}
      </div>
    </section>
  );
}
