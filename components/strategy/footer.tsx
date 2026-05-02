"use client";
import React from 'react';
import { Mail, ArrowUpRight, MapPin, Phone } from 'lucide-react';

const TacFooter = () => {
  return (
    <footer className="w-full bg-[#0F0A1F] px-[5%] py-10 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 1. Brand & Address Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-black tracking-tighter uppercase">
            TREQO - The Marketing School <span className="text-purple-500 font-serif italic font-medium lowercase">.</span>
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 group">
              <MapPin size={16} className="text-purple-500 shrink-0 mt-1" />
              <p className="text-slate-400 text-xs leading-relaxed">
                Plot No. 286, 4th Floor, Road No 16,<br />
                Ayyapa society, Madhapur, Hyderabad,<br />
                Pin - 500081
              </p>
            </div>
          </div>
        </div>

        {/* 2. Contact Section */}
        <div className="flex flex-col gap-4 md:items-center justify-center">
          <div className="text-left md:text-center space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-1">Email Us</p>
              <a 
                href="mailto:admission@treqo.org" 
                className="group flex items-center gap-2 text-base font-medium hover:text-purple-400 transition-colors"
              >
                <Mail size={18} className="text-slate-500 group-hover:text-purple-400" />
                admission@treqo.org
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-1">Call Us</p>
              <a 
                href="tel:+919966430431" 
                className="group flex items-center gap-2 text-base font-medium hover:text-purple-400 transition-colors"
              >
                <Phone size={18} className="text-slate-500 group-hover:text-purple-400" />
                +91 9966 430 431
              </a>
            </div>
          </div>
        </div>

        {/* 3. More Options Section */}
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Explore</p>
            <ul className="text-sm space-y-1 text-slate-400 font-medium">
              <li className="hover:text-white cursor-pointer flex items-center gap-1 group transition-colors">
                Academy <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-1 group transition-colors">
                Knowledge Hub <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Legal</p>
            <ul className="text-sm space-y-1 text-slate-400 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
          © 2026 Treqo. All Rights Reserved.
        </p>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
          Placements at <span className="text-purple-400/80">Meta / Google / Amazon</span>
        </p>
      </div>
    </footer>
  );
};

export default TacFooter;