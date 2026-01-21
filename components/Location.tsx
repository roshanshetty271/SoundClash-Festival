export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32 bg-white border-y-3 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-red text-white font-mono text-xs font-bold uppercase mb-4 border-3 border-black">
              Austin, Texas
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-8">
              The
              <br />
              <span className="text-blue">Venue</span>
            </h2>

            <div className="space-y-6 font-mono">
              <div className="p-4 bg-cream border-3 border-black">
                <div className="text-xs uppercase text-gray-600 mb-1">Address</div>
                <div className="font-bold">Zilker Metropolitan Park</div>
                <div>2100 Barton Springs Rd, Austin, TX 78704</div>
              </div>

              <div className="p-4 bg-cream border-3 border-black">
                <div className="text-xs uppercase text-gray-600 mb-1">Getting There</div>
                <ul className="space-y-2 text-sm">
                  <li>🚗 Free parking with VIP, $20/day for GA</li>
                  <li>🚌 Free shuttle from downtown Austin</li>
                  <li>✈️ 15 min from Austin-Bergstrom Airport</li>
                </ul>
              </div>

              <div className="p-4 bg-cream border-3 border-black">
                <div className="text-xs uppercase text-gray-600 mb-1">Camping</div>
                <div className="text-sm">
                  On-site camping included with all passes. Gates open Thursday 2PM.
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-cream border-3 border-black shadow-brutal h-[400px] lg:h-auto relative overflow-hidden">
            {/* Replace with actual map or styled placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-display font-bold text-4xl uppercase mb-4">
                  Zilker Park
                </div>
                <div className="font-mono text-sm mb-6">
                  The heart of Austin&apos;s live music scene
                </div>
                <a
                  href="https://maps.google.com/?q=Zilker+Metropolitan+Park"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue text-white font-mono font-bold uppercase border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  Open in Maps →
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-yellow border-3 border-black rotate-12"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-red border-3 border-black -rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
