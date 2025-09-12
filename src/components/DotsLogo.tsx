"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function DotsLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const dotVariants = {
    initial: { y: 0, scale: 1, opacity: 1 },
    hover: (index: number) => ({
      y: prefersReducedMotion ? 0 : [-4, 4, -2, 2, 0],
      scale: prefersReducedMotion ? 1 : [1, 1.3, 0.8, 1.2, 1],
      opacity: prefersReducedMotion ? 1 : [1, 0.6, 1, 0.8, 1],
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        delay: prefersReducedMotion ? 0 : index * 0.15,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="text-lg sm:text-xl lg:text-2xl font-medium text-black"
        style={{
          fontFamily: "var(--font-instrument-sans)",
          fontWeight: 500,
        }}
      >
        Playfield
      </span>
      <div className="flex gap-1">
        {[0, 1, 2].map(index => (
          <motion.div
            key={index}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-accent"
            variants={dotVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            custom={index}
          />
        ))}
      </div>
    </div>
  );
}
