import FAQItem from "./FAQItem";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-4">
            FAQ
          </h2>
          <p className="font-mono">
            Got questions? We got answers.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm mb-4">Still have questions?</p>
          <a
            href="mailto:hello@soundclash.fake"
            className="inline-block px-6 py-3 bg-blue text-white font-mono font-bold uppercase border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}
