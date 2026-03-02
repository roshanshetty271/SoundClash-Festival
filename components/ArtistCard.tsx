"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ArtistCardProps {
  name: string;
  genre: string;
  day: string;
  imageUrl: string;
  isHeadliner?: boolean;
  index?: number;
}

function ArtistImageFallback({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center gap-3">
      <div className="w-16 h-16 rounded-full border-2 border-[#ccff00] flex items-center justify-center">
        <span className="font-display font-black text-2xl text-[#ccff00] uppercase">
          {initials}
        </span>
      </div>
      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
        Image unavailable
      </span>
    </div>
  );
}

export default function ArtistCard({
  name,
  genre,
  day,
  imageUrl,
  isHeadliner = false,
  index = 0,
}: ArtistCardProps) {
  const [imgStatus, setImgStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

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
          {imgStatus === "loading" && (
            <div className="absolute inset-0 bg-zinc-800 animate-pulse z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-zinc-600 border-t-[#ccff00] rounded-full animate-spin" />
              </div>
            </div>
          )}

          {imgStatus === "error" ? (
            <ArtistImageFallback name={name} />
          ) : (
            <Image
              src={imageUrl}
              alt={name}
              fill
              unoptimized
              className={`object-cover transition-opacity duration-500 ${
                imgStatus === "loaded" ? "opacity-100" : "opacity-0"
              }`}
              sizes={
                isHeadliner
                  ? "(max-width: 768px) 100vw, 33vw"
                  : "(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              }
              onLoad={() => setImgStatus("loaded")}
              onError={() => setImgStatus("error")}
            />
          )}

          {/* Noise Overlay */}
          <div className="absolute inset-0 noise-texture opacity-30 mix-blend-multiply pointer-events-none" />

          {isHeadliner && (
            <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white font-display font-black uppercase text-center py-1 tracking-widest text-sm z-10">
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
