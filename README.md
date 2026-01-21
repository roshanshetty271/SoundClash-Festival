# SOUNDCLASH 2026 🎸

A neobrutalist music festival landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Design Style

**Neobrutalism** — Raw, bold, anti-corporate, punk aesthetic featuring:
- Thick black borders (3px)
- Offset shadows (4px/8px, no blur)
- Clashing primary colors (yellow, blue, red, green, pink)
- Space Grotesk for headlines, Space Mono for body
- Intentional visual chaos

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Space Mono, Space Grotesk)
- **Images:** Picsum Photos (placeholder service)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
soundclash-festival/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx      # Fixed navigation
│   ├── Hero.tsx        # Hero with marquee
│   ├── ArtistCard.tsx  # Individual artist card
│   ├── Lineup.tsx      # Artist grid section
│   ├── TicketTier.tsx  # Ticket tier card
│   ├── Tickets.tsx     # Tickets section
│   ├── ScheduleDay.tsx # Daily schedule card
│   ├── Schedule.tsx    # Full schedule section
│   ├── Location.tsx    # Venue info section
│   ├── FAQItem.tsx     # Accordion item
│   ├── FAQ.tsx         # FAQ section
│   └── Footer.tsx      # Footer
├── lib/
│   └── data.ts         # Mock data (artists, schedule, FAQs)
└── public/
    └── images/         # Image assets
```

## Design Tokens

### Colors
- Yellow: `#FFE500` (Primary accent)
- Blue: `#0047FF` (Secondary accent)
- Red: `#FF3333` (Tertiary accent)
- Green: `#00FF66` (Highlight)
- Pink: `#FF66B2` (Highlight)
- Cream: `#FFFEF0` (Background)

### Shadows
- `shadow-brutal`: `4px 4px 0px 0px #000000`
- `shadow-brutal-lg`: `8px 8px 0px 0px #000000`
- `shadow-brutal-hover`: `6px 6px 0px 0px #000000`

## Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Interactive FAQ accordion
- ✅ Grayscale → color hover on artist images
- ✅ Brutal button hover animations
- ✅ Infinite marquee animation
- ✅ Fixed navbar with mobile menu

## Customization

1. **Change colors:** Edit `tailwind.config.ts`
2. **Update content:** Edit `lib/data.ts`
3. **Modify layout:** Edit components in `/components`

## License

This is a portfolio/demonstration project. All festival content is fictional.

---

Built with 🤘 by Roshan Shetty
