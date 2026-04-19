import React from "react";
import { Database, Cpu, Code2, BookOpen } from "lucide-react";

const modules = [
  {
    label: "DATA STRUCTURES & ALGORITHMS",
    icon: <Database size={20} strokeWidth={3} />,
    bg: "bg-neo-yellow",
  },
  {
    label: "OPERATING SYSTEMS",
    icon: <Cpu size={20} strokeWidth={3} />,
    bg: "bg-neo-red",
  },
  {
    label: "DATABASE SYSTEMS",
    icon: <Database size={20} strokeWidth={3} />,
    bg: "bg-neo-violet",
  },
  {
    label: "SOFTWARE ENGINEERING",
    icon: <Code2 size={20} strokeWidth={3} />,
    bg: "bg-white",
  },
  {
    label: "COMPILER DESIGN",
    icon: <BookOpen size={20} strokeWidth={3} />,
    bg: "bg-neo-green",
  },
  {
    label: "DATA MINING & WAREHOUSING",
    icon: <Database size={20} strokeWidth={3} />,
    bg: "bg-neo-orange",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-grid-violet border-y-8 border-black py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-black text-6xl md:text-7xl uppercase tracking-tighter text-black mb-12 leading-none">
          EDUCATION
        </h2>

        {/* Main big card */}
        <div
          className="border-4 border-black bg-white overflow-hidden"
          style={{ boxShadow: "20px 20px 0px 0px #000" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* Left column — 60% */}
            <div className="md:col-span-3 p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-black">
              <p className="font-black text-xs uppercase tracking-widest text-gray-600 mb-2">
                INSTITUTION
              </p>
              <h3 className="font-black text-4xl md:text-5xl uppercase tracking-tighter leading-tight">
                KIIT UNIVERSITY
              </h3>

              <div
                className="inline-block bg-neo-yellow border-4 border-black px-4 py-3 mt-4 mb-4"
                style={{
                  boxShadow: "6px 6px 0 #000",
                  transform: "rotate(-1deg)",
                }}
              >
                <p className="font-black text-lg md:text-2xl uppercase tracking-tight">
                  B.Tech — Computer Science
                  <br />
                  &amp; Software Engineering
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span
                  className="border-4 border-black bg-neo-red font-black text-xl text-white px-4 py-2"
                  style={{ boxShadow: "4px 4px 0 #000" }}
                >
                  2023–2027
                </span>
                <span
                  className="border-4 border-black bg-white font-bold text-base px-4 py-2"
                  style={{ boxShadow: "4px 4px 0 #000" }}
                >
                  📍 Bhubaneswar, India
                </span>
              </div>

              <div className="mt-6 border-t-4 border-black pt-6">
                <p className="font-black text-xs uppercase tracking-widest mb-2">
                  STUDENT ID
                </p>
                <span
                  className="border-4 border-black bg-black text-neo-yellow font-black text-sm px-4 py-2 inline-block tracking-widest"
                  style={{ boxShadow: "4px 4px 0 #FFD93D" }}
                >
                  2328177
                </span>
              </div>
            </div>

            {/* Right column — 40% coursework grid */}
            <div className="md:col-span-2 p-6 md:p-8">
              <p className="font-black text-xs uppercase tracking-widest mb-4 border-b-4 border-black pb-2">
                KEY COURSEWORK
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modules.map((m) => (
                  <div
                    key={m.label}
                    className={`border-4 border-black ${m.bg} p-3 flex flex-col gap-2`}
                    style={{ boxShadow: "4px 4px 0 #000" }}
                  >
                    <span>{m.icon}</span>
                    <p className="font-black text-xs uppercase tracking-tight leading-tight">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certification bottom strip */}
          <div className="bg-black border-t-4 border-black px-6 md:px-10 py-5">
            <p className="text-neo-yellow font-black text-xs md:text-sm uppercase tracking-widest leading-relaxed">
              <span className="bg-neo-green text-black px-2 py-0.5 border-2 border-neo-yellow">
                [VERIFIED ✓]
              </span>
              &nbsp; Supervised ML · Andrew Ng · Stanford · Oct 2025
              &nbsp;&nbsp;★&nbsp;&nbsp;
              <span className="bg-neo-green text-black px-2 py-0.5 border-2 border-neo-yellow">
                [VERIFIED ✓]
              </span>
              &nbsp; Business Analytics · Univ. of Colorado · Mar 2026
              &nbsp;&nbsp;★&nbsp;&nbsp;
              <span className="bg-neo-green text-black px-2 py-0.5 border-2 border-neo-yellow">
                [VERIFIED ✓]
              </span>
              &nbsp; Strategy &amp; Game Theory · IIM Ahmedabad · Mar 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
