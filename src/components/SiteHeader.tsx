"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
        <div className="flex items-center gap-6">
          <Link
            href="/whitepaper"
            className="text-lg sm:text-xl font-medium text-black hover:text-accent transition-colors"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 500,
            }}
          >
            Whitepaper
          </Link>
          <DemoButton />
        </div>
      </div>
    </motion.header>
  );
}
