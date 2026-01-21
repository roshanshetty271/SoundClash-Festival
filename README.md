# SOUNDCLASH 2026 🤘🎸

A high-octane "Rock Grunge" music festival landing page built with Next.js 14, TypeScript, and Tailwind CSS. The design embraces a raw, anti-corporate aesthetic with distressed textures, glitch effects, and a dark "night mode" vibe.

## 🎸 Design Philosophy: "Rock Grunge"

This isn't your average clean corporate site. It's built to look like a gig flyer found on a rainy street corner.

-   **Texture & Grit**: Distressed backgrounds, tape overlays, and paper textures.
-   **Dark Mode Core**: A `void` black background (`#0a0a0a`) with high-contrast Neon Yellow (`#ccff00`) and Neon Pink (`#ff00ff`) accents.
-   **Typography**: `Space Grotesk` (Headlines) and `Space Mono` (Data/Body) for a tech-meets-punk feel.
-   **Motion**:
    -   **Lenis Smooth Scroll**: Heavy, momentum-based scrolling.
    -   **Glitch Effects**: CSS-based text tearing and displacement.
    -   **Audio Visualizer**: React-based waveform that responds to user interaction.
    -   **Zero-Lag Cursor**: Custom Bass Guitar cursor with direct 1:1 hardware tracking.

## 🛠 Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS + `tailwind-merge`
-   **Animation**: Framer Motion
-   **Scroll**: Lenis
-   **Icons**: Lucide React
-   **Fonts**: Google Fonts (Space Mono, Space Grotesk)

## 🚀 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Open the void**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```
soundclash-festival/
├── app/
│   ├── layout.tsx      # Root layout + Lenis SmoothScroll
│   ├── page.tsx        # Main page assembly
│   └── globals.css     # Global styles + Glitch animations
├── components/
│   ├── Hero.tsx        # Glitch text & marquee
│   ├── Navbar.tsx      # Fixed navigation
│   ├── AudioVisualizer.tsx # Interactive background
│   ├── CustomCursor.tsx    # Bass guitar cursor (No physics/lag)
│   ├── Lineup.tsx      # Holographic artist cards
│   ├── Schedule.tsx    # "Backstage Setlist" style
│   ├── Location.tsx    # "Coordinates Locked" map
│   ├── FAQ.tsx         # "Zine" style accordion
│   └── ...
├── lib/
│   └── utils.ts        # Tailwind class merger
└── public/
    └── images/         # Textures & Assets
```

## 🎨 Key Features

-   **Global Smooth Scroll**: Custom implementation using `@studio-freight/lenis`.
-   **Performance Optimized**: Heavy animations (Radar, Glitch) use `will-change-transform` and `transform-gpu` for solid 60fps.
-   **Interactive Background**: A subtle audio visualizer that gives depth without distraction.
-   **Responsive**: Mobile-first design that scales from phones to 4k desktops.

---

**Built with 🖤 by Roshan Shetty**
