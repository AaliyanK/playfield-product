"use client";

import Image from "next/image";

interface ValueCardProps {
  title: string;
  description: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  isActive?: boolean;
  index?: number;
}

export function ValueCard({
  title,
  description,
  mediaUrl,
  mediaType = "image",
}: ValueCardProps) {
  return (
    <div className="w-full">
      {/* Media - On Top */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
        {mediaUrl ? (
          mediaType === "video" ? (
            <video
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image src={mediaUrl} alt={title} fill className="object-cover" />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10">
            <div className="text-center text-accent">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 flex items-center justify-center">
                {mediaType === "video" ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="text-xs font-medium">
                {mediaType === "video"
                  ? "Video placeholder"
                  : "Image placeholder"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Title and Description - Below */}
      <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
        {title && (
          <h3
            className="font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-tight"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 400,
              lineHeight: "1",
              letterSpacing: "-0.03em",
              color: "#07130E",
            }}
          >
            {title}
          </h3>
        )}

        <p
          className={`font-normal leading-relaxed ${
            !title
              ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-right"
              : "text-base sm:text-lg lg:text-xl xl:text-2xl"
          }`}
          style={{
            fontFamily: "var(--font-instrument-sans)",
            fontWeight: 400,
            lineHeight: !title ? "1.1" : "1.4",
            letterSpacing: !title ? "-0.02em" : "-0.01em",
            color: "#07130E",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
