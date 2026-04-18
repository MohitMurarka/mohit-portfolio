import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import Button from './ui/Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-neo-yellow border-b-8 border-black flex items-center px-4 md:px-8 justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center flex-shrink-0" style={{boxShadow:'4px 4px 0px 0px #FFD93D'}}>
            <span className="text-neo-yellow font-black text-2xl leading-none">M</span>
          </div>
          <span className="font-black uppercase tracking-tighter text-xl text-black hidden sm:block">MOHIT MURARKA</span>
        </a>

        {/* Center nav links - desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-bold uppercase tracking-wide text-sm text-black no-underline border-b-4 border-transparent hover:border-black transition-all duration-100 pb-1"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Button variant="primary" href="mailto:mohitmurarka2004@gmail.com">HIRE ME →</Button>
            <span
              className="absolute -top-3 -right-3 bg-neo-green border-2 border-black font-black text-xs uppercase tracking-widest px-2 py-1 rounded-none"
              style={{transform:'rotate(3deg)', boxShadow:'2px 2px 0 #000', whiteSpace:'nowrap'}}
            >
              OPEN TO WORK
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-12 h-12 border-4 border-black bg-white flex items-center justify-center shadow-neo-sm btn-press"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} strokeWidth={4}/> : <Menu size={22} strokeWidth={4}/>}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-neo-yellow flex flex-col items-center justify-center gap-6 border-b-8 border-black pt-20">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="w-72 h-16 border-4 border-black bg-white flex items-center justify-center font-black uppercase tracking-widest text-xl text-black shadow-neo-md hover:bg-neo-red transition-colors duration-100 no-underline"
            >
              {l}
            </a>
          ))}
          <Button variant="primary" href="mailto:mohitmurarka2004@gmail.com" className="w-72 mt-4" large>
            HIRE ME →
          </Button>
        </div>
      )}
    </>
  );
}
