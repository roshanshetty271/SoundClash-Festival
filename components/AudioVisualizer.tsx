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

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resize);
        resize();

        // Wave parameters
        let time = 0;
        const waves = [
            { color: "rgba(204, 255, 0, 0.05)", amplitude: 50, frequency: 0.005, speed: 0.02 }, // Neon Yellow
            { color: "rgba(255, 0, 255, 0.03)", amplitude: 70, frequency: 0.003, speed: 0.015 }, // Neon Pink
            { color: "rgba(0, 255, 255, 0.03)", amplitude: 30, frequency: 0.01, speed: 0.03 },   // Electric Blue
        ];

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            time += 1;

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 2; // Thin subtle lines

                for (let x = 0; x < width; x++) {
                    // Sine wave formula: y = amplitude * sin(frequency * x + time * speed)
                    // Added some noise based on scroll Y to make it react to "movement"
                    const scrollFactor = window.scrollY * 0.05;
                    const y =
                        height / 2 +
                        wave.amplitude * Math.sin(x * wave.frequency + time * wave.speed + scrollFactor * 0.01) +
                        Math.sin(x * 0.01 + time * 0.01) * 20; // Extra noise

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
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
