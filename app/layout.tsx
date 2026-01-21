import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import AudioVisualizer from "@/components/AudioVisualizer";
import SmoothScroll from "@/components/SmoothScroll";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "SOUNDCLASH 2026 | The Festival That Breaks Rules",
  description: "3 days. 50 artists. Zero compromises. Austin, TX. June 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-void text-white antialiased cursor-none selection:bg-neon-pink selection:text-white">
        <SmoothScroll />
        <CustomCursor />
        <AudioVisualizer />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
