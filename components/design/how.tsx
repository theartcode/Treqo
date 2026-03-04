"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { 
  BookOpen, 
  Wrench, 
  LineChart, 
  Mic, 
  CheckCircle2, 
  TrendingUp, 
  Layers 
} from "lucide-react";

const cards = [
  {
    tag: "Phase 01 — Foundation",
    title: "Master The",
    highlight: "Systems.",
    description:
      "Before execution comes architecture. Master the structured frameworks across marketing, behavioral psychology, and revenue systems.",
    points: [
      "Consumer Psychology & Behavior",
      "High-Converting Offer Architecture",
      "Market Research & Positioning"
    ],
    advantage: "Develop the strategic mind of a Creative Director.",
    tools: "Miro • Notion • Market Intelligence",
    icon: BookOpen,
  },
  {
    tag: "Phase 02 — Simulation",
    title: "Build The",
    highlight: "Execution.",
    description:
      "Theory ends here. Collaborate in elite teams to execute real-world business simulations. Engage in hands-on tool experimentation.",
    points: [
      "Advanced UI/UX & Brand Identity",
      "Cinematic Content & Video Editing",
      "Conversion Copywriting"
    ],
    advantage: "Build a premium, client-ready portfolio.",
    tools: "Figma • Premiere Pro • After Effects",
    icon: Wrench,
  },
  {
    tag: "Phase 03 — Analytics",
    title: "Optimize With",
    highlight: "Data.",
    description:
      "Refine your systems using deep analytics, performance metrics, and aggressive A/B testing feedback loops to locate friction points.",
    points: [
      "Performance Marketing & Media Buying",
      "A/B Testing & Funnel Optimization",
      "Retention & LTV Scaling"
    ],
    advantage: "Scale campaigns strictly on mathematical ROI.",
    tools: "Meta Ads • Google Analytics • Hotjar",
    icon: LineChart,
  },
  {
    tag: "Phase 04 — Validation",
    title: "Pitch To",
    highlight: "Founders.",
    description:
      "Skip the cold applications. Present your final, polished solutions directly to industry leaders, startup founders, and recruiters.",
    points: [
      "Executive Communication Strategy",
      "Live Portfolio Pitching",
      "Salary Negotiation Frameworks"
    ],
    advantage: "Secure placements through our 50+ partner network.",
    tools: "Pitch Decks • Case Studies • Networking",
    icon: Mic,
  }
];

export default function TacExecutionPipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    mass: 0.6
  });

  return (
    <section className="bg-[#FBF8E4] font-sans">
      
      {/* Title */}
      <div className="w-full text-center px-[5%] pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D1D1D]/5 border border-[#1D1D1D]/10 mb-6">
          <Layers className="w-4 h-4 text-[#1D1D1D]" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1D1D1D]">
            Our Methodology
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-[#1D1D1D] tracking-tighter leading-[1.05]">
          The Execution <br />
          <span className="font-serif italic font-light text-[#FFC62A] tracking-normal">
            Pipeline.
          </span>
        </h2>

        <p className="mt-6 text-[#1D1D1D]/70 max-w-xl mx-auto text-base md:text-lg font-medium leading-relaxed">
          A 4-phase architecture designed to transform raw potential into industry-validated expertise.
        </p>
      </div>

      {/* Scroll animation section */}
      <div ref={sectionRef} className="relative h-[450vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-[5%]">

          {cards.map((card, index) => {

            const segment = 1 / (cards.length - 1);

            const start = index * segment - segment;
            const center = index * segment;
            const end = index * segment + segment;

            const hold = segment * 0.3;

            const x = useTransform(
              smoothProgress,
              [start, center, center + hold, end],
              ["120vw", "0vw", "0vw", "-120vw"]
            );

            const scale = useTransform(
              smoothProgress,
              [start, center, center + hold, end],
              [0.6, 1, 1, 0.6]
            );

            return (
              <motion.div
                key={index}
                style={{
                  x,
                  scale
                }}
                className="absolute w-full max-w-[1100px] h-[500px] md:h-[600px]
                           bg-white/80 backdrop-blur-2xl rounded-[3rem] 
                           border border-[#1D1D1D]/10 shadow-[0_30px_80px_rgba(0,0,0,0.07)]
                           overflow-hidden flex flex-col justify-center"
              >
                <div className="relative z-10 px-8 py-10 md:px-16 md:py-0 flex flex-col md:flex-row gap-8 md:gap-12 items-center h-full">

                  {/* Left */}
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] shadow-md">
                        <card.icon className="w-6 h-6" />
                      </div>

                      <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full bg-[#1D1D1D]/5 text-[#1D1D1D]/70 border border-[#1D1D1D]/10">
                        {card.tag}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-[#1D1D1D] tracking-tighter leading-[1.05] mb-6">
                      {card.title} <br />
                      <span className="font-serif italic font-light text-[#FFC62A] tracking-normal">
                        {card.highlight}
                      </span>
                    </h2>

                    <p className="text-[#1D1D1D]/70 text-base md:text-lg max-w-xl leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex-1 w-full flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#1D1D1D]/10 pt-6 md:pt-0 md:pl-12">

                    <div className="mb-6">
                      <p className="text-[10px] font-bold text-[#1D1D1D]/40 uppercase tracking-widest mb-4">
                        Core Focus Areas
                      </p>

                      <div className="space-y-3">
                        {card.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FFC62A]" />
                            <span className="text-[#1D1D1D]/80 font-bold text-sm md:text-base">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 bg-[#1D1D1D]/5 p-5 rounded-2xl border border-[#1D1D1D]/5">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-[#FFC62A]" />
                        <p className="text-[#1D1D1D]/80 font-bold text-sm leading-tight">
                          {card.advantage}
                        </p>
                      </div>

                      <p className="text-[#1D1D1D]/50 text-xs font-medium pt-2 border-t border-[#1D1D1D]/10">
                        <span className="font-bold">Tools:</span> {card.tools}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}