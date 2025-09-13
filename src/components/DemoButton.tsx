"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function DemoButton() {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = () => {
    window.open(
      "https://calendly.com/zayaan19/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
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
      <div className="flex items-center">
        {/* TALK TO US Text */}
        <span
          className="text-lg sm:text-xl font-medium text-black hover:text-accent transition-colors duration-200"
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontWeight: 500,
          }}
        >
          Talk to us
        </span>
      </div>
    </motion.div>
  );
}
