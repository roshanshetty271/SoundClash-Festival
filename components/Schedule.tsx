"use client";

import ScheduleDay from "./ScheduleDay";
import { schedule } from "@/lib/data";

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-white text-black font-display font-black text-xl uppercase -rotate-2 transform">
            Don&apos;t Miss A Beat
          </div>
          <h2 className="font-display font-black text-6xl md:text-8xl uppercase text-white tracking-tighter mt-4">
            The Setlist
          </h2>
        </div>

        {/* Days grid - Setlist Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group">
            {/* Tape Element */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/10 backdrop-blur-sm rotate-3 transform z-20" />
            <ScheduleDay
              day="Friday"
              date="June 14"
              color="bg-transparent text-white border-2 border-white"
              slots={schedule.friday}
            />
          </div>

          <div className="relative group md:-mt-8">
            {/* Tape Element */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/10 backdrop-blur-sm -rotate-2 transform z-20" />
            <ScheduleDay
              day="Saturday"
              date="June 15"
              color="bg-white text-black border-2 border-white transform rotate-1"
              slots={schedule.saturday}
            />
          </div>

          <div className="relative group">
            {/* Tape Element */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/10 backdrop-blur-sm rotate-1 transform z-20" />
            <ScheduleDay
              day="Sunday"
              date="June 16"
              color="bg-transparent text-white border-2 border-white"
              slots={schedule.sunday}
            />
          </div>
        </div>

        {/* Download full schedule */}
        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-transparent border-4 border-white text-white font-display font-black text-2xl uppercase hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95">
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}
