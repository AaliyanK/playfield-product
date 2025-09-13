"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useState } from "react";

const valueData = [
  {
    id: "apps",
    title: "Knowledge Graph",
    description:
      "The multimodal reasoning map over your enterprise systems and the data they contain. A real time knowledge graph that learns and updates itself from changes to your systems, files, documents, workflows, and policies.",
    mediaType: "image" as const,
    mediaUrl: "/images/graph2.png",
  },
  {
    id: "workflows",
    title: "Agentic Workflows",
    description:
      "AI agents reason over your knowledge graph to build robust workflows that interact with your systems. You can edit them or just execute.",
    mediaType: "image" as const,
    mediaUrl: "/images/workflows.png",
  },
  {
    id: "specialization",
    title: "Specialized Intelligence",
    description:
      "For complex agentic workflows that may take hours or days for a human to execute, we work with you to train specialized agents that perform these tasks robustly through RL.",
    mediaType: "image" as const,
    mediaUrl: "/images/specialization.png",
  },
  {
    id: "enterprise-security",
    title: "Security",
    description:
      "We prioritize on-prem/VPC deployment, SSO and seat-by-seat auth, as well as industry specific measures like VDRs. We work with you to ensure complete security and compliance for your enterprise.",
    mediaType: "image" as const,
    mediaUrl: "/images/Enterprise.png",
  },
];

export function UnifiedLayout() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices - only for actual mobile screens
  useEffect(() => {
    const checkMobile = () => {
      // Only treat as mobile if it's actually a small mobile screen
      const mobile = window.innerWidth < 768; // md breakpoint - tablets and phones
      console.log("Mobile detection:", mobile, "Width:", window.innerWidth);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Create transforms for hero section - balanced timing
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [1, 1, 0.3, 0]
  );
  const heroBlurFull = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [0, 0, 0, 2]
  );
  const heroBlurReduced = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const heroBlur = shouldReduceMotion ? heroBlurReduced : heroBlurFull;
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [0, 0, 0, -30]
  );

  // Create transforms for each value proposition section - better timing
  const section0Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45, 0.55],
    [0, 1, 1, 0]
  );
  const section0BlurFull = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45, 0.55],
    [2, 0, 0, 2]
  );
  const section0BlurReduced = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const section0Blur = shouldReduceMotion
    ? section0BlurReduced
    : section0BlurFull;
  const section0Y = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45, 0.55],
    [30, 0, 0, -30]
  );

  const section1Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const section1BlurFull = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65, 0.75],
    [2, 0, 0, 2]
  );
  const section1BlurReduced = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const section1Blur = shouldReduceMotion
    ? section1BlurReduced
    : section1BlurFull;
  const section1Y = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65, 0.75],
    [30, 0, 0, -30]
  );

  const section2Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 0.95],
    [0, 1, 1, 0]
  );
  const section2BlurFull = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 0.95],
    [2, 0, 0, 2]
  );
  const section2BlurReduced = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const section2Blur = shouldReduceMotion
    ? section2BlurReduced
    : section2BlurFull;
  const section2Y = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 0.95],
    [30, 0, 0, -30]
  );

  const section3Opacity = useTransform(
    scrollYProgress,
    [0.85, 0.9, 0.95, 1],
    [0, 1, 1, 1]
  );
  const section3BlurFull = useTransform(
    scrollYProgress,
    [0.85, 0.9, 0.95, 1],
    [2, 0, 0, 0]
  );
  const section3BlurReduced = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const section3Blur = shouldReduceMotion
    ? section3BlurReduced
    : section3BlurFull;
  const section3Y = useTransform(
    scrollYProgress,
    [0.85, 0.9, 0.95, 1],
    [30, 0, 0, 0]
  );

  // For mobile: make all sections always visible, no scroll-based hiding
  const sectionTransforms = [
    {
      opacity: isMobile ? 1 : section0Opacity,
      blur: isMobile ? 0 : section0Blur,
      y: isMobile ? 0 : section0Y,
    },
    {
      opacity: isMobile ? 1 : section1Opacity,
      blur: isMobile ? 0 : section1Blur,
      y: isMobile ? 0 : section1Y,
    },
    {
      opacity: isMobile ? 1 : section2Opacity,
      blur: isMobile ? 0 : section2Blur,
      y: isMobile ? 0 : section2Y,
    },
    {
      opacity: isMobile ? 1 : section3Opacity,
      blur: isMobile ? 0 : section3Blur,
      y: isMobile ? 0 : section3Y,
    },
  ];

  return (
    <div
      className={`w-full bg-white ${isMobile ? "pb-16" : ""}`}
      style={{ height: isMobile ? "auto" : "500vh" }}
    >
      {/* Hero Section - Wide Image */}
      <motion.section
        className="w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-20 lg:py-24"
        style={{
          opacity: isMobile ? 1 : heroOpacity,
          filter: `blur(${isMobile ? 0 : heroBlur}px)`,
          y: isMobile ? 0 : heroY,
        }}
      >
        {/* Wide Image */}
        <div className="relative w-full aspect-[4/3] mb-12 sm:mb-16 lg:mb-20">
          <Image
            src="/images/field2.png"
            alt="Green field with clear sky"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Main Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              className="text-white text-center px-4"
              style={{
                fontFamily: "var(--font-instrument-sans)",
                fontWeight: 400,
                fontSize: "clamp(4rem, 18vw, 30rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.05em",
              }}
              initial={{
                filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
                opacity: 0,
              }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 1.2,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              Welcome to the Field
            </motion.h1>
          </div>
        </div>

        {/* Interface 1 Section */}
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Tagline Text - Now Above Interface 1 */}
          <motion.p
            className="text-black mb-6 sm:mb-8"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 4vw, 4rem)",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
            initial={{
              filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
              opacity: 0,
            }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 1.2,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
          >
            Turning legacy enterprises into AI operated businesses with
            specialized intelligence
          </motion.p>

          {/* Interface 1 Title - Now Below Tagline as Body Text */}
          <motion.p
            className="text-black"
            style={{
              fontFamily: "var(--font-instrument-sans)",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.5vw, 1.8rem)",
              lineHeight: "1.4",
              letterSpacing: "-0.01em",
            }}
            initial={{
              filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
              opacity: 0,
            }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.3 : 1.2,
              delay: shouldReduceMotion ? 0 : 0.6,
            }}
          >
            Interface 1
          </motion.p>
        </div>
      </motion.section>

      {/* Value Proposition Sections */}
      {valueData.map((value, index) => {
        const transforms = sectionTransforms[index];
        const isEven = index % 2 === 0;

        return (
          <motion.section
            key={value.id}
            className={`w-full flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-16 ${
              isMobile
                ? index === valueData.length - 1
                  ? "py-8 sm:py-12"
                  : "py-12 sm:py-16"
                : "min-h-screen lg:h-screen py-8 sm:py-12 lg:py-0"
            }`}
            style={{
              opacity: transforms.opacity,
              filter: `blur(${transforms.blur}px)`,
              y: transforms.y,
            }}
          >
            {/* Text Content */}
            <div
              className={`w-full ${
                isMobile
                  ? "order-2 mt-6"
                  : `lg:w-1/2 ${isEven ? "lg:pr-8" : "lg:pl-8"} ${isEven ? "lg:order-1" : "lg:order-2"} order-2`
              }`}
            >
              <div
                className={`max-w-2xl ${
                  isMobile ? "mx-auto text-center px-4" : "mx-auto lg:mx-0"
                }`}
              >
                <motion.h3
                  className="text-black mb-4 sm:mb-6 lg:mb-8"
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontWeight: 400,
                    fontSize: "clamp(1.8rem, 3.5vw, 4rem)",
                    lineHeight: "1.1",
                    letterSpacing: "-0.03em",
                  }}
                  initial={{
                    filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
                    opacity: 0,
                  }}
                  whileInView={{
                    filter: "blur(0px)",
                    opacity: 1,
                    transition: {
                      duration: shouldReduceMotion ? 0.3 : 1.2,
                      delay: shouldReduceMotion ? 0 : 0.2,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {value.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600"
                  style={{
                    fontFamily: "var(--font-instrument-sans)",
                    fontWeight: 400,
                    fontSize: "clamp(0.9rem, 1.2vw, 1.5rem)",
                    lineHeight: "1.4",
                    letterSpacing: "-0.01em",
                  }}
                  initial={{
                    filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
                    opacity: 0,
                  }}
                  whileInView={{
                    filter: "blur(0px)",
                    opacity: 1,
                    transition: {
                      duration: shouldReduceMotion ? 0.3 : 1.2,
                      delay: shouldReduceMotion ? 0 : 0.4,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {value.description}
                </motion.p>
              </div>
            </div>

            {/* Image Content */}
            <div
              className={`w-full ${
                isMobile
                  ? "order-1 mb-6"
                  : `lg:w-1/2 ${isEven ? "lg:pl-8" : "lg:pr-8"} ${isEven ? "lg:order-2" : "lg:order-1"} order-1 mb-6 sm:mb-8 lg:mb-0`
              }`}
            >
              <motion.div
                className={`relative w-full overflow-hidden bg-gray-50 ${
                  isMobile ? "aspect-[3/2]" : "aspect-[4/3]"
                }`}
                initial={{
                  filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)",
                  opacity: 0,
                }}
                whileInView={{
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: {
                    duration: shouldReduceMotion ? 0.3 : 1.2,
                    delay: shouldReduceMotion ? 0 : 0.3,
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={value.mediaUrl}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}
