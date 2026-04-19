import React from 'react';
import AgentPipeline from './AgentPipeline';
import EvalTable from './EvalTable';
import Button from '../ui/Button';

/* ─── Mini pipeline builder ─── */
function FlowNode({ label, bg = '#fff', note }) {
  return (
    <div
      className="border-4 border-black font-black text-xs uppercase tracking-widest text-center px-3 py-2 flex-shrink-0"
      style={{ background: bg, boxShadow: '3px 3px 0 #000', minWidth: '88px' }}
    >
      {label}
      {note && <p className="font-bold normal-case tracking-normal mt-0.5" style={{ fontSize: '9px' }}>{note}</p>}
    </div>
  );
}
const Arr = ({ d = 'r' }) => {
  const m = { r: '→', d: '↓', l: '←', u: '↑' };
  return <span className="font-black text-base px-0.5 flex items-center">{m[d]}</span>;
};

/* CodeForge architecture */
function CodeForgePipeline() {
  return (
    <div className="border-4 border-black bg-neo-bg p-4 mb-4" style={{ boxShadow: 'inset 2px 2px 0 #eee' }}>
      <p className="font-black text-xs uppercase tracking-widest mb-3 border-b-4 border-black pb-2">CYCLIC GRAPH ARCHITECTURE</p>
      <div className="flex flex-wrap items-center gap-0 mb-2">
        <FlowNode label="SUPERVISOR" bg="#FFD93D" />
        <Arr /><FlowNode label="LINTER (RUFF)" bg="#fff" />
        <Arr /><FlowNode label="REFACTOR AGENT" bg="#FF6B6B" />
        <Arr /><FlowNode label="VALIDATOR" bg="#C4B5FD" />
      </div>
      <div className="flex items-center gap-0 mb-2 ml-2">
        <span className="font-black text-xs text-gray-500 mr-2">↺ if issues found:</span>
        <Arr d="l" />
        <span className="font-black text-xs">loops back to LINTER</span>
      </div>
      <div className="flex flex-wrap items-center gap-0">
        <FlowNode label="CONFIDENCE SCORER" bg="#6BCB77" />
        <Arr /><FlowNode label="HITL BREAKPOINT" bg="#FF9843" note="if score < threshold" />
        <Arr /><FlowNode label="COMPLETE ✓" bg="#000" />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {['100% BUG DETECTION', '~3-5s PER ITER', 'ZERO STATE LOSS'].map(s => (
          <div key={s} className="border-4 border-black bg-neo-yellow font-black text-xs uppercase tracking-widest text-center py-2" style={{ boxShadow: '3px 3px 0 #000' }}>{s}</div>
        ))}
      </div>
    </div>
  );
}

/* Feedback pipeline */
function FeedbackPipeline() {
  const nodes = [
    { label: 'INPUT', bg: '#fff' },
    { label: 'SENTIMENT', bg: '#FFD93D' },
    { label: 'CATEGORIZE', bg: '#C4B5FD' },
    { label: 'PRIORITY TAG', bg: '#FF9843' },
    { label: 'DEPT ROUTE', bg: '#6BCB77' },
    { label: 'OUTPUT', bg: '#FF6B6B' },
  ];
  const cats = ['BUG REPORT','FEATURE REQ','COMPLAINT','PRAISE','BILLING','UX FEEDBACK','PERFORMANCE','SUPPORT'];
  return (
    <div>
      <div className="border-4 border-black bg-neo-bg p-4 mb-4" style={{ boxShadow: 'inset 2px 2px 0 #eee' }}>
        <p className="font-black text-xs uppercase tracking-widest mb-3 border-b-4 border-black pb-2">PIPELINE FLOW</p>
        <div className="flex flex-wrap items-center gap-0">
          {nodes.map((n, i) => (
            <React.Fragment key={n.label}>
              <FlowNode label={n.label} bg={n.bg} />
              {i < nodes.length - 1 && <Arr />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {cats.map(c => (
          <span key={c} className="border-4 border-black bg-white font-black text-xs uppercase text-center py-2 px-1" style={{ boxShadow: '2px 2px 0 #000', fontSize: '9px' }}>{c}</span>
        ))}
      </div>
    </div>
  );
}

/* Legal knowledge domains */
const legalDomains = ['CONTRACT LAW','NDA','EMPLOYMENT LAW','COPYRIGHT','TRADEMARK','CIVIL LITIGATION','FILING DEADLINES','EVIDENCE RULES','BAIL LAW','LEGAL ETHICS'];
const movieFeatures = ['TMDB LIVE DATA','DEBOUNCED SEARCH','GENRE FILTERING','LAZY LOADING','CORS HANDLING','QUERY CACHING','DYNAMIC ROUTING','PERSONALIZED RECS'];

export default function Projects() {
  return (
    <section id="projects" className="bg-grid py-20 px-4 md:px-8 border-y-8 border-black">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12 relative">
          {/* Ghost number */}
          <div className="absolute -top-10 -left-4 font-black text-[12rem] leading-none select-none pointer-events-none opacity-5">01</div>

          <div className="relative z-10">
            <span className="inline-block border-4 border-black bg-neo-red font-black text-xs uppercase tracking-widest px-4 py-2 mb-4" style={{ boxShadow: '4px 4px 0 #000' }}>WHAT I'VE BUILT</span>
            <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter text-black leading-none">MISSION LOGS</h2>
          </div>
        </div>

        <div className="space-y-8">

          {/* ── PROJECT 01 — QUANT AGENT ── */}
          <div className="border-4 border-black bg-white overflow-hidden" style={{ boxShadow: '16px 16px 0px 0px #000' }}>
            {/* Header */}
            <div className="bg-neo-red border-b-4 border-black px-6 py-4 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="border-4 border-black bg-black text-neo-yellow font-black text-xs uppercase tracking-widest px-3 py-1" style={{ boxShadow: '2px 2px 0 #FFD93D' }}>MISSION_01</span>
                <span className="font-black text-xl md:text-3xl uppercase tracking-tighter text-black">Autonomous Quant Research Agent</span>
              </div>
              <div className="flex gap-2">
                <span className="border-4 border-black bg-neo-green font-black text-xs uppercase px-3 py-1" style={{ boxShadow: '2px 2px 0 #000' }}>[COMPLETED]</span>
                <span className="border-4 border-black bg-white font-black text-xs uppercase px-3 py-1">2026</span>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-6 border-b-4 xl:border-b-0 xl:border-r-4 border-black">
                <p className="font-bold text-sm text-gray-700 mb-4 border-b-4 border-black pb-3">
                  <span className="font-black uppercase">STACK: </span>LangGraph · GPT-4o-mini · FastAPI · React · SQLite · E2B
                </p>
                <div className="border-4 border-black bg-neo-yellow p-4 mb-5" style={{ boxShadow: '4px 4px 0 #000' }}>
                  <p className="font-bold text-base text-black leading-relaxed">
                    Built a multi-agent AI research system using LangGraph orchestrating 7 specialized GPT-4o-mini agents that autonomously write, execute, and evaluate Python backtesting code to test financial hypotheses end-to-end.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['7 SPECIALIZED AGENTS','SELF-CORRECTING CODE LOOP','E2B CLOUD SANDBOX','HYPOTHESIS GRAVEYARD (SQLite)','HUMAN-IN-THE-LOOP APPROVAL','FASTAPI STREAMING REST API','REACT LIVE AGENT FEED','COLORED CLI OUTPUT'].map(b => (
                    <span key={b} className="border-4 border-black bg-white font-black text-xs uppercase tracking-widest px-3 py-2" style={{ boxShadow: '3px 3px 0 #000' }}>{b}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t-4 border-black">
                  <Button variant="outline" href="https://github.com/MohitMurarka/quant-research-agent">VIEW ON GITHUB ↗</Button>
                </div>
              </div>
              {/* Right — pipeline */}
              <div className="p-6">
                <AgentPipeline />
              </div>
            </div>
          </div>

          {/* ── PROJECTS 02 + 03 — side by side ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* PROJECT 02 — LEGAL ASSISTANT (60%) */}
            <div className="lg:col-span-3 border-4 border-black bg-white overflow-hidden card-lift" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
              <div className="bg-neo-violet border-b-4 border-black px-6 py-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="border-4 border-black bg-black text-neo-yellow font-black text-xs uppercase px-3 py-1" style={{ boxShadow: '2px 2px 0 #FFD93D' }}>MISSION_02</span>
                  <span className="font-black text-xl uppercase tracking-tighter">Legal Document Assistant</span>
                </div>
                <span className="border-4 border-black bg-white font-black text-xs uppercase px-3 py-1">2025</span>
              </div>
              <div className="p-6">
                <p className="font-bold text-sm text-gray-700 mb-4 border-b-4 border-black pb-3">
                  <span className="font-black uppercase">STACK: </span>LangGraph · LangChain · Groq (Llama-3.3-70B) · ChromaDB · RAGAS · Streamlit
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['LLM ROUTING','SELF-EVAL LOOP','RAG SYSTEM','REAL-TIME DEADLINES'].map(b => (
                    <span key={b} className="border-4 border-black bg-neo-violet font-black text-xs uppercase px-2 py-1" style={{ boxShadow: '2px 2px 0 #000' }}>{b}</span>
                  ))}
                </div>
                <div className="border-4 border-black bg-neo-yellow p-3 mb-4" style={{ boxShadow: '3px 3px 0 #000' }}>
                  <p className="font-bold text-sm text-black leading-relaxed">
                    Agentic legal Q&A assistant with 8-node LangGraph pipeline, ChromaDB RAG, LLM faithfulness scoring (0–1), auto-retry below 0.7, and real-time filing deadline calculator.
                  </p>
                </div>
                <EvalTable />
                <div className="mt-4">
                  <p className="font-black text-xs uppercase tracking-widest mb-2 border-b-2 border-black pb-1">KNOWLEDGE DOMAINS</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {legalDomains.map(d => (
                      <span key={d} className="border-4 border-black bg-white font-black text-xs uppercase px-2 py-1" style={{ boxShadow: '2px 2px 0 #000', fontSize: '9px' }}>{d}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t-4 border-black">
                  <Button variant="outline" href="https://github.com/MohitMurarka/legal-document-assistant">VIEW ON GITHUB ↗</Button>
                </div>
              </div>
            </div>

            {/* PROJECT 03 — CODEFORGE (40%) */}
            <div className="lg:col-span-2 border-4 border-black bg-white overflow-hidden card-lift relative" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
              {/* Absolute headline badge */}
              <div
                className="absolute top-4 right-4 z-10 bg-neo-red border-4 border-black font-black text-xs uppercase px-3 py-2"
                style={{ boxShadow: '3px 3px 0 #000', transform: 'rotate(3deg)' }}
              >
                CYCLIC GRAPH
              </div>
              <div className="bg-black border-b-4 border-black px-6 py-4 flex items-center gap-3">
                <span className="border-4 border-black border-neo-yellow text-neo-yellow font-black text-xs uppercase px-3 py-1" style={{ borderColor: '#FFD93D', boxShadow: '2px 2px 0 #FFD93D' }}>MISSION_03</span>
                <span className="font-black text-xl uppercase tracking-tighter text-neo-yellow">CodeForge AI</span>
              </div>
              <div className="p-6">
                <p className="font-bold text-sm text-gray-700 mb-4 border-b-4 border-black pb-3">
                  <span className="font-black uppercase">STACK: </span>LangGraph · GPT-4o-mini · Ruff · Flask · HTML/CSS/JS
                </p>
                <div className="border-4 border-black bg-neo-yellow p-3 mb-4" style={{ boxShadow: '3px 3px 0 #000' }}>
                  <p className="font-bold text-sm text-black leading-relaxed">
                    Stateful multi-agent code review — Ruff (deterministic) + GPT-4o-mini (semantic rewrite) in a cyclic LangGraph loop with HITL breakpoints.
                  </p>
                </div>
                <CodeForgePipeline />
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t-4 border-black">
                  <Button variant="dark" href="https://github.com/MohitMurarka/CodeForge-AI">VIEW ON GITHUB ↗</Button>
                </div>
              </div>
            </div>
          </div>

          {/* ── PROJECTS 04 + 05 — side by side ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* PROJECT 04 — FEEDBACK PIPELINE */}
            <div className="border-4 border-black bg-white overflow-hidden card-lift relative" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
              {/* Rotating stat sticker */}
              <div
                className="absolute top-20 right-4 z-10 bg-neo-red border-4 border-black text-black text-center px-3 py-2"
                style={{ boxShadow: '8px 8px 0px 0px #000', transform: 'rotate(-2deg)' }}
              >
                <p className="font-black text-sm uppercase leading-tight">70% LESS<br/>MANUAL WORK</p>
              </div>
              <div className="bg-neo-yellow border-b-4 border-black px-6 py-4 flex items-center gap-3">
                <span className="border-4 border-black bg-black text-neo-yellow font-black text-xs uppercase px-3 py-1" style={{ boxShadow: '2px 2px 0 #FFD93D' }}>MISSION_04</span>
                <span className="font-black text-xl uppercase tracking-tighter">Customer Feedback Pipeline</span>
              </div>
              <div className="p-6">
                <p className="font-bold text-sm text-gray-700 mb-4 border-b-4 border-black pb-3">
                  <span className="font-black uppercase">STACK: </span>LangChain · LangGraph · Gemini API · Python
                </p>
                <div className="border-4 border-black bg-neo-yellow p-3 mb-4" style={{ boxShadow: '3px 3px 0 #000' }}>
                  <p className="font-bold text-sm text-black leading-relaxed">
                    End-to-end agentic pipeline for automated customer feedback processing — sentiment analysis, categorization, priority tagging, and smart department routing.
                  </p>
                </div>
                <FeedbackPipeline />
              </div>
            </div>

            {/* PROJECT 05 — MOVIE RECS */}
            <div className="border-4 border-black bg-white overflow-hidden card-lift" style={{ boxShadow: '12px 12px 0px 0px #000' }}>
              <div className="bg-neo-violet border-b-4 border-black px-6 py-4 flex items-center gap-3">
                <span className="border-4 border-black bg-black text-neo-yellow font-black text-xs uppercase px-3 py-1" style={{ boxShadow: '2px 2px 0 #FFD93D' }}>MISSION_05</span>
                <span className="font-black text-xl uppercase tracking-tighter">Movie Recommendation Site</span>
              </div>
              <div className="p-6">
                <p className="font-bold text-sm text-gray-700 mb-4 border-b-4 border-black pb-3">
                  <span className="font-black uppercase">STACK: </span>React.js · Node.js · TMDB API
                </p>
                <div className="border-4 border-black bg-neo-yellow p-3 mb-5" style={{ boxShadow: '3px 3px 0 #000' }}>
                  <p className="font-bold text-sm text-black leading-relaxed">
                    Full-stack movie recommendation platform with real-time TMDB data, genre filtering, personalized recommendations, and performance-optimized lazy loading.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {movieFeatures.map(f => (
                    <span key={f} className="border-4 border-black bg-white font-black text-xs uppercase text-center py-2 px-2" style={{ boxShadow: '2px 2px 0 #000', fontSize: '10px' }}>{f}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t-4 border-black">
                  <Button variant="outline" href="https://github.com/MohitMurarka">VIEW ON GITHUB ↗</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
