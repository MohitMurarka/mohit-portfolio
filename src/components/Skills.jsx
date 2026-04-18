import React from 'react';
import { Star, Server, Code2, Award } from 'lucide-react';
import SkillTag from './ui/SkillTag';
import SectionTitle from './ui/SectionTitle';

const aiSkills = [
  'LANGGRAPH','LANGCHAIN','AGENTIC AI','LLM ORCHESTRATION',
  'GPT-4o / OPENAI API','LLAMA-3.3-70B','GROQ API','GEMINI API',
  'PROMPT ENGINEERING','CHROMADB / RAG','RAGAS EVALUATION',
  'SENTENCETRANSFORMERS','E2B SANDBOX',
];
const backendSkills = [
  'FASTAPI','FLASK + CORS','REST APIs','DOCKER',
  'SQLITE / MYSQL','NODE.JS','E2B CLOUD','RUFF LINTER',
  'PYTHON 3.11','STREAMLIT',
];
const langSkills = ['C/C++','JAVA','PYTHON','JAVASCRIPT','HTML/CSS'];
const frontendSkills = ['REACT.JS','VANILLA JS','RESPONSIVE UI','LAZY LOADING'];
const toolSkills = ['GIT','LINUX','DOCKER','STREAMLIT'];

export default function Skills() {
  return (
    <section id="skills" className="bg-dense-dots border-y-8 border-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-4">
          <SectionTitle light className="text-5xl md:text-7xl">TECHNICAL ARSENAL</SectionTitle>
        </div>
        <div className="bg-neo-red border-y-4 border-black px-6 py-3 mb-12 inline-block w-full">
          <span className="font-black uppercase tracking-widest text-sm text-black">WHAT I KNOW &amp; HOW I USE IT</span>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* COLUMN 1 — CORE AI/LLM */}
          <div className="border-4 border-black bg-white overflow-hidden" style={{boxShadow:'12px 12px 0px 0px #FFD93D'}}>
            <div className="bg-neo-yellow border-b-4 border-black px-6 py-4">
              <p className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <Star size={14} strokeWidth={4} className="fill-black"/> ◆ CORE MODULE
              </p>
              <p className="font-black text-2xl uppercase mt-1">AI / LLM SYSTEMS</p>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {aiSkills.map(s => <SkillTag key={s}>{s}</SkillTag>)}
              </div>
              <div className="mt-6 border-t-4 border-black pt-4">
                <p className="font-bold text-sm text-black">Expert-level orchestration. Self-correcting loops. HITL systems.</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2 — BACKEND */}
          <div className="border-4 border-black bg-white overflow-hidden relative" style={{boxShadow:'12px 12px 0px 0px #FF6B6B'}}>
            <div className="bg-neo-red border-b-4 border-black px-6 py-4">
              <p className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <Server size={14} strokeWidth={4}/> SYSTEMS
              </p>
              <p className="font-black text-2xl uppercase mt-1">BACKEND &amp; SYSTEMS</p>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {backendSkills.map(s => (
                  <span
                    key={s}
                    className="inline-block border-4 border-black font-black text-xs uppercase tracking-widest px-3 py-2 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-150 cursor-default"
                    style={{backgroundColor:'rgba(255,107,107,0.18)'}}
                  >{s}</span>
                ))}
              </div>
            </div>
            {/* Stat sticker */}
            <div
              className="absolute bottom-4 right-4 bg-neo-yellow border-4 border-black px-3 py-2 text-center"
              style={{boxShadow:'4px 4px 0px 0px #000', transform:'rotate(3deg)'}}
            >
              <p className="font-black text-xs uppercase leading-tight">100% BUG<br/>DETECTION</p>
            </div>
          </div>

          {/* COLUMN 3 — LANGUAGES + FRONTEND + TOOLS */}
          <div className="border-4 border-black bg-white overflow-hidden" style={{boxShadow:'12px 12px 0px 0px #C4B5FD'}}>
            <div className="bg-neo-violet border-b-4 border-black px-6 py-4">
              <p className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <Code2 size={14} strokeWidth={4}/> STACK
              </p>
              <p className="font-black text-2xl uppercase mt-1">LANGUAGES &amp; TOOLS</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="font-black text-xs uppercase tracking-widest mb-2 border-b-2 border-black pb-1">LANGUAGES</p>
                <div className="flex flex-wrap gap-2">{langSkills.map(s => <SkillTag key={s} color="yellow">{s}</SkillTag>)}</div>
              </div>
              <div className="border-t-4 border-black pt-4">
                <p className="font-black text-xs uppercase tracking-widest mb-2 border-b-2 border-black pb-1">FRONTEND</p>
                <div className="flex flex-wrap gap-2">{frontendSkills.map(s => <SkillTag key={s} color="violet">{s}</SkillTag>)}</div>
              </div>
              <div className="border-t-4 border-black pt-4">
                <p className="font-black text-xs uppercase tracking-widest mb-2 border-b-2 border-black pb-1">TOOLS</p>
                <div className="flex flex-wrap gap-2">{toolSkills.map(s => <SkillTag key={s} color="white">{s}</SkillTag>)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications block */}
        <div className="mt-8 border-4 border-black bg-neo-violet overflow-hidden" style={{boxShadow:'8px 8px 0px 0px #000'}}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8">
            <div className="flex-shrink-0">
              <Award size={40} strokeWidth={4} className="text-black"/>
              <p className="font-black text-3xl uppercase tracking-tighter mt-2 leading-tight">CERTIFI-<br/>CATIONS</p>
            </div>
            <div className="flex-1 border-l-0 md:border-l-4 border-black md:pl-8">
              <div className="border-4 border-black bg-white p-4" style={{boxShadow:'4px 4px 0px 0px #000'}}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-black text-base uppercase tracking-tight">Supervised Machine Learning — Regression &amp; Classification</p>
                    <p className="font-bold text-sm mt-1">Coursera · Andrew Ng · DeepLearning.AI · 2025</p>
                  </div>
                  <span className="bg-neo-green border-4 border-black font-black text-xs uppercase px-3 py-2 flex-shrink-0" style={{boxShadow:'2px 2px 0 #000'}}>
                    VERIFIED ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
