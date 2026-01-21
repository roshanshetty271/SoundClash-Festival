"use client";

import FAQItem from "./FAQItem";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-32 bg-zinc-900 border-t-8 border-black">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-6xl md:text-9xl uppercase text-white tracking-tighter mb-4 transform -rotate-1">
            WTF?
          </h2>
          <div className="inline-block bg-white px-4 py-2 transform rotate-2">
            <p className="font-mono font-bold text-black uppercase tracking-widest text-sm">
              Frequently Asked Questions
            </p>
          </div>
        </div>

        {/* FAQ items */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>

        {/* Contact */}
        <div className="mt-20 text-center">
          <div className="inline-block p-6 bg-neon-yellow text-black border-4 border-black transform rotate-1 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <p className="font-display font-black text-2xl uppercase mb-2">Still Confused?</p>
            <a
              href="mailto:hello@soundclash.fake"
              className="font-mono text-sm underline decoration-2 underline-offset-4 hover:bg-black hover:text-white transition-colors px-1"
            >
              Shoot us an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
