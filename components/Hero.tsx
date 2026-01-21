export default function Hero() {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background pattern - diagonal stripes */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #000 10px,
            #000 20px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        {/* Date badge */}
        <div className="inline-block mb-8 px-4 py-2 bg-red text-white font-mono font-bold uppercase border-3 border-black shadow-brutal">
          June 14-16, 2026 → Austin, TX
        </div>

        {/* Main headline - HUGE */}
        <h1 className="font-display font-black text-black leading-none mb-8">
          SOUND
          <span className="text-blue">CLASH</span>
          <br />
          <span className="text-red">2026</span>
        </h1>

        {/* Subheadline */}
        <p className="font-mono text-xl md:text-2xl max-w-2xl mb-12">
          3 days. 50+ artists. Zero compromises.
          <br />
          <span className="text-blue font-bold">The festival that breaks rules.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#tickets"
            className="px-8 py-4 bg-yellow text-black font-mono font-bold text-lg uppercase border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            Get Tickets →
          </a>
          <a
            href="#lineup"
            className="px-8 py-4 bg-white text-black font-mono font-bold text-lg uppercase border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            See Lineup
          </a>
        </div>

        {/* Floating elements - intentionally misaligned */}
        <div className="hidden lg:block absolute top-40 right-20 rotate-12">
          <div className="px-6 py-3 bg-green text-black font-mono font-bold uppercase border-3 border-black shadow-brutal">
            Sold Out 2025!
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-40 right-40 -rotate-6">
          <div className="px-6 py-3 bg-pink text-black font-mono font-bold uppercase border-3 border-black shadow-brutal">
            🔥 Early Bird Live
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-black text-yellow py-3 overflow-hidden border-t-3 border-black">
        <div className="animate-marquee whitespace-nowrap font-mono font-bold uppercase">
          {Array(10).fill("★ SOUNDCLASH 2026 ★ AUSTIN TX ★ JUNE 14-16 ★ GET YOUR TICKETS NOW ").join("")}
        </div>
      </div>
    </section>
  );
}
