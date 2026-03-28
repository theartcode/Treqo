"use client";
import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const TacFooter = () => {
  return (
    <footer className="w-full bg-[#0F0A1F] px-[5%] py-16 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 1. Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-tighter uppercase">
            TREQO<span className="text-purple-500 font-serif italic font-medium lowercase">.</span>
          </h2>
          <p className="text-slate-500 text-xs uppercase tracking-[0.3em] leading-relaxed">
            The Art Code <br />
            Built for Execution.
          </p>

        </div>

        {/* 2. Contact Section */}
        <div className="flex flex-col gap-4 md:items-center">
          <div className="text-left md:text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-2">Get in Touch</p>
            <a 
              href="mailto:admission@treqo.org" 
              className="group flex items-center gap-2 text-lg font-medium hover:text-purple-400 transition-colors"
            >
              <Mail size={20} className="text-slate-500 group-hover:text-purple-400" />
              admission@treqo.org
            </a>
          </div>
        </div>

        {/* 3. More Options Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Explore</p>
            <ul className="text-sm space-y-2 text-slate-400 font-medium">
              <li className="hover:text-white cursor-pointer flex items-center gap-1 group transition-colors">
                Academy <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-1 group transition-colors">
                Knowledge Hub <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Legal</p>
            <ul className="text-sm space-y-2 text-slate-400 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
          © 2026 The Art Code. All Rights Reserved.
        </p>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
          Placements at <span className="text-purple-400/80">Meta / Google / Amazon</span>
        </p>
      </div>
    </footer>
  );
};

export default TacFooter;
