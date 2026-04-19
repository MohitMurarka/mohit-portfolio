import React, { useState } from 'react';
import { Mail, GitBranch, ExternalLink, Phone, Send ,Code2 } from 'lucide-react';
import Button from './ui/Button';

const channels = [
  {
    label: 'EMAIL',
    icon: <Mail size={40} strokeWidth={4}/>,
    value: 'mohitmurarka2004@gmail.com',
    bg: 'bg-neo-red',
    rotate: 'rotate(2deg)',
    href: 'mailto:mohitmurarka2004@gmail.com',
  },
  {
    label: 'GITHUB',
    icon: <GitBranch size={40} strokeWidth={4}/>,
    value: 'github.com/MohitMurarka',
    bg: 'bg-white',
    rotate: 'rotate(-1deg)',
    href: 'https://github.com/MohitMurarka',
  },
  {
    label: 'LINKEDIN',
    icon: <ExternalLink size={40} strokeWidth={4}/>,
    value: 'linkedin.com/in/mohit-murarka',
    bg: 'bg-neo-violet',
    rotate: 'rotate(3deg)',
    href: 'https://www.linkedin.com/in/mohit-murarka-b165882aa/',
  },
  {
    label: 'PHONE',
    icon: <Phone size={40} strokeWidth={4}/>,
    value: '+91 6295184469',
    bg: 'bg-neo-yellow',
    rotate: 'rotate(-2deg)',
    href: 'tel:+916295184469',
  },
  {
  label: 'LEETCODE',
  icon: <Code2 size={40} strokeWidth={4}/>,
  value: 'leetcode.com/u/Mohit_Murarka',
  bg: 'bg-neo-orange',
  rotate: 'rotate(1deg)',
  href: 'https://leetcode.com/u/Mohit_Murarka/',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback
    window.location.href = `mailto:mohitmurarka2004@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-halftone-yellow border-y-8 border-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Giant stacked title */}
        <div className="mb-12">
          <p className="font-black text-7xl md:text-9xl uppercase tracking-tighter text-black leading-none">LET'S</p>
          <div
            className="inline-block bg-neo-red border-4 border-black px-4 py-1 mb-1"
            style={{ boxShadow: '8px 8px 0 #000', transform: 'rotate(-1deg)' }}
          >
            <p className="font-black text-7xl md:text-9xl uppercase tracking-tighter text-black leading-none">MAKE</p>
          </div>
          <p className="font-black text-7xl md:text-9xl uppercase tracking-tighter text-black leading-none">NOISE.</p>
          <p className="font-bold text-xl md:text-2xl text-black mt-4">
            Open to internships, collaborations, and interesting AI problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — Contact Form */}
          <div className="border-4 border-black bg-white overflow-hidden" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
            <div className="bg-black border-b-4 border-black px-6 py-4">
              <p className="text-neo-yellow font-black uppercase tracking-widest">SEND A MESSAGE</p>
            </div>
            <div className="p-6 md:p-8">
              {sent ? (
                <div className="border-4 border-black bg-neo-green p-8 text-center" style={{ boxShadow: '8px 8px 0 #000' }}>
                  <p className="font-black text-3xl uppercase tracking-tighter">MESSAGE SENT ✓</p>
                  <p className="font-bold text-base mt-2">I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2">NAME</label>
                    <input
                      className="neo-input"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2">EMAIL</label>
                    <input
                      className="neo-input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-black text-xs uppercase tracking-widest mb-2">MESSAGE</label>
                    <textarea
                      className="neo-textarea"
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-16 bg-neo-red border-4 border-black font-black text-base uppercase tracking-widest text-black flex items-center justify-center gap-3 btn-press hover:bg-red-400 transition-all duration-100"
                    style={{ boxShadow: '6px 6px 0 #000' }}
                  >
                    <Send size={20} strokeWidth={4}/> SEND IT →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT — Sticker cards pinned to board */}
          <div className="relative flex flex-col gap-5">
            {channels.map((ch, i) => (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                className={`block border-4 border-black ${ch.bg} p-5 hover:rotate-0 hover:-translate-y-2 transition-all duration-150 no-underline`}
                style={{
                  boxShadow: '8px 8px 0px 0px #000',
                  transform: ch.rotate,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">{ch.icon}</div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest mb-1">{ch.label}</p>
                    <p className="font-bold text-base text-black break-all">{ch.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
