"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ValueCard } from "./ValueCard";

const valueData = [
  {
    id: "workflows",
    title: "Workflows",
    description:
      "We build a knowledge graph of your enterprise systems for our AI to reason over and plan your agentic workflows. You can then edit or just execute.",
    mediaType: "image" as const,
    mediaUrl: "/images/workflows.png",
  },
  {
    id: "apps",
    title: "Apps",
    description:
      "Prompt to build fully functional internal apps and complete UIs that interact with your systems.",
    mediaType: "image" as const,
    mediaUrl: "/images/apps.png",
  },
  {
    id: "specialization",
    title: "Specialization",
    description:
      "For complex agentic workflows that may take hours or days for a human to execute, we work with you to train specialized agents that perform these tasks robustly.",
    mediaType: "image" as const,
    mediaUrl: "/images/specialization.png",
  },
  {
    id: "enterprise-security",
    title: "Enterprise Security",
    description:
      "We prioritize on-prem/VPC deployment, SSO and seat-by-seat auth. We can also integrate custom security measures like VDRs on request.",
    mediaType: "image" as const,
    mediaUrl: "/images/Enterprise.png",
  },
];

export function UnifiedLayout() {
  const { scrollYProgress } = useScroll();

  // Create transforms for intro text (always visible)
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    [1, 1, 0.3, 0]
  );
  const introBlur = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    [0, 0, 0, 4]
  );
  const introY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    [0, 0, 0, -30]
  );
  const introScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    [1, 1, 1, 0.95]
  );

  // Create transforms for each value card (0-3, 4 total)
  const card0Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45],
    [0, 1, 1, 0]
  );
  const card0Blur = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45],
    [4, 0, 0, 4]
  );
  const card0Y = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45],
    [30, 0, 0, -30]
  );
  const card0Scale = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45],
    [0.95, 1, 1, 0.95]
  );

  const card1Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0, 1, 1, 0]
  );
  const card1Blur = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [4, 0, 0, 4]
  );
  const card1Y = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [30, 0, 0, -30]
  );
  const card1Scale = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0.95, 1, 1, 0.95]
  );

  const card2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [0, 1, 1, 0]
  );
  const card2Blur = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [4, 0, 0, 4]
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [30, 0, 0, -30]
  );
  const card2Scale = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [0.95, 1, 1, 0.95]
  );

  const card3Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0, 1, 1, 1]
  );
  const card3Blur = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [4, 0, 0, 0]
  );
  const card3Y = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [30, 0, 0, 0]
  );
  const card3Scale = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0.95, 1, 1, 1]
  );

  // Create transforms for horizontal lines (4 lines for 4 value props)
  const line0Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45],
    [0.3, 1, 1, 0.3]
  );
  const line0Scale = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45],
    [0.8, 1, 1, 0.8]
  );

  const line1Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0.3, 1, 1, 0.3]
  );
  const line1Scale = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0.8, 1, 1, 0.8]
  );

  const line2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [0.3, 1, 1, 0.3]
  );
  const line2Scale = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [0.8, 1, 1, 0.8]
  );

  const line3Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0.3, 1, 1, 1]
  );
  const line3Scale = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0.8, 1, 1, 1]
  );

  const cardTransforms = [
    { opacity: card0Opacity, blur: card0Blur, y: card0Y, scale: card0Scale },
    { opacity: card1Opacity, blur: card1Blur, y: card1Y, scale: card1Scale },
    { opacity: card2Opacity, blur: card2Blur, y: card2Y, scale: card2Scale },
    { opacity: card3Opacity, blur: card3Blur, y: card3Y, scale: card3Scale },
  ];

  const lineTransforms = [
    { opacity: line0Opacity, scale: line0Scale },
    { opacity: line1Opacity, scale: line1Scale },
    { opacity: line2Opacity, scale: line2Scale },
    { opacity: line3Opacity, scale: line3Scale },
  ];

  return (
    <section className="h-screen w-full bg-white flex flex-col lg:flex-row px-3 sm:px-6 md:px-8 lg:px-16">
      {/* Left Side - Text Content with Field Background */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center pr-0 lg:pr-8">
        {/* Main Image Card - Scaled up version of value card */}
        <div className="flex flex-col space-y-4 sm:space-y-6">
          {/* Field Image */}
          <motion.div
            className="relative w-full aspect-[4/3] overflow-hidden"
            initial={{ filter: "blur(8px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/field.png"
              alt="Green field with clear sky"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Title overlay with text selection highlight effect */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-60">
              <div className="relative">
                {/* Text selection highlight background */}
                {/* <div
                  className="absolute inset-0 px-2 py-1"
                  style={{
                    background: "#1C4CCE", // Blue selection highlight
                    borderRadius: "2px",
                    transform: "translateY(-2px)",
                  }}
                ></div> */}

                {/* Main text */}
                <h1
                  className="relative text-white text-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontWeight: 400,
                    fontSize: "clamp(1.8rem, 8vw, 6rem)",
                    lineHeight: "0.9",
                    letterSpacing: "-0.05em",
                    color: "#FFFFFF",
                    textShadow: "0 4px 12px rgba(0,0,0,0.7)",
                  }}
                >
                  Welcome to the Field
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Intro Text and Value Props */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-white relative pl-0 lg:pl-8">
        {/* Intro Text and Value Cards - Single Card Display */}
        <motion.div
          className="h-full flex items-center justify-center p-4 sm:p-6 lg:p-8 pr-12 sm:pr-20 md:pr-24 lg:pr-28 xl:pr-36"
          initial={{ filter: "blur(8px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <div className="w-full max-w-xl relative">
            {/* Intro Text - Always visible initially */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: introOpacity,
                filter: `blur(${introBlur}px)`,
                y: introY,
                scale: introScale,
                zIndex: introOpacity.get() > 0.1 ? 10 : 1,
              }}
            >
              <div className="w-full">
                <p
                  className="font-normal leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-left"
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontWeight: 400,
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                    color: "#07130E",
                  }}
                >
                  Generate agentic workflows and internal apps that take actions
                  over your existing systems.
                </p>
              </div>
            </motion.div>

            {/* Value Cards */}
            {valueData.map((value, index) => {
              const transforms = cardTransforms[index];

              return (
                <motion.div
                  key={value.id}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: transforms.opacity,
                    filter: `blur(${transforms.blur}px)`,
                    y: transforms.y,
                    scale: transforms.scale,
                    zIndex: transforms.opacity.get() > 0.1 ? 10 : 1,
                  }}
                >
                  <ValueCard
                    title={value.title}
                    description={value.description}
                    mediaType={value.mediaType}
                    mediaUrl={value.mediaUrl}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Horizontal Lines - Rightmost Position */}
        <div className="absolute top-1/2 right-2 sm:right-4 md:right-6 lg:right-8 -translate-y-1/2 z-10">
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
            {valueData.map((value, index) => {
              const transforms = lineTransforms[index];

              return (
                <motion.div
                  key={value.id}
                  className="flex items-center"
                  style={{
                    opacity: transforms.opacity,
                    scale: transforms.scale,
                  }}
                >
                  <div className="w-16 sm:w-20 lg:w-24 h-px bg-accent mr-2 sm:mr-3 lg:mr-4" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
