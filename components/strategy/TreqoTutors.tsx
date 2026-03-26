"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Sparkles,
  ArrowRight,
  Linkedin,
  Briefcase,
  Star,
} from "lucide-react";

const tutorData = [
  {
    id: 1,
    name: "Lokesh Dama",
    role: "Product Management",
    experience: "Founder",
    details:
      "Founder of TAC. Teaches product thinking, execution, and scaling digital products.",
    image: "/tutors/tutor1.jpg",
    company: "TAC",
    linkedin:
      "https://www.linkedin.com/in/lokeshdama2030?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Valli Sayyad",
    role: "Digital Marketing",
    experience: "7 Years",
    details:
      "Chief Growth Officer at TAC. Expert in performance marketing and scaling brands.",
    image: "/tutors/tutor2.jpg",
    company: "TAC",
    linkedin:
      "https://www.linkedin.com/in/vali-sayyad-895402160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Durga Sai Vasagiri",
    role: "AI in Marketing",
    experience: "Co-Founder",
    details:
      "Co-founder of TAC. Focuses on AI-driven marketing strategies and automation.",
    image: "/tutors/tutor3.jpg",
    company: "TAC",
    linkedin:
      "https://www.linkedin.com/in/durgasaiv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  // Remaining → Coming Soon
  ...Array.from({ length: 5 }).map((_, i) => ({
    id: i + 4,
    name: "Coming Soon",
    role: "TBA",
    experience: "",
    details: "New expert mentors will be revealed soon.",
    image: "/tutors/placeholder.jpg",
    company: "TAC",
    linkedin: "#",
  })),
];

export default function TutorExperience() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      className="relative w-full py-24 overflow-hidden px-[5%] bg-[#F7F5FF]"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}
    >
      {/* Background lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px)`,
        }}
      />

      {/* Header */}
      <div className="max-w-[896px] mx-auto text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white border border-purple-100 rounded-full px-4 py-1 mb-5 shadow-sm"
        >
          <Sparkles size={12} color="#5829E5" />
          <span className="text-[10px] font-extrabold text-purple-700 tracking-[0.3em] uppercase">
            Meet the Masters
          </span>
        </motion.div>

        <h2 className="leading-tight">
          <span className="block text-[clamp(44px,6vw,80px)] font-black text-[#1A0B35]">
            The Treqo
          </span>
          <span className="text-[clamp(44px,6vw,80px)] font-black italic bg-gradient-to-r from-[#5829E5] to-[#7C3AED] text-transparent bg-clip-text">
            Tutors
          </span>
        </h2>
      </div>

      {/* Accordion */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-3 h-[580px] relative z-10">
        {tutorData.map((tutor) => {
          const isActive = activeId === tutor.id;

          return (
            <motion.div
              key={tutor.id}
              layout
              transition={{ duration: 0.5 }}
              onClick={() => setActiveId(tutor.id)}
              className={`relative h-full cursor-pointer overflow-hidden border transition-all duration-500 ${
                isActive
                  ? "bg-white border-purple-200 shadow-xl"
                  : "bg-[#0D0D1A] hover:bg-[#1a1035]"
              }`}
              style={{
                flex: isActive ? 7 : 1,
                borderRadius: "16px", // 🔥 reduced curve
              }}
            >
              {/* Collapsed */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
                  <span className="text-white/30 font-black text-sm">
                    0{tutor.id}
                  </span>
                  <p className="text-white font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-[9px] opacity-40">
                    {tutor.name}
                  </p>
                  <Plus className="text-white/20" size={16} />
                </div>
              )}

              {/* Expanded */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col lg:flex-row h-full"
                  >
                    {/* Image */}
                    <div className="relative w-full lg:w-[42%] h-full p-4">
                      <div className="relative h-full w-full rounded-[14px] overflow-hidden bg-slate-900">
                        <Image
                          src={tutor.image}
                          alt={tutor.name}
                          fill
                          className="object-cover"
                        />

                        <div className="absolute bottom-4 left-4 z-20">
                          <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold">
                            {tutor.company}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-[58%] p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Star size={14} className="text-purple-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">
                          {tutor.role}
                        </span>
                      </div>

                      <h3 className="text-4xl font-black text-slate-900 mb-3">
                        {tutor.name}
                      </h3>

                      <div className="flex gap-6 mb-5">
                        {tutor.experience && (
                          <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span className="text-sm font-bold text-slate-600">
                              {tutor.experience}
                            </span>
                          </div>
                        )}

                        <a
                          href={tutor.linkedin}
                          className="flex items-center gap-2 text-purple-600 text-sm font-bold"
                        >
                          <Linkedin size={16} /> Profile
                        </a>
                      </div>

                      <p className="text-slate-500 mb-6 max-w-md">
                        {tutor.details}
                      </p>

                      <button className="flex items-center gap-2 px-5 py-3 bg-purple-700 text-white rounded-lg font-bold text-xs hover:bg-purple-800">
                        View Case Studies <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}