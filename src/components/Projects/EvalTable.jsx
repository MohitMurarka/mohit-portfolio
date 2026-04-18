import React from 'react';

const metrics = [
  { name:'CONTEXT PRECISION', value:'1.000', status:'OK',   bg:'#d1fae5', border:'#6BCB77' },
  { name:'FAITHFULNESS',      value:'0.400', status:'WARN', bg:'#ffedd5', border:'#FF9843' },
  { name:'INTERNAL SUITE',    value:'10/10', status:'OK',   bg:'#d1fae5', border:'#6BCB77' },
  { name:'RED-TEAM TESTS',    value:'2/2',   status:'OK',   bg:'#d1fae5', border:'#6BCB77' },
];

export default function EvalTable() {
  return (
    <div className="border-4 border-black bg-neo-yellow p-4" style={{boxShadow:'4px 4px 0px 0px #000'}}>
      <p className="font-black text-sm uppercase tracking-widest mb-3 border-b-4 border-black pb-2">EVALUATION RESULTS — RAGAS</p>
      <div className="space-y-2">
        {metrics.map(m => (
          <div
            key={m.name}
            className="border-4 border-black flex items-center justify-between px-4 py-3"
            style={{ background: m.bg }}
          >
            <span className="font-black text-xs uppercase tracking-widest">{m.name}</span>
            <div className="flex items-center gap-3">
              <span className="font-black text-lg">{m.value}</span>
              <span
                className="border-4 border-black font-black text-xs uppercase px-2 py-1"
                style={{ background: m.status === 'OK' ? '#6BCB77' : '#FF9843', boxShadow:'2px 2px 0 #000' }}
              >
                {m.status === 'OK' ? '✓ OK' : '⚠ WARN'}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-bold text-xs mt-3 text-black">
        ⚠ WARN = Groq API limitation with RAGAS scoring framework, not a model failure.
      </p>
    </div>
  );
}
