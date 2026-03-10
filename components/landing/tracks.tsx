"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function TracksSection() {
  return (
    <section className="relative z-10 py-24 px-6">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-5xl font-bold tracking-tight"
        >
          <span className="text-[#f8fafc]">Event </span>
          <span className="bg-gradient-to-r from-red-500 via-rose-600 to-rose-800 bg-clip-text text-transparent">
            Tracks
          </span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
