import React, { useState, useEffect } from "react";

import {
  IoLogoHtml5,
} from "react-icons/io";

import {
  FaCss3Alt, FaReact, FaGithub, FaCode, FaJsSquare,
  FaRobot, FaPaintBrush, FaKey
} from "react-icons/fa";

import { LiaNode } from "react-icons/lia";
import { RiNextjsFill } from "react-icons/ri";

import {
  SiMongodb, SiExpress, SiFigma, SiOpenai, SiGoogle,
  SiMeta, SiNetlify, SiVercel, SiTailwindcss, SiMui,
  SiChartdotjs, SiPerplexity, SiFirebase
} from "react-icons/si";

import {
  TbBrandVite, TbWind, TbAtomOff, TbLock,
  TbNotebook, TbChartBar
} from "react-icons/tb";

/* ================= 37 SKILLS ================= */
const skills = [
  { id: 1, name: "HTML", desc: "Structure", icon: <IoLogoHtml5 /> },
  { id: 2, name: "CSS", desc: "Design", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", desc: "Logic", icon: <FaJsSquare /> },
  { id: 4, name: "React", desc: "UI", icon: <FaReact /> },
  { id: 5, name: "Next.js", desc: "Framework", icon: <RiNextjsFill /> },

  { id: 6, name: "Node.js", desc: "Backend", icon: <LiaNode /> },
  { id: 7, name: "Express", desc: "Server", icon: <SiExpress /> },
  { id: 8, name: "MongoDB", desc: "Database", icon: <SiMongodb /> },

  { id: 9, name: "Figma", desc: "Design", icon: <SiFigma /> },
  { id: 10, name: "Tailwind", desc: "CSS", icon: <SiTailwindcss /> },

  { id: 11, name: "VS Code", desc: "Editor", icon: <FaCode /> },
  { id: 12, name: "Vite", desc: "Build", icon: <TbBrandVite /> },
  { id: 13, name: "GitHub", desc: "Git", icon: <FaGithub /> },
  { id: 14, name: "Vercel", desc: "Deploy", icon: <SiVercel /> },
  { id: 15, name: "Netlify", desc: "Deploy", icon: <SiNetlify /> },

  { id: 16, name: "ChatGPT", desc: "AI", icon: <SiOpenai /> },
  { id: 17, name: "Gemini", desc: "AI", icon: <SiGoogle /> },
  { id: 18, name: "Meta AI", desc: "AI", icon: <SiMeta /> },
  { id: 19, name: "Claude", desc: "AI", icon: <FaRobot /> },
  { id: 20, name: "DeepSeek", desc: "AI", icon: <FaRobot /> },

  { id: 21, name: "Copilot", desc: "AI Code", icon: <FaGithub /> },
  { id: 22, name: "Perplexity", desc: "AI Search", icon: <SiPerplexity /> },
  { id: 23, name: "DALL·E", desc: "Image AI", icon: <SiOpenai /> },
  { id: 24, name: "Midjourney", desc: "Art AI", icon: <FaPaintBrush /> },
  { id: 25, name: "Stable Diffusion", desc: "Image AI", icon: <FaPaintBrush /> },

  { id: 26, name: "Material UI", desc: "UI", icon: <SiMui /> },
  { id: 27, name: "Chart.js", desc: "Charts", icon: <SiChartdotjs /> },
  { id: 28, name: "Recharts", desc: "Charts", icon: <SiChartdotjs /> },
  { id: 29, name: "ApexCharts", desc: "Charts", icon: <TbChartBar /> },

  { id: 30, name: "Auth System", desc: "Security", icon: <TbLock /> },
  { id: 31, name: "NextAuth", desc: "Auth", icon: <FaKey /> },
  { id: 32, name: "Firebase Auth", desc: "Auth", icon: <SiFirebase /> },

  { id: 33, name: "Markdown", desc: "Docs", icon: <TbNotebook /> },
  { id: 34, name: "Wind Tools", desc: "Utility", icon: <TbWind /> },
  { id: 35, name: "Atom Tools", desc: "Physics", icon: <TbAtomOff /> },

  { id: 36, name: "Portfolio UI", desc: "Design", icon: <FaPaintBrush /> },
  { id: 37, name: "Code Helper", desc: "Utility", icon: <FaCode /> },
];

/* ================= MAIN ================= */
export default function Skill() {
  const [limit, setLimit] = useState(20);
  const [showAll, setShowAll] = useState(false);

  /* RESPONSIVE LIMIT SYSTEM */
  useEffect(() => {
    const updateLimit = () => {
      const w = window.innerWidth;

      if (w >= 1280) setLimit(20);        // Desktop
      else if (w >= 1024) setLimit(15);   // Laptop
      else if (w >= 768) setLimit(12);    // Tablet
      else setLimit(10);                  // Mobile
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const visibleSkills = showAll ? skills : skills.slice(0, limit);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Tech Stack
      </h1>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {visibleSkills.map((s) => (
          <div
            key={s.id}
            className="p-4 rounded-lg bg-white/5 border border-white/10
            flex flex-col items-center text-center
            hover:scale-105 hover:bg-white/10 transition"
          >

            <div className="text-3xl text-blue-400 mb-2">
              {s.icon}
            </div>

            <h3 className="font-semibold text-sm">{s.name}</h3>
            <p className="text-xs text-gray-400">{s.desc}</p>

          </div>
        ))}

      </div>

      {/* SHOW MORE */}
      {skills.length > limit && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

    </div>
  );
}