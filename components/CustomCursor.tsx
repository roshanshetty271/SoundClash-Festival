"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            // Subtract half the size (24px) to center the 48px cursor
            mouseX.set(e.clientX - 24);
            mouseY.set(e.clientY - 24);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] drop-shadow-md will-change-transform"
            style={{
                x: mouseX,
                y: mouseY,
            }}
        >
            <div className="relative w-12 h-12">
                <Image
                    src="/images/icons8-bass-guitar-48.png"
                    alt="Bass Guitar Cursor"
                    fill
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
}
