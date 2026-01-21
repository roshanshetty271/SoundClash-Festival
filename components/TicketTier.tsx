"use client";

import { Check } from "lucide-react";

interface TicketTierProps {
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  color: string;
  isFeatured?: boolean;
  soldOut?: boolean;
}

export default function TicketTier({
  name,
  price,
  originalPrice,
  features,
  color,
  isFeatured = false,
  soldOut = false,
}: TicketTierProps) {
  return (
    <div
      className={`relative bg-zinc-50 border-4 border-zinc-900 p-0 transform transition-transform hover:-translate-y-2 ${isFeatured ? "rotate-1 shadow-[15px_15px_0px_#ccff00]" : "shadow-[10px_10px_0px_#18181b]"
        } ${soldOut ? "opacity-60 grayscale pointer-events-none" : ""}`}
    >
      {/* Hole Punch Visual */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-950 rounded-full border-2 border-zinc-800" />

      {/* Header Section */}
      <div className="bg-zinc-900 p-6 pt-10 text-center border-b-4 border-zinc-900 pb-8">
        {isFeatured && (
          <div className="inline-block bg-neon-yellow text-black font-mono font-bold text-xs uppercase px-2 py-1 mb-2 transform -rotate-2">
            Most Wanted
          </div>
        )}
        <h3 className={`font-display font-black text-4xl uppercase text-white tracking-widest`}>
          {name}
        </h3>
      </div>

      <div className="p-8 text-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
        <div className="font-mono text-zinc-500 text-sm mb-1 uppercase tracking-widest">Admit One</div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="font-display font-black text-6xl text-zinc-900">${price}</span>
          {originalPrice && (
            <span className="font-mono text-xl line-through text-red-600 font-bold decoration-4 decoration-red-600">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="border-t-2 border-dashed border-zinc-300 my-6" />

        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, i) => (
            <li key={i} className="font-mono text-sm flex items-start gap-3 text-zinc-700 font-bold">
              <Check className="w-5 h-5 text-black shrink-0" strokeWidth={3} />
              {feature}
            </li>
          ))}
        </ul>

        <button className={`w-full py-4 font-display font-black uppercase text-xl border-4 border-black transition-all ${soldOut ? "bg-zinc-300 text-zinc-500" : "bg-white text-black hover:bg-black hover:text-white"
          }`}>
          {soldOut ? "SOLD OUT" : "SECURE PASS"}
        </button>
      </div>

      {/* Barcode Strip */}
      <div className="h-12 bg-zinc-900 flex items-center justify-center overflow-hidden">
        <div className="font-barcode text-zinc-500 opacity-50 text-xs tracking-[0.5em] scale-x-150">
          ||| | || ||| | || || |||
        </div>
      </div>
    </div>
  );
}
