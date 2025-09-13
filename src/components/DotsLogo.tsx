"use client";

import Link from "next/link";

export function DotsLogo() {
  return (
    <Link href="/" className="flex items-center cursor-pointer">
      <span
        className="text-lg sm:text-xl lg:text-2xl font-medium text-black"
        style={{
          fontFamily: "var(--font-instrument-sans)",
          fontWeight: 500,
        }}
      >
        Playfield
      </span>
    </Link>
  );
}
