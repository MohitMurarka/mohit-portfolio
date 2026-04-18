import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const statsItems = [
  '5 PROJECTS SHIPPED',
  '7 AI AGENTS ORCHESTRATED',
  '10/10 INTERNAL TEST SUITE',
  '70% REDUCTION IN MANUAL EFFORT',
  'LANGGRAPH · CHROMADB · GPT-4o · LLAMA-3.3-70B',
  'CONTEXT PRECISION: 100%',
  'OPEN TO INTERNSHIPS',
];

const techItems = [
  '★ AGENTIC AI',
  'LANGGRAPH',
  'GPT-4o',
  'FASTAPI',
  'REACT',
  'CHROMADB',
  'MULTI-AGENT',
  'SELF-CORRECTING',
  'LLM ORCHESTRATION',
  'RAG SYSTEMS',
  'E2B SANDBOX',
];

export default function App() {
  return (
    <div className="bg-neo-bg font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />

      <main>
        <Hero />

        {/* Stats ticker divider */}
        <StatsTicker
          items={statsItems}
          bgColor="bg-black"
          textColor="text-neo-yellow"
          speed="animate-marquee"
          borderClass="border-y-4 border-black"
        />

        <Skills />

        {/* Tech ticker between skills and projects */}
        <StatsTicker
          items={techItems}
          bgColor="bg-neo-red"
          textColor="text-white"
          speed="animate-marquee-fast"
          borderClass="border-y-4 border-black"
        />

        <Projects />

        <Experience />

        {/* Divider ticker */}
        <StatsTicker
          items={['KIIT UNIVERSITY','B.TECH CS 2023-2027','COURSERA CERTIFIED','ANDREW NG · DEEPLEARNING.AI','SUPERVISED ML','OPEN TO WORK']}
          bgColor="bg-neo-violet"
          textColor="text-black"
          speed="animate-marquee-slow"
          borderClass="border-y-4 border-black"
        />

        <Education />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
