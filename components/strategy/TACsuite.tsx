"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  ShieldCheck,
  Plus,
  TrendingUp,
  Sparkles,
  BookOpen
} from "lucide-react";

const advantages = [
  {
    id: "flexibility",
    colSpan: "lg:col-span-8",
    icon: Globe,
    title: "Learn Anywhere, Anytime",
    highlight: "Global Accessibility",
    desc: "Why settle for local when you can learn from the best worldwide? Our online suite eliminates geographical barriers, allowing you to master high-income skills at your own pace.",
    stats: [
      { label: "Access", value: "Lifetime" },
      { label: "Format", value: "4K Video" }
    ],
  },
  {
    id: "suite-count",
    colSpan: "lg:col-span-4",
    icon: BookOpen,
    title: "Master 8 Core",
    highlight: "Specializations",
    desc: "A comprehensive ecosystem covering Cinematic Editing, Motion Design, UI/UX, Growth Strategy, and more. One subscription, eight career paths.",
    stats: [
      { label: "Curriculum", value: "8 Modules" }
    ],
  },
  {
    id: "speed",
    colSpan: "lg:col-span-5",
    icon: Zap,
    title: "Accelerated Path",
    highlight: "Efficiency",
    desc: "Standard education is slow. The TAC Suite is engineered for rapid absorption, focusing on the 20% of skills that generate 80% of professional results.",
    stats: [
      { label: "Velocity", value: "2x Faster" }
    ],
  },
  {
    id: "community",
    colSpan: "lg:col-span-7",
    icon: ShieldCheck,
    title: "Verified Industry",
    highlight: "Standard",
    desc: "Get access to the private TAC discord, premium asset packs, and direct feedback loops that ensure your online work meets global agency standards.",
    stats: [
      { label: "Network", value: "Private Hub" },
      { label: "Resources", value: "100GB+ Assets" }
    ],
  }
];


export default function TacAdvantage() {
  return (
    <section className="py-24 px-[5%] bg-[#0F0A1F] text-white overflow-hidden relative font-sans">
      
      {/* Background Texture Overlay - Subtle Purple Dots */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/40"
          >
            <Sparkles size={12} className="text-purple-400" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-purple-200/60">
              THE TAC SUITE ONLINE
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-2">
            The Art Code.
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif italic font-medium text-purple-400">
            Built for Mastery.
          </h3>

          <p className="mt-8 text-slate-400 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            A curated collection of 8 high-performance courses designed to transform beginners into industry-ready creative professionals through a unified digital platform.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${adv.colSpan} group relative rounded-[2rem] h-full flex flex-col transition-all duration-500`}
            >
              {/* Card Container */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col justify-between relative z-10 backdrop-blur-xl transition-all duration-500 group-hover:bg-purple-700 group-hover:border-purple-500 group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)]">
                
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-white group-hover:text-purple-700 transition-all duration-500 shadow-lg">
                      <adv.icon className="w-6 h-6" />
                    </div>
                    {/* Plus Icon animation */}
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white group-hover:text-purple-700 transition-all duration-500 shadow-sm">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    {adv.title} <br />
                    <span className="font-serif italic font-medium text-purple-400 group-hover:text-purple-100">
                      {adv.highlight}
                    </span>
                  </h4>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-1 group-hover:text-purple-50 transition-colors">
                    {adv.desc}
                  </p>
                </div>

                {/* Card Footer Stats */}
                <div className="flex flex-wrap gap-3 pt-6 mt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                  {adv.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 group-hover:bg-purple-800/50 group-hover:border-white/10 transition-all shadow-inner">
                      <TrendingUp className="w-3.5 h-3.5 text-purple-400 group-hover:text-white" />
                      <div>
                        <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest block leading-none mb-1 group-hover:text-purple-200">
                          {stat.label}
                        </span>
                        <span className="text-xs font-bold text-white leading-none">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}