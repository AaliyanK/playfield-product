"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { DotsLogo } from "./DotsLogo";
import { DemoButton } from "./DemoButton";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-sm">
      <div className="w-full flex items-center justify-between gap-4">
        <DotsLogo />
        <DemoButton />
      </div>
    </motion.header>
  );
}
