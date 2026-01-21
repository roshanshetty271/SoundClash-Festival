"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ArtistCardProps {
  name: string;
  genre: string;
  day: string;
  imageUrl: string;
  isHeadliner?: boolean;
  index?: number;
}

export default function ArtistCard({
  name,
  genre,
  day,
  imageUrl,
  isHeadliner = false,
  index = 0,
}: ArtistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ rotate: -2, scale: 1.05 }}
      className="group relative cursor-pointer"
    >
      {/* Tape effect on top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/20 backdrop-blur-sm shadow-sm rotate-2 z-20 pointer-events-none" />

      {/* Grunge Card */}
      <div className="relative bg-zinc-100 p-3 shadow-[8px_8px_0px_#18181b] border-2 border-zinc-900 transition-shadow duration-300 group-hover:shadow-[12px_12px_0px_#ccff00]">

        {/* Distressed Image */}
        <div className="relative aspect-square overflow-hidden mb-3 border border-zinc-900 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
          />
          {/* Noise Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply pointer-events-none" />

          {isHeadliner && (
            <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white font-display font-black uppercase text-center py-1 tracking-widest text-sm">
              Headliner
            </div>
          )}
        </div>

        {/* Info - Stamped Look */}
        <div className="text-center">
          <h3 className="font-display font-black text-2xl uppercase leading-none text-zinc-900 mb-2 transform -rotate-1">
            {name}
          </h3>
          <div className="inline-block px-2 py-0.5 border border-zinc-900 font-mono text-[10px] bg-white uppercase font-bold text-zinc-600">
            {day} • {genre}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
