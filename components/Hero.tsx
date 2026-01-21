"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void pointer-events-none" />

      {/* Date Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mb-8 px-6 py-2 bg-neon-pink/10 border border-neon-pink/50 rounded-full backdrop-blur-md"
      >
        <span className="font-mono text-neon-pink font-bold tracking-widest text-sm uppercase">
          June 14-16, 2026 • Austin, TX
        </span>
      </motion.div>

      {/* Main Headline - THE CLASH */}
      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center justify-center relative select-none">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="font-display font-black text-6xl md:text-9xl tracking-tighter text-white mix-blend-difference relative z-20 will-change-transform transform-gpu"
          >
            SOUND
          </motion.h1>

          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
            className="font-display font-black text-6xl md:text-9xl tracking-tighter text-neon-yellow absolute top-8 md:top-16 lg:top-24 z-10 opacity-80 mix-blend-overlay animate-glitch will-change-transform transform-gpu"
          >
            CLASH
          </motion.h1>

          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
            className="font-display font-black text-6xl md:text-9xl tracking-tighter text-transparent text-stroke relative z-20 mt-[-2rem] md:mt-[-4rem] will-change-transform transform-gpu"
          >
            CLASH
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-mono text-zinc-400 mt-8 text-lg md:text-xl max-w-xl mx-auto px-4"
        >
          The frequency war begins. <br className="md:hidden" /> 50+ Artists. 3 Stages.
          <span className="text-neon-pink block md:inline md:ml-2 font-bold">No Survivors.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#tickets"
            className="group relative px-8 py-4 bg-neon-yellow text-black font-mono font-bold text-lg uppercase clip-path-slant hover:bg-white transition-colors"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
            <span className="relative z-10">Get Tickets</span>
          </a>
          <a
            href="#lineup"
            className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-mono font-bold text-lg uppercase hover:border-neon-pink hover:text-neon-pink transition-colors backdrop-blur-sm"
          >
            Lineup 2026
          </a>
        </motion.div>
      </div>

      {/* Floating Glitch Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden md:block"
      >
        <div className="glass-panel p-4 rounded-lg transform -rotate-12 border-neon-blue/30">
          <span className="font-mono text-neon-blue text-xs font-bold">EARLY BIRD LIVE</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-10 hidden md:block"
      >
        <div className="glass-panel p-4 rounded-lg transform rotate-6 border-neon-pink/30">
          <span className="font-mono text-neon-pink text-xs font-bold">SOLD OUT 2025</span>
        </div>
      </motion.div>
    </section>
  );
}
