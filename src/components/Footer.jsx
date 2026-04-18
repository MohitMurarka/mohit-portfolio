import React from 'react';
import { Star } from 'lucide-react';

const navLinks = ['ABOUT','SKILLS','PROJECTS','EXPERIENCE','CONTACT'];

export default function Footer() {
  return (
    <footer className="bg-dense-dots border-t-8 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">

          {/* Left — Logo */}
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 bg-neo-yellow border-4 border-black flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '4px 4px 0 #FFD93D' }}
            >
              <span className="font-black text-3xl text-black leading-none">M</span>
            </div>
            <div>
              <p className="font-black text-2xl uppercase tracking-tighter text-white leading-tight">MOHIT<br/>MURARKA</p>
              <p className="font-bold text-xs uppercase tracking-widest text-neo-yellow mt-1">AI SYSTEMS ENGINEER</p>
            </div>
          </div>

          {/* Center — Nav */}
          <div className="flex flex-col gap-3 md:items-center">
            <p className="font-black text-xs uppercase tracking-widest text-neo-yellow border-b-2 border-neo-yellow pb-2 mb-1">NAVIGATE</p>
            {navLinks.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-black uppercase tracking-widest text-sm text-neo-yellow hover:text-neo-red transition-colors duration-100 no-underline"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Right — Built with */}
          <div className="md:text-right">
            <p className="font-bold text-xs uppercase tracking-widest text-neo-yellow leading-relaxed">
              BUILT WITH
              <Star size={14} strokeWidth={4} className="inline mx-1 fill-neo-yellow text-neo-yellow animate-spin-slow"/>
              AND LOTS OF LANGGRAPH
            </p>
            <p className="font-bold text-xs text-gray-400 mt-3 uppercase tracking-widest">
              React · Tailwind CSS · Space Grotesk
            </p>
            <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
              {['AGENTIC AI','FASTAPI','CHROMADB'].map(t => (
                <span key={t} className="border-2 border-neo-yellow text-neo-yellow font-black text-xs uppercase px-2 py-1" style={{ fontSize: '9px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-neo-yellow border-t-4 border-black px-4 py-4">
        <p className="font-black text-xs uppercase tracking-widest text-black text-center">
          © 2025 MOHIT MURARKA · KIIT UNIVERSITY · ROLL NO: 2328177 · ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
