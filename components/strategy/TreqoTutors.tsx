"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles, ArrowRight, Linkedin, Briefcase, Star, ExternalLink } from "lucide-react";

const tutorData = [
  {
    id: 1,
    name: "Lokesh Dama",
    role: "Product Management",
    experience: "Founder",
    details: "Founder of TAC. Teaches product thinking, execution, and scaling digital products.",
    image: "/tutors/tutor1.jpg",
    company: "TAC",
    linkedin: "https://www.linkedin.com/in/lokeshdama2030?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Vali Sayyad",
    role: "Digital Marketing",
    experience: "7 Years",
    details: "Chief Growth Officer at TAC. Expert in performance marketing and scaling brands.",
    image: "/tutors/tutor2.jpg",
    company: "TAC",
    linkedin: "https://www.linkedin.com/in/vali-sayyad-895402160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Durga Sai Vasagiri",
    role: "AI in Marketing",
    experience: "Co-Founder",
    details: "Co-founder of TAC. Focuses on AI-driven marketing strategies and automation.",
    image: "/tutors/tutor3.jpg",
    company: "TAC",
    linkedin: "https://www.linkedin.com/in/durgasaiv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
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

export default function TutorExperience() {0
  const [activeId, setActiveId] = useState(1);

  return (
    <>
      <style>{`
        @keyframes tt-fade { from { opacity: 0; } to { opacity: 1; } }

        /* ── LinkedIn button ── */
        .tt-linkedin-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #0A66C2;
          color: white;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
          border: none;
          white-space: nowrap;
        }
        .tt-linkedin-btn:hover {
          background: #004182;
          transform: translateY(-1px);
        }

        /* ── Desktop accordion ── */
        .tt-accordion {
          display: flex;
          flex-direction: row;
          gap: 12px;
          height: 580px;
        }
        .tt-panel { transition: flex 0.5s cubic-bezier(0.16,1,0.3,1); }
        .tt-expanded { flex: 7 !important; }
        .tt-collapsed { flex: 1 !important; }
        .tt-expanded-inner { display: flex; flex-direction: row; height: 100%; }
        .tt-vert-text {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }

        /* ── TABLET ≤ 900px ── */
        @media (max-width: 900px) {
          .tt-accordion {
            flex-wrap: wrap;
            height: auto;
          }
          .tt-expanded {
            flex: 1 1 100% !important;
            height: 480px;
          }
          .tt-collapsed {
            flex: 1 1 calc(50% - 6px) !important;
            height: 72px;
            min-height: 72px;
          }
          .tt-collapsed-inner {
            flex-direction: row !important;
            padding: 0 18px !important;
            justify-content: space-between !important;
          }
          .tt-vert-text {
            writing-mode: horizontal-tb !important;
            transform: none !important;
          }
        }

        /* ── MOBILE ≤ 600px ── */
        @media (max-width: 600px) {
          .tt-accordion {
            flex-direction: column;
            height: auto;
            gap: 8px;
          }
          .tt-panel { flex: none !important; width: 100% !important; }
          .tt-expanded { height: 520px !important; flex: none !important; }
          .tt-collapsed { height: 52px !important; min-height: 52px !important; }
          .tt-collapsed-inner {
            flex-direction: row !important;
            padding: 0 16px !important;
            justify-content: space-between !important;
          }
          .tt-vert-text {
            writing-mode: horizontal-tb !important;
            transform: none !important;
          }
          .tt-expanded-inner { flex-direction: column !important; }
          .tt-img-panel { width: 100% !important; height: 200px !important; flex-shrink: 0; }
          .tt-content-panel { width: 100% !important; padding: 20px !important; }
        }
      `}</style>

      <section
        className="relative w-full py-24 overflow-hidden px-[5%] bg-[#F7F5FF]"
        style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}
      >
        {/* Background lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px)`,
        }} />

        {/* ── Header ── */}
        <div className="max-w-[896px] mx-auto text-center mb-8 relative z-10">
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

          {/* Title — single row */}
          <h2 className="leading-tight flex items-baseline justify-center gap-3 flex-wrap">
            <span className="text-[clamp(44px,6vw,80px)] font-black text-[#1A0B35]">
              The Treqo
            </span>
            <span className="text-[clamp(44px,6vw,80px)] font-black italic bg-gradient-to-r from-[#5829E5] to-[#7C3AED] text-transparent bg-clip-text">
              Tutors
            </span>
          </h2>
        </div>

        {/* ── Accordion ── */}
        <div className="tt-accordion max-w-[1600px] mx-auto relative z-10">
          {tutorData.map((tutor) => {
            const isActive = activeId === tutor.id;

            return (
              <motion.div
                key={tutor.id}
                layout
                transition={{ duration: 0.5 }}
                onClick={() => setActiveId(tutor.id)}
                className={`tt-panel relative cursor-pointer overflow-hidden border transition-all duration-500 ${
                  isActive
                    ? "tt-expanded bg-white border-purple-200 shadow-xl"
                    : "tt-collapsed bg-[#0D0D1A] hover:bg-[#1a1035]"
                }`}
                style={{ borderRadius: "16px" }}
              >
                {/* Collapsed */}
                {!isActive && (
                  <div className="tt-collapsed-inner absolute inset-0 flex flex-col items-center justify-between py-8">
                    <span className="text-white/30 font-black text-sm">0{tutor.id}</span>
                    <p className="tt-vert-text text-white font-bold uppercase tracking-[0.4em] text-[9px] opacity-40">
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
                      className="tt-expanded-inner h-full"
                    >
                      {/* Image */}
                      <div className="tt-img-panel relative lg:w-[42%] w-full h-full p-4" style={{ flexShrink: 0 }}>
                        <div className="relative h-full w-full rounded-[14px] overflow-hidden bg-slate-900">
                          <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
                          <div className="absolute bottom-4 left-4 z-20">
                            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold">
                              {tutor.company}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="tt-content-panel lg:w-[58%] w-full p-8 flex flex-col justify-center overflow-y-auto">
                        <div className="flex items-center gap-2 mb-3">
                          <Star size={14} className="text-purple-600" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">
                            {tutor.role}
                          </span>
                        </div>

                        <h3 className="text-4xl font-black text-slate-900 mb-3">
                          {tutor.name}
                        </h3>

                        {tutor.experience && (
                          <div className="flex items-center gap-2 mb-4">
                            <Briefcase size={16} className="text-slate-400" />
                            <span className="text-sm font-bold text-slate-600">{tutor.experience}</span>
                          </div>
                        )}

                        <p className="text-slate-500 mb-6 max-w-md leading-relaxed">
                          {tutor.details}
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-3">
                          {/* LinkedIn — only show if real URL */}
                          {tutor.linkedin !== "#" && (
                            <a
                              href={tutor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tt-linkedin-btn"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin size={15} />
                              LinkedIn
                              <ExternalLink size={11} />
                            </a>
                          )}

                          <button
                            className="flex items-center gap-2 px-5 py-3 bg-purple-700 text-white rounded-lg font-bold text-xs hover:bg-purple-800 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Case Studies <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Plus,
//   Sparkles,
//   ArrowRight,
//   Linkedin,
//   Briefcase,
//   Star,
// } from "lucide-react";

// const tutorData = [
//   {
//     id: 1,
//     name: "Lokesh Dama",
//     role: "Product Management",
//     experience: "Founder",
//     details:
//       "Founder of TAC. Teaches product thinking, execution, and scaling digital products.",
//     image: "/tutors/tutor1.jpg",
//     company: "TAC",
//     linkedin:
//       "https://www.linkedin.com/in/lokeshdama2030?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   {
//     id: 2,
//     name: "Valli Sayyad",
//     role: "Digital Marketing",
//     experience: "7 Years",
//     details:
//       "Chief Growth Officer at TAC. Expert in performance marketing and scaling brands.",
//     image: "/tutors/tutor2.jpg",
//     company: "TAC",
//     linkedin:
//       "https://www.linkedin.com/in/vali-sayyad-895402160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   {
//     id: 3,
//     name: "Durga Sai Vasagiri",
//     role: "AI in Marketing",
//     experience: "Co-Founder",
//     details:
//       "Co-founder of TAC. Focuses on AI-driven marketing strategies and automation.",
//     image: "/tutors/tutor3.jpg",
//     company: "TAC",
//     linkedin:
//       "https://www.linkedin.com/in/durgasaiv?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },

//   // Remaining → Coming Soon
//   ...Array.from({ length: 5 }).map((_, i) => ({
//     id: i + 4,
//     name: "Coming Soon",
//     role: "TBA",
//     experience: "",
//     details: "New expert mentors will be revealed soon.",
//     image: "/tutors/placeholder.jpg",
//     company: "TAC",
//     linkedin: "#",
//   })),
// ];

// export default function TutorExperience() {
//   const [activeId, setActiveId] = useState(1);

//   return (
//     <section
//       className="relative w-full py-24 overflow-hidden px-[5%] bg-[#F7F5FF]"
//       style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}
//     >
//       {/* Background lines */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           pointerEvents: "none",
//           backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px)`,
//         }}
//       />

//       {/* Header */}
//       <div className="max-w-[896px] mx-auto text-center mb-16 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="inline-flex items-center gap-2 bg-white border border-purple-100 rounded-full px-4 py-1 mb-5 shadow-sm"
//         >
//           <Sparkles size={12} color="#5829E5" />
//           <span className="text-[10px] font-extrabold text-purple-700 tracking-[0.3em] uppercase">
//             Meet the Masters
//           </span>
//         </motion.div>

//         <h2 className="leading-tight">
//           <span className="block text-[clamp(44px,6vw,80px)] font-black text-[#1A0B35]">
//             The Treqo
//           </span>
//           <span className="text-[clamp(44px,6vw,80px)] font-black italic bg-gradient-to-r from-[#5829E5] to-[#7C3AED] text-transparent bg-clip-text">
//             Tutors
//           </span>
//         </h2>
//       </div>

//       {/* Accordion */}
//       <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-3 h-[580px] relative z-10">
//         {tutorData.map((tutor) => {
//           const isActive = activeId === tutor.id;

//           return (
//             <motion.div
//               key={tutor.id}
//               layout
//               transition={{ duration: 0.5 }}
//               onClick={() => setActiveId(tutor.id)}
//               className={`relative h-full cursor-pointer overflow-hidden border transition-all duration-500 ${
//                 isActive
//                   ? "bg-white border-purple-200 shadow-xl"
//                   : "bg-[#0D0D1A] hover:bg-[#1a1035]"
//               }`}
//               style={{
//                 flex: isActive ? 7 : 1,
//                 borderRadius: "16px", // 🔥 reduced curve
//               }}
//             >
//               {/* Collapsed */}
//               {!isActive && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
//                   <span className="text-white/30 font-black text-sm">
//                     0{tutor.id}
//                   </span>
//                   <p className="text-white font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] text-[9px] opacity-40">
//                     {tutor.name}
//                   </p>
//                   <Plus className="text-white/20" size={16} />
//                 </div>
//               )}

//               {/* Expanded */}
//               <AnimatePresence>
//                 {isActive && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="flex flex-col lg:flex-row h-full"
//                   >
//                     {/* Image */}
//                     <div className="relative w-full lg:w-[42%] h-full p-4">
//                       <div className="relative h-full w-full rounded-[14px] overflow-hidden bg-slate-900">
//                         <Image
//                           src={tutor.image}
//                           alt={tutor.name}
//                           fill
//                           className="object-cover"
//                         />

//                         <div className="absolute bottom-4 left-4 z-20">
//                           <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold">
//                             {tutor.company}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="w-full lg:w-[58%] p-8 flex flex-col justify-center">
//                       <div className="flex items-center gap-2 mb-3">
//                         <Star size={14} className="text-purple-600" />
//                         <span className="text-[10px] font-black uppercase tracking-widest text-purple-600">
//                           {tutor.role}
//                         </span>
//                       </div>

//                       <h3 className="text-4xl font-black text-slate-900 mb-3">
//                         {tutor.name}
//                       </h3>

//                       <div className="flex gap-6 mb-5">
//                         {tutor.experience && (
//                           <div className="flex items-center gap-2">
//                             <Briefcase size={16} />
//                             <span className="text-sm font-bold text-slate-600">
//                               {tutor.experience}
//                             </span>
//                           </div>
//                         )}

//                         <a
//                           href={tutor.linkedin}
//                           className="flex items-center gap-2 text-purple-600 text-sm font-bold"
//                         >
//                           <Linkedin size={16} /> Profile
//                         </a>
//                       </div>

//                       <p className="text-slate-500 mb-6 max-w-md">
//                         {tutor.details}
//                       </p>

//                       <button className="flex items-center gap-2 px-5 py-3 bg-purple-700 text-white rounded-lg font-bold text-xs hover:bg-purple-800">
//                         View Case Studies <ArrowRight size={14} />
//                       </button>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }