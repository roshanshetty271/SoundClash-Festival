export default function Footer() {
  return (
    <footer className="bg-black text-yellow py-16 border-t-3 border-yellow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <h3 className="font-display font-black text-4xl uppercase mb-4">
              SOUNDCLASH
            </h3>
            <p className="font-mono text-sm opacity-80 max-w-xs">
              The festival that breaks rules. See you in Austin, June 2026.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono font-bold uppercase text-sm mb-4">Festival</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="#lineup" className="hover:text-white transition-colors">Lineup</a></li>
              <li><a href="#tickets" className="hover:text-white transition-colors">Tickets</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono font-bold uppercase text-sm mb-4">Follow Us</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter/X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-yellow/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs opacity-60">
            © 2026 SOUNDCLASH. All rights reserved. This is a fictional festival.
          </p>
          <div className="flex gap-6 font-mono text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
