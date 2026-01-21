"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-3 border-black bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-yellow transition-colors"
      >
        <span className="font-display font-bold uppercase pr-4">{question}</span>
        <span className="font-mono text-2xl shrink-0">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t-3 border-black bg-cream">
          <p className="font-mono text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}
