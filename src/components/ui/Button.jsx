import React from 'react';

const variants = {
  primary: 'bg-neo-red border-4 border-black text-black shadow-neo-md hover:bg-red-400',
  secondary: 'bg-neo-yellow border-4 border-black text-black shadow-neo-md hover:bg-yellow-300',
  outline: 'bg-white border-4 border-black text-black shadow-neo-sm hover:bg-neo-bg',
  dark: 'bg-black border-4 border-black text-neo-yellow shadow-neo-sm hover:bg-gray-900',
};

export default function Button({ variant = 'primary', children, className = '', onClick, href, large }) {
  const base = `inline-flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-wide rounded-none cursor-pointer select-none transition-all duration-100 btn-press ${large ? 'h-16 px-10 text-base' : 'h-14 px-8'}`;
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer">{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}
