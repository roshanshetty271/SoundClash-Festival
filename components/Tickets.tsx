"use client";

import TicketTier from "./TicketTier";
import { ticketTiers } from "@/lib/data";
import { motion } from "framer-motion";

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 font-mono text-xs font-bold uppercase mb-4 rounded-full animate-pulse border border-red-500/20">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Selling Fast
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-4 text-white">
            Secure Your <span className="text-neon-yellow">Spot</span>
          </h2>
          <p className="font-mono text-zinc-400 text-lg max-w-xl mx-auto">
            Choose your destiny. All passes include camping.
          </p>
        </div>

        {/* Ticket grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {ticketTiers.map((tier) => (
            <TicketTier key={tier.name} {...tier} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
            Payment Plans Available • 100% Refundable until May 1st
          </p>
        </div>
      </div>
    </section>
  );
}
