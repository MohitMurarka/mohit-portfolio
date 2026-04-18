import React from 'react';

export default function HardShadowCard({ children, className = '', shadowColor = 'neo-md', bg = 'bg-white' }) {
  const shadows = {
    'neo-sm': 'shadow-neo-sm hover:shadow-neo-md',
    'neo-md': 'shadow-neo-md hover:shadow-neo-lg',
    'neo-lg': 'shadow-neo-lg hover:shadow-neo-xl',
    'neo-xl': 'shadow-neo-xl',
    'yellow': 'shadow-neo-yellow',
    'red':    'shadow-neo-red-s',
    'violet': 'shadow-neo-violet-s',
  };
  return (
    <div className={`border-4 border-black rounded-none card-lift overflow-hidden ${bg} ${shadows[shadowColor] || 'shadow-neo-md hover:shadow-neo-lg'} ${className}`}>
      {children}
    </div>
  );
}
