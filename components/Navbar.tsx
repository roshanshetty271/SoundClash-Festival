"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Lineup", "Tickets", "Schedule", "Location", "FAQ"];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-void/80 backdrop-blur-xl border-white/10 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="group relative font-display font-black text-3xl uppercase tracking-tighter mr-2">
              <span className="text-white group-hover:text-neon-yellow transition-colors">SOUND</span>
              <span className="text-transparent text-stroke group-hover:text-neon-pink transition-colors">CLASH</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-sm uppercase font-bold text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-yellow transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#tickets"
              className="ml-4 px-6 py-2 bg-white text-black font-mono font-bold uppercase hover:bg-neon-yellow transition-colors"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            <span className="font-mono font-bold text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void/95 backdrop-blur-2xl fixed inset-0 z-40 pt-24 px-4"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl uppercase font-black text-transparent text-stroke hover:text-neon-yellow transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
}
