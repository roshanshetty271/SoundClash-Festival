import ArtistCard from "./ArtistCard";
import { artists } from "@/lib/data";

export default function Lineup() {
  const headliners = artists.filter((a) => a.isHeadliner);
  const others = artists.filter((a) => !a.isHeadliner);

  return (
    <section id="lineup" className="py-20 md:py-32 bg-white border-y-3 border-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-blue text-white font-mono text-xs font-bold uppercase mb-4 border-3 border-black">
            50+ Artists
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase">
            The Lineup
          </h2>
        </div>

        {/* Headliners - larger cards */}
        <div className="mb-12">
          <h3 className="font-mono font-bold uppercase text-sm mb-6 flex items-center gap-2">
            <span className="w-8 h-[3px] bg-red"></span>
            Headliners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {headliners.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
        </div>

        {/* Other artists - smaller grid */}
        <div>
          <h3 className="font-mono font-bold uppercase text-sm mb-6 flex items-center gap-2">
            <span className="w-8 h-[3px] bg-blue"></span>
            Full Lineup
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {others.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
        </div>

        {/* More TBA */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-green text-black font-mono font-bold uppercase border-3 border-black shadow-brutal rotate-2">
            + More To Be Announced
          </div>
        </div>
      </div>
    </section>
  );
}
