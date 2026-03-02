"use client";

import { useEffect, useRef } from "react";

export default function AudioVisualizer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let isVisible = true;
        let cachedScrollY = window.scrollY;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleScroll = () => {
            cachedScrollY = window.scrollY;
        };

        const handleVisibility = () => {
            isVisible = document.visibilityState === "visible";
            if (isVisible) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        window.addEventListener("resize", resize, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("visibilitychange", handleVisibility);
        resize();

        let time = 0;
        const waves = [
            { color: "rgba(204, 255, 0, 0.05)", amplitude: 50, frequency: 0.005, speed: 0.02 },
            { color: "rgba(255, 0, 255, 0.03)", amplitude: 70, frequency: 0.003, speed: 0.015 },
            { color: "rgba(0, 255, 255, 0.03)", amplitude: 30, frequency: 0.01, speed: 0.03 },
        ];

        const step = 3;

        const animate = () => {
            if (!isVisible) return;

            ctx.clearRect(0, 0, width, height);
            time += 1;
            const scrollFactor = cachedScrollY * 0.05;

            for (let w = 0; w < waves.length; w++) {
                const wave = waves[w];
                ctx.beginPath();
                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 2;

                for (let x = 0; x < width; x += step) {
                    const y =
                        height / 2 +
                        wave.amplitude * Math.sin(x * wave.frequency + time * wave.speed + scrollFactor * 0.01) +
                        Math.sin(x * 0.01 + time * 0.01) * 20;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("visibilitychange", handleVisibility);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            aria-hidden="true"
        />
    );
}
