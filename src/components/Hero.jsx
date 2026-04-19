import React from 'react';
import { GitBranch, ExternalLink, Mail, Star , Code2  } from 'lucide-react';
import Button from './ui/Button';
import StatsTicker from './StatsTicker';

export default function Hero() {
  return (
    <section id="about" className="bg-halftone min-h-screen pt-20 overflow-hidden relative">

      {/* Top marquee strip */}
      <StatsTicker
        items={['B.TECH CS 2027','KIIT UNIVERSITY','AGENTIC AI SPECIALIST','OPEN TO INTERNSHIPS','LANGGRAPH · GPT-4o · FASTAPI','MULTI-AGENT SYSTEMS']}
        bgColor="bg-neo-red"
        textColor="text-white"
        speed="animate-marquee-fast"
        borderClass="border-y-4 border-black"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN — 60% */}
          <div className="lg:col-span-3 relative">

            {/* Massive ghost text behind content */}
            <div
              className="absolute -top-8 -left-4 text-[14rem] md:text-[18rem] font-black leading-none select-none pointer-events-none z-0"
              style={{WebkitTextStroke:'4px rgba(0,0,0,0.055)', color:'transparent'}}
            >
              AI
            </div>

            {/* Main headline */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-black text-6xl md:text-8xl uppercase tracking-tighter text-black leading-none">I BUILD</span>
              </div>

              <div className="flex items-center gap-0">
                <div
                  className="inline-block bg-neo-yellow border-4 border-black font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none px-3 py-1"
                  style={{boxShadow:'8px 8px 0px 0px #000', transform:'rotate(-1deg)'}}
                >
                  AGENTIC
                </div>
              </div>

              <div>
                <span className="font-black text-6xl md:text-8xl uppercase tracking-tighter text-black leading-none">AI SYSTEMS</span>
              </div>

              <div className="pt-2">
                <span className="font-bold text-xl md:text-2xl text-black">that reason. self-correct. orchestrate.</span>
              </div>
            </div>

            {/* Stat stickers */}
            <div className="relative z-10 flex flex-wrap gap-6 mt-10">
              <div
                className="bg-neo-red border-4 border-black px-6 py-4 flex flex-col items-center"
                style={{boxShadow:'6px 6px 0px 0px #000', transform:'rotate(3deg)'}}
              >
                <span className="font-black text-5xl leading-none">5</span>
                <span className="font-black text-xs uppercase tracking-widest">PROJECTS SHIPPED</span>
              </div>
              <div
                className="bg-neo-violet border-4 border-black px-6 py-4 flex flex-col items-center"
                style={{boxShadow:'6px 6px 0px 0px #000', transform:'rotate(-2deg)'}}
              >
                <span className="font-black text-5xl leading-none">7+</span>
                <span className="font-black text-xs uppercase tracking-widest">AI AGENTS BUILT</span>
              </div>
              <div
                className="bg-neo-yellow border-4 border-black px-6 py-4 flex flex-col items-center"
                style={{boxShadow:'6px 6px 0px 0px #000', transform:'rotate(1deg)'}}
              >
                <span className="font-black text-5xl leading-none">100%</span>
                <span className="font-black text-xs uppercase tracking-widest">TEST PASS RATE</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="relative z-10 flex flex-wrap gap-4 mt-8">
              <Button variant="primary" href="#projects" large>VIEW PROJECTS →</Button>
              <Button variant="secondary" href="https://drive.google.com/file/d/1pTAvUNKDEAnJg5wxaIcFjEIecZnNOUiS/view?usp=sharing" large>DOWNLOAD CV ↓</Button>
            </div>

            {/* Social links */}
            <div className="relative z-10 flex gap-4 mt-6">
              {[
                { icon: <GitBranch size={22} strokeWidth={3}/>, href: 'https://github.com/MohitMurarka', label:'GITHUB' },
                { icon: <ExternalLink size={22} strokeWidth={3}/>, href: 'https://www.linkedin.com/in/mohit-murarka-b165882aa/', label:'LINKEDIN' },
                { icon: <Mail size={22} strokeWidth={3}/>, href: 'mailto:mohitmurarka2004@gmail.com', label:'EMAIL' },
                { icon: <Code2 size={22} strokeWidth={3}/>, href: 'https://leetcode.com/u/Mohit_Murarka/', label:'LEETCODE' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 border-4 border-black bg-white flex items-center justify-center shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-150"
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Visual Chaos Zone */}
          <div className="lg:col-span-2 relative mt-8 lg:mt-0" style={{minHeight:'420px'}}>

            {/* Spinning star */}
            <div className="absolute -top-4 right-0 z-20">
              <Star size={48} strokeWidth={4} className="animate-spin-slow text-neo-yellow fill-neo-yellow"/>
            </div>

            {/* Card A — Latest project (main, largest) */}
            <div
              className="relative z-10 bg-white border-4 border-black"
              style={{boxShadow:'12px 12px 0px 0px #000', transform:'rotate(1deg)'}}
            >
              <div className="bg-neo-red border-b-4 border-black px-5 py-3">
                <span className="font-black text-xs uppercase tracking-widest text-black">★ LATEST PROJECT</span>
              </div>
              <div className="p-5">
                <p className="font-black text-lg uppercase tracking-tight leading-tight">Autonomous Quant Research Agent</p>
                <p className="font-bold text-sm mt-2 text-black">7 GPT-4o-mini agents · LangGraph · E2B · FastAPI · React</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['SELF-CORRECTING','HITL','MULTI-AGENT'].map(t => (
                    <span key={t} className="border-4 border-black bg-neo-yellow font-black text-xs uppercase px-2 py-1" style={{boxShadow:'2px 2px 0 #000'}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card B — University (overlapping, rotated) */}
            <div
              className="relative z-20 bg-neo-yellow border-4 border-black mt-4 ml-auto w-64"
              style={{boxShadow:'8px 8px 0px 0px #000', transform:'rotate(-2deg)', marginTop:'-2rem'}}
            >
              <div className="p-4">
                <p className="font-black text-xs uppercase tracking-widest">KIIT UNIVERSITY</p>
                <p className="font-bold text-base mt-1">B.Tech CS · 2023–2027</p>
                <p className="font-bold text-xs mt-1 text-gray-700">Bhubaneswar, India</p>
              </div>
            </div>

            {/* Card C — RAGAS teaser */}
            <div
              className="relative z-10 bg-neo-violet border-4 border-black mt-3"
              style={{boxShadow:'8px 8px 0px 0px #000', transform:'rotate(2deg)'}}
            >
              <div className="p-4 flex items-center gap-3">
                <div className="bg-neo-green border-4 border-black w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="font-black text-xs">✓OK</span>
                </div>
                <div>
                  <p className="font-black text-xs uppercase tracking-widest">RAGAS EVALUATION</p>
                  <p className="font-bold text-sm">Context Precision: 1.000 · Suite: 10/10</p>
                </div>
              </div>
            </div>

            {/* Floating hollow circle decoration */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-8 border-black rounded-full opacity-10 z-0 pointer-events-none"/>
          </div>
        </div>
      </div>
    </section>
  );
}
