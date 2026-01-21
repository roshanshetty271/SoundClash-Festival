import Image from "next/image";

interface ArtistCardProps {
  name: string;
  genre: string;
  day: string;
  imageUrl: string;
  isHeadliner?: boolean;
}

export default function ArtistCard({
  name,
  genre,
  day,
  imageUrl,
  isHeadliner = false,
}: ArtistCardProps) {
  const bgColor = isHeadliner ? "bg-yellow" : "bg-white";
  
  return (
    <div
      className={`${bgColor} border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:-translate-x-1 hover:-translate-y-1 transition-all cursor-pointer group`}
    >
      {/* Image container */}
      <div className="aspect-square overflow-hidden border-b-3 border-black relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
        />
        {isHeadliner && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-red text-white font-mono text-xs font-bold uppercase border-2 border-black">
            Headliner
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="font-mono text-xs uppercase text-gray-600 mb-1">
          {day} • {genre}
        </div>
        <h3 className="font-display font-bold text-xl uppercase leading-tight">
          {name}
        </h3>
      </div>
    </div>
  );
}
