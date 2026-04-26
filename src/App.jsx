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
  '6 PROJECTS SHIPPED',
  '7 AI AGENTS ORCHESTRATED',
  '2 PRODUCTION DEPLOYMENTS',
  'RAGAS FAITHFULNESS: 0.847',
  'CONTEXT PRECISION: 1.000',
  '4 COURSERA CERTIFICATIONS',
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
