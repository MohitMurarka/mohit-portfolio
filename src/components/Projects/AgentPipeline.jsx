import React from 'react';

function Node({ label, bg, children }) {
  return (
    <div
      className="border-4 border-black font-black text-xs uppercase tracking-widest text-center px-3 py-3 flex-shrink-0"
      style={{ background: bg, boxShadow:'4px 4px 0px 0px #000', minWidth:'100px' }}
    >
      {label}
      {children}
    </div>
  );
}

const Arrow = ({ dir = 'right' }) => {
  const map = { right:'→', down:'↓', left:'←', up:'↑' };
  return <span className="font-black text-lg px-1 flex items-center select-none">{map[dir]}</span>;
};

export default function AgentPipeline() {
  return (
    <div className="border-4 border-black bg-neo-bg p-5" style={{boxShadow:'inset 0 0 0 2px #eee'}}>
      <p className="font-black text-xs uppercase tracking-widest mb-4 border-b-4 border-black pb-2">AGENT ORCHESTRATION PIPELINE</p>

      {/* Row 1 */}
      <div className="flex items-center flex-wrap gap-0 mb-2">
        <Node label="PLANNER" bg="#FFD93D"/>
        <Arrow dir="right"/>
        <Node label="RESEARCHER" bg="#C4B5FD"/>
        <Arrow dir="right"/>
        <Node label="CODER" bg="#FF6B6B"/>
        <Arrow dir="right"/>
        <Node label="EXECUTOR" bg="#fff">
          <p className="font-bold text-xs mt-1 normal-case tracking-normal" style={{fontSize:'9px'}}>[E2B SANDBOX]</p>
        </Node>
      </div>

      {/* Down arrow from executor */}
      <div className="flex justify-end pr-14">
        <Arrow dir="down"/>
      </div>

      {/* Row 2 — reversed */}
      <div className="flex items-center flex-wrap gap-0 flex-row-reverse mb-2">
        <Node label="EVALUATOR" bg="#6BCB77"/>
        <Arrow dir="left"/>
        <Node label="REPORTER" bg="#fff"/>
        <Arrow dir="left"/>
        <Node label="REFINER" bg="#FF9843"/>
      </div>

      {/* Down arrow from refiner */}
      <div className="flex">
        <Arrow dir="down"/>
      </div>

      {/* Hypothesis Graveyard */}
      <div
        className="w-full bg-black border-4 border-black text-neo-yellow font-black text-xs uppercase tracking-widest text-center py-3"
        style={{boxShadow:'4px 4px 0px 0px #FFD93D'}}
      >
        ⚰ HYPOTHESIS GRAVEYARD [SQLite] — STORES ALL TEST RESULTS
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {['7 AGENTS','∞ RETRY LOOPS','E2B SANDBOX','FASTAPI + REACT'].map(s => (
          <div key={s} className="border-4 border-black bg-neo-yellow font-black text-xs uppercase tracking-widest text-center py-2 px-1" style={{boxShadow:'4px 4px 0px 0px #000'}}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
