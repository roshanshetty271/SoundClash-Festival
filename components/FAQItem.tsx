"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full text-left bg-zinc-800 border-2 border-zinc-700 p-6 transition-all duration-300 relative overflow-hidden",
          isOpen ? "bg-white border-white" : "hover:bg-zinc-700"
        )}
      >
        <div className="flex items-start justify-between gap-4 relative z-10">
          <span className={cn(
            "font-display font-black text-xl md:text-2xl uppercase tracking-wide",
            isOpen ? "text-black" : "text-zinc-300 group-hover:text-white"
          )}>
            {question}
          </span>
          <span className={cn(
            "font-mono text-2xl leading-none transform transition-transform duration-300",
            isOpen ? "rotate-45 text-black" : "text-zinc-500"
          )}>
            +
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="bg-zinc-900 border-x-2 border-b-2 border-zinc-700 p-6">
              <p className="font-mono text-zinc-400 leading-relaxed text-sm md:text-base border-l-2 border-neon-yellow pl-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
