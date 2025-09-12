"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useState } from "react";

export function DemoButton() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(
      "https://calendly.com/zayaan19/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

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
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      transition={
        prefersReducedMotion
          ? { duration: 0.01 }
          : { type: "spring", stiffness: 400, damping: 17 }
      }
      className="cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Animated Dots */}
        <div className="flex gap-1">
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-sm"
              variants={dotVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              custom={index}
            />
          ))}
        </div>

        {/* TALK TO US Text */}
        <span
          className="text-accent text-lg sm:text-xl lg:text-2xl font-medium"
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontWeight: 500,
          }}
        >
          TALK TO US
        </span>
      </div>
    </motion.div>
  );
}
