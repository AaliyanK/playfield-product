"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Whitepaper() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top when component mounts - using multiple strategies
  useLayoutEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    // Force scroll to top with multiple attempts
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Additional scroll attempts with small delays
    const timers = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="pt-20">
        {/* Whitepaper Section - Full page section */}
        <section className="min-h-screen w-full bg-white flex items-center justify-center px-3 sm:px-6 md:px-8 lg:px-16 py-16">
          <div className="w-full max-w-4xl">
            <motion.h2
              className="font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8"
              style={{
                fontFamily: "var(--font-instrument-sans)",
                fontWeight: 400,
                lineHeight: "1",
                letterSpacing: "-0.03em",
                color: "#07130E",
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
              Whitepaper
            </motion.h2>

            <motion.div
              className="space-y-8 text-lg sm:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: "var(--font-instrument-sans)",
                fontWeight: 400,
                color: "#07130E",
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
              <p>
                We&apos;re announcing Playfield. We&apos;re building for a
                future where enterprises transition from operating through human
                interfaces to delegating tasks to agents end-to-end. For this to
                happen, we believe that the entire world of B2B software needs
                to be re-built for agents to interact with, rather than for
                humans.
              </p>

              <p>
                We&apos;re working with our customers directly to rebuild their
                enterprise software stack as agent environments, and train
                agents to complete their critical workflows within them.
              </p>

              <h4
                className="font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-16 mb-8"
                style={{
                  fontFamily: "var(--font-instrument-sans)",
                  fontWeight: 400,
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  color: "#07130E",
                }}
              >
                Foundations
              </h4>

              <p>
                Enterprises run on legacy software, and we know migration is
                hard. We&apos;re here to smooth that out. In order to enable the
                transition to an agent-first enterprise, we feel two things are
                necessary:
              </p>

              <ul className="space-y-4 ml-4">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-2">•</span>
                  <span>
                    <strong>A reasoning map of your entire enterprise.</strong>{" "}
                    After replicating your software stack as agent environments,
                    we build a real time knowledge graph that learns and updates
                    itself from changes to your systems, files/docs, your
                    workflows, and policies through custom retriever agents
                    (live agentic connectors to your existing systems).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-2">•</span>
                  <span>
                    <strong>
                      An interface for an agent to take actions over the
                      reasoning map.
                    </strong>{" "}
                    An agent traverses the reasoning map to plan out your
                    intended task and writes code to interact with the agent
                    environments and execute actions within a sandbox.
                  </span>
                </li>
              </ul>

              <p>
                We work directly with our customers to build this knowledge
                graph and populate it with the environments custom to them. We
                also post-train our own coding agents to reliably take actions
                over this knowledge graph structure.
              </p>

              <h4
                className="font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-16 mb-8"
                style={{
                  fontFamily: "var(--font-instrument-sans)",
                  fontWeight: 400,
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  color: "#07130E",
                }}
              >
                Specialization
              </h4>

              <p>
                Customers with complex workflows that take hours, if not days,
                to execute, understand the frustration of today&apos;s agents
                being unable to act reliably across their systems for that
                period of time. We feel without the correct infrastructure in
                place, delegating tasks like these to an agent is asking it to
                go through a sea of tools at each time step and hope it picks
                the right one. The longer the time horizon, the more likely it
                is they make the wrong choice and are unable to complete your
                task.
              </p>

              <p className="font-medium">
                Agents are probabilistic machines by nature - our goal is to
                drive them towards determinism.
              </p>

              <p>
                The way we will do this is through building evals with our
                customers for their specific tasks, and post-training agents
                with reinforcement learning on these evals in the environments
                we built for them as a training ground. This is how we achieve
                reliability whilst optimizing for your objectives in a
                particular workflow.
              </p>

              <p>
                As our customers populate a repository of these specialized
                agents for their complex workflows, they build towards a world
                where they can delegate agents to do long horizon tasks
                reliably.
              </p>

              <h4
                className="font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-16 mb-8"
                style={{
                  fontFamily: "var(--font-instrument-sans)",
                  fontWeight: 400,
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  color: "#07130E",
                }}
              >
                Security
              </h4>

              <p>
                We know that forward thinking customers interested in Playfield
                will also have sensitive information stored in their systems and
                regulations to follow. It is our goal to have security and
                compliance as our highest priority, and we support on-prem/VPC
                deployments, VDRs, and seat-by-seat sso/auth. We build around
                our customers and we will build in security measures for our
                platform custom to you.
              </p>

              <h4
                className="font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-16 mb-8"
                style={{
                  fontFamily: "var(--font-instrument-sans)",
                  fontWeight: 400,
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  color: "#07130E",
                }}
              >
                Today
              </h4>

              <p>
                We are currently accepting early design partners to build our
                platform around and tailor our services to. As a team we&apos;ve
                worked on reinforcement learning, enterprise data and coding
                agents at top startups - we now want to build to fix your
                problems. Reach out here:{" "}
                <a
                  href="mailto:zayaan19@gmail.com"
                  className="text-accent hover:underline"
                >
                  zayaan19@gmail.com
                </a>
              </p>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Thanks,
                  <br />
                  The Playfield team :)
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
