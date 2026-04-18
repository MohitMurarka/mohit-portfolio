import React from 'react';

export default function SkillTag({ children, color = 'yellow' }) {
  const colors = {
    yellow: 'bg-neo-yellow border-black text-black',
    red:    'bg-neo-red border-black text-black',
    violet: 'bg-neo-violet border-black text-black',
    white:  'bg-white border-black text-black',
  };
  return (
    <span className={`inline-block border-4 rounded-none font-black text-xs uppercase tracking-widest px-3 py-2 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-150 cursor-default ${colors[color]}`}>
      {children}
    </span>
  );
}
