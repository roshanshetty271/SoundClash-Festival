"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow border-b-3 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-2xl uppercase">
            SOUNDCLASH
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Lineup", "Tickets", "Schedule", "Location", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 font-mono text-sm uppercase font-bold hover:bg-black hover:text-yellow transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#tickets"
              className="ml-4 px-6 py-2 bg-black text-yellow font-mono font-bold uppercase border-3 border-black hover:bg-blue hover:text-white transition-colors"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 border-3 border-black bg-white"
          >
            <span className="font-mono font-bold">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t-3 border-black bg-white">
            {["Lineup", "Tickets", "Schedule", "Location", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 font-mono text-sm uppercase font-bold border-b-3 border-black hover:bg-yellow"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
