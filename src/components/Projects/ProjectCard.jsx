import React from 'react';
import Button from '../ui/Button';

export default function ProjectCard({
  number, title, year, stack, description, headerBg = 'bg-neo-violet',
  shadowColor = '8px 8px 0px 0px #000', badges = [], githubUrl, children,
  fullWidth = false,
}) {
  return (
    <div
      className={`border-4 border-black bg-white card-lift overflow-hidden relative ${fullWidth ? 'col-span-full' : ''}`}
      style={{ boxShadow: shadowColor }}
    >
      {/* Header bar */}
      <div className={`${headerBg} border-b-4 border-black px-6 py-4 flex items-center justify-between flex-wrap gap-3`}>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="border-4 border-black bg-black text-neo-yellow font-black text-xs uppercase tracking-widest px-3 py-1" style={{boxShadow:'2px 2px 0 #FFD93D'}}>
            MISSION_{number}
          </span>
          <span className="font-black text-xl md:text-2xl uppercase tracking-tighter leading-tight text-black">{title}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="border-4 border-black bg-neo-green font-black text-xs uppercase tracking-widest px-3 py-1" style={{boxShadow:'2px 2px 0 #000'}}>
            [COMPLETED]
          </span>
          <span className="border-4 border-black bg-white font-black text-xs uppercase tracking-widest px-3 py-1">{year}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Stack */}
        <p className="font-bold text-sm text-gray-700 mb-4 border-b-4 border-black pb-3">
          <span className="font-black uppercase">STACK: </span>{stack}
        </p>

        {/* Description */}
        <div className="border-4 border-black bg-neo-yellow p-4 mb-5" style={{boxShadow:'4px 4px 0 #000'}}>
          <p className="font-bold text-base text-black leading-relaxed">{description}</p>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {badges.map(b => (
              <span key={b} className="border-4 border-black bg-white font-black text-xs uppercase tracking-widest px-3 py-2" style={{boxShadow:'3px 3px 0 #000'}}>
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Custom children (pipeline diagrams, eval tables, etc.) */}
        {children}

        {/* CTA buttons */}
        {githubUrl && (
          <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t-4 border-black">
            <Button variant="outline" href={githubUrl}>VIEW ON GITHUB ↗</Button>
            <Button variant="primary">READ CASE STUDY →</Button>
          </div>
        )}
      </div>
    </div>
  );
}
