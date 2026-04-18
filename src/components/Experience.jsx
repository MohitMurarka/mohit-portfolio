import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const achievements = [
  'Collaborated with developers to design and implement web application features',
  'Debugged and troubleshot production issues, reducing system downtime',
  'Participated in collaborative code reviews, improving overall code quality',
  'Practiced agile development methodologies in a cross-functional team environment',
];

export default function Experience() {
  return (
    <section id="experience" className="bg-halftone-red border-y-8 border-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section title */}
        <h2
          className="font-black text-6xl md:text-7xl uppercase tracking-tighter text-white leading-none mb-12"
          style={{ textShadow: '6px 6px 0px #000' }}
        >
          CAREER LOG
        </h2>

        {/* Main experience card */}
        <div
          className="border-4 border-black bg-white mb-8"
          style={{ boxShadow: '16px 16px 0px 0px #000', borderLeft: '8px solid #000' }}
        >
          {/* Top row */}
          <div className="px-8 pt-8 pb-0 flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <span
                className="inline-block bg-neo-yellow border-4 border-black font-black text-sm uppercase tracking-widest px-4 py-2 mb-4"
                style={{ boxShadow: '4px 4px 0 #000' }}
              >
                2024 — PRESENT
              </span>
              <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tighter text-black leading-tight">
                WEB DEVELOPMENT TEAM MEMBER
              </h3>
              <span
                className="inline-block bg-black text-neo-yellow font-black text-sm uppercase tracking-widest px-4 py-2 mt-3 border-4 border-black"
                style={{ boxShadow: '4px 4px 0 #FFD93D' }}
              >
                KIIT TECH TEAM
              </span>
            </div>
          </div>

          {/* Achievement list */}
          <div className="px-8 pt-6 pb-8">
            <div className="space-y-0">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-4 border-b-4 border-black py-4 last:border-b-0">
                  <ArrowRight size={24} strokeWidth={4} className="flex-shrink-0 mt-0.5 text-neo-red" />
                  <p className="font-bold text-lg text-black leading-snug">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YOUR COMPANY'S NEXT HIRE? CTA */}
        <div
          className="border-4 border-black bg-neo-yellow p-8 md:p-12"
          style={{ boxShadow: '12px 12px 0px 0px #000', transform: 'rotate(1deg)' }}
        >
          <div style={{ transform: 'rotate(-1deg)' }}>
            <p className="font-black text-4xl md:text-5xl uppercase tracking-tighter text-black leading-tight">
              YOUR COMPANY'S
            </p>
            <p
              className="font-black text-5xl md:text-7xl uppercase tracking-tighter leading-tight"
              style={{ color: '#FF6B6B', WebkitTextStroke: '2px #000' }}
            >
              NEXT HIRE?
            </p>
            <p className="font-bold text-lg text-black mt-4 max-w-xl">
              I build AI systems that ship. Agentic pipelines. Self-correcting loops. Production-grade APIs. Let's make something that matters.
            </p>
            <div className="mt-6">
              <Button variant="primary" href="#contact" large>LET'S TALK →</Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
