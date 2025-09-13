"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { DotsLogo } from "./DotsLogo";
import { DemoButton } from "./DemoButton";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const router = useRouter();
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 8]);

  const handleWhitepaperClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Force scroll to top before navigation
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Navigate to whitepaper
    router.push("/whitepaper");
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white/95 backdrop-blur-sm"
      style={{
        backdropFilter: `blur(${backdropBlur}px)`,
        backgroundColor: `rgba(255, 255, 255, 0.95)`,
      }}
    >
      <div className="w-full flex items-center justify-between gap-4">
        <DotsLogo />
        <div className="flex items-center gap-8 sm:gap-12">
          <button
            onClick={handleWhitepaperClick}
            className="text-lg sm:text-xl font-medium text-black hover:text-accent transition-colors duration-200"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 500,
            }}
          >
            Whitepaper
          </button>
          <DemoButton />
        </div>
      </div>
    </motion.header>
  );
}
