import React from 'react';

export default function SectionTitle({ children, light = false, className = '' }) {
  return (
    <h2 className={`font-black uppercase tracking-tighter leading-none ${light ? 'text-white' : 'text-black'} ${className}`}>
      {children}
    </h2>
  );
}
