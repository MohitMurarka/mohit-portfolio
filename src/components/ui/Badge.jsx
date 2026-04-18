import React from 'react';

export default function Badge({ children, color = 'red', rotate = 0, className = '' }) {
  const colors = {
    red:    'bg-neo-red border-neo-black text-black',
    yellow: 'bg-neo-yellow border-neo-black text-black',
    violet: 'bg-neo-violet border-neo-black text-black',
    green:  'bg-neo-green border-neo-black text-black',
    black:  'bg-black border-black text-neo-yellow',
    white:  'bg-white border-black text-black',
  };
  const rotations = {
    0: '', 1: 'rotate-1', 2: 'rotate-2', 3: 'rotate-3',
    '-1': '-rotate-1', '-2': '-rotate-2', '-3': '-rotate-3',
  };
  return (
    <span className={`inline-flex items-center border-4 rounded-full shadow-neo-sm px-4 py-2 font-black text-xs uppercase tracking-widest hover:rotate-12 transition-transform duration-150 ${colors[color]} ${rotations[rotate] || ''} ${className}`}>
      {children}
    </span>
  );
}
