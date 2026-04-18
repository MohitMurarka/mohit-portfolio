import React from 'react';

export default function StatsTicker({ items, bgColor = 'bg-black', textColor = 'text-neo-yellow', speed = 'animate-marquee', borderClass = 'border-y-4 border-black' }) {
  const text = items.join('   ★   ');
  const doubled = `${text}   ★   ${text}   ★   `;

  return (
    <div className={`w-full h-14 flex items-center overflow-hidden ${bgColor} ${borderClass}`} style={{zIndex:10}}>
      <div className={`${speed} flex-shrink-0 font-black uppercase tracking-widest text-sm ${textColor}`} style={{whiteSpace:'nowrap'}}>
        {doubled}&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;{doubled}
      </div>
    </div>
  );
}
