import TicketTier from "./TicketTier";
import { ticketTiers } from "@/lib/data";

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-red text-white font-mono text-xs font-bold uppercase mb-4 border-3 border-black shadow-brutal">
            Limited Availability
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-4">
            Get Your
            <br />
            <span className="text-blue">Tickets</span>
          </h2>
          <p className="font-mono text-lg max-w-xl mx-auto">
            Early bird is gone. Don&apos;t sleep on General—VIP always sells out.
          </p>
        </div>

        {/* Ticket grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ticketTiers.map((tier) => (
            <TicketTier key={tier.name} {...tier} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-gray-600">
            All tickets include camping access. Payment plans available at checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
