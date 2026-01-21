interface TicketTierProps {
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  color: string;
  isFeatured?: boolean;
  soldOut?: boolean;
}

export default function TicketTier({
  name,
  price,
  originalPrice,
  features,
  color,
  isFeatured = false,
  soldOut = false,
}: TicketTierProps) {
  return (
    <div
      className={`${color} border-3 border-black shadow-brutal ${
        isFeatured ? "shadow-brutal-lg -translate-y-2 md:-translate-y-4" : ""
      } ${soldOut ? "opacity-60" : ""}`}
    >
      {/* Header */}
      <div className="p-6 border-b-3 border-black">
        {isFeatured && (
          <div className="inline-block px-2 py-1 bg-black text-yellow font-mono text-xs font-bold uppercase mb-3">
            Most Popular
          </div>
        )}
        <h3 className="font-display font-bold text-2xl uppercase mb-2">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-display font-black text-5xl">${price}</span>
          {originalPrice && (
            <span className="font-mono text-lg line-through opacity-50">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="font-mono text-sm flex items-start gap-2">
              <span className="text-lg">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        {soldOut ? (
          <div className="w-full py-4 bg-gray-300 text-black font-mono font-bold uppercase text-center border-3 border-black">
            Sold Out
          </div>
        ) : (
          <button className="w-full py-4 bg-black text-yellow font-mono font-bold uppercase border-3 border-black hover:bg-blue hover:text-white transition-colors">
            Get {name} →
          </button>
        )}
      </div>
    </div>
  );
}
