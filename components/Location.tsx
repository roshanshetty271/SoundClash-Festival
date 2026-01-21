export default function Location() {
  return (
    <section id="location" className="relative py-20 md:py-32 bg-zinc-950 border-y-4 border-zinc-800 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info - Dark Mode & Tech Style */}
          <div className="space-y-8">
            <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.85] tracking-tighter text-white">
              COORDINATES
              <br />
              <span className="text-neon-pink">LOCKED</span>
            </h2>

            <div className="border-l-2 border-zinc-800 pl-6 space-y-8">
              <div className="group">
                <div className="font-mono font-bold text-xs uppercase mb-2 text-neon-yellow tracking-widest">Target Location</div>
                <div className="font-display font-black text-4xl uppercase text-white mb-2">Zilker Park</div>
                <div className="font-mono text-zinc-400 text-lg">2100 Barton Springs Rd<br />Austin, TX 78704</div>
              </div>

              <div className="group">
                <div className="font-mono font-bold text-xs uppercase mb-2 text-neon-yellow tracking-widest">Access Points</div>
                <ul className="space-y-3 font-mono text-zinc-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-neon-pink rounded-full" />
                    Shuttles from Republic Square
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-neon-pink rounded-full" />
                    Ride Share Drop-Off (Zone A)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-neon-pink rounded-full" />
                    Bike Valet (Barton Springs Entrance)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Abstract Map Visualization */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-black border border-zinc-800 overflow-hidden group">
            {/* Radar Sweep Animation */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(0,255,102,0.1)_360deg)] animate-spin-[spin_4s_linear_infinite] rounded-full scale-[1.5] opacity-0 group-hover:opacity-100 transition-opacity duration-700 will-change-transform transform-gpu" />

            {/* Map Grid */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] border border-zinc-800 rounded-full flex items-center justify-center">
                <div className="w-[60%] h-[60%] border border-zinc-800 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-neon-pink rounded-full animate-pulse shadow-[0_0_20px_#ff0066]" />
                </div>
              </div>
            </div>

            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="font-mono text-xs text-neon-yellow">
                LAT: 30.2669° N<br />
                LNG: 97.7729° W
              </div>
              <a
                href="https://maps.google.com/?q=Zilker+Metropolitan+Park"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black font-mono font-bold uppercase text-sm hover:bg-neon-pink hover:text-white transition-colors"
              >
                Initiate Nav
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
