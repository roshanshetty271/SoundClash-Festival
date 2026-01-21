"use client";

import ArtistCard from "./ArtistCard";
import { artists } from "@/lib/data";
import { motion } from "framer-motion";

export default function Lineup() {
  const headliners = artists.filter((a) => a.isHeadliner);
  const others = artists.filter((a) => !a.isHeadliner);

  return (
    <section id="lineup" className="relative py-20 md:py-32 bg-void overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-neon-blue text-sm uppercase tracking-[0.2em] border border-neon-blue/30 px-3 py-1 rounded-full bg-neon-blue/5">
              50+ Artists Included
            </span>
          </motion.div>
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter"
          >
            THE <span className="text-transparent text-stroke">LINEUP</span>
          </motion.h2>
        </div>

        {/* Headliners */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neon-pink/50" />
            <span className="font-mono font-bold text-neon-pink uppercase tracking-widest text-lg">Headliners</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neon-pink/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {headliners.map((artist, index) => (
              <ArtistCard key={artist.name} {...artist} index={index} />
            ))}
          </div>
        </div>

        {/* Full Lineup */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neon-yellow/50" />
            <span className="font-mono font-bold text-neon-yellow uppercase tracking-widest text-lg">Full Cast</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neon-yellow/50" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {others.map((artist, index) => (
              <ArtistCard key={artist.name} {...artist} index={index} />
            ))}
          </div>
        </div>

        {/* TBA Badge */}
        <div className="mt-20 flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-white transition-colors">
              <span className="font-mono font-bold text-white uppercase tracking-widest">
                + More To Be Announced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
