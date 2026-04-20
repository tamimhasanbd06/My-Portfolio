import React, { useState, useEffect } from "react";

// react-icons
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaReact, FaGithub, FaCode, FaJsSquare } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMongodb, SiExpress, SiFigma, SiDaisyui, SiOpenai,
  SiGoogle, SiMeta, SiNetlify, SiVercel, SiTailwindcss, SiMui
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { MdRouter } from "react-icons/md";

// extra icon libraries
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Flame } from "lucide-react";
import { IconBrandTailwind, IconIcons } from "@tabler/icons-react";

const skills = [
  { id: 1, name: "HTML", description: "Markup", categories: ["web-development","web-design","design"], icon: <IoLogoHtml5 /> },
  { id: 2, name: "CSS", description: "Style", categories: ["web-development","web-design","design"], icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", description: "Language", categories: ["programming","web-development"], icon: <FaJsSquare /> },
  { id: 4, name: "React", description: "Library", categories: ["library","web-development","programming"], icon: <FaReact /> },
  { id: 5, name: "Next.js", description: "Framework", categories: ["framework","web-development","programming"], icon: <RiNextjsFill /> },
  { id: 6, name: "Node.js", description: "Runtime", categories: ["backend","web-development","programming"], icon: <LiaNode /> },
  { id: 7, name: "Express", description: "Backend", categories: ["backend","web-development"], icon: <SiExpress /> },
  { id: 8, name: "MongoDB", description: "Database", categories: ["backend","web-development"], icon: <SiMongodb /> },
  { id: 9, name: "Figma", description: "Design", categories: ["design"], icon: <SiFigma /> },
  { id: 10, name: "Daisy UI", description: "UI", categories: ["design","web-design"], icon: <SiDaisyui /> },
  { id: 11, name: "Vite", description: "Tool", categories: ["tool","web-development"], icon: <TbBrandVite /> },
  { id: 12, name: "React Router", description: "Routing", categories: ["library","web-development"], icon: <MdRouter /> },
  { id: 13, name: "VS Code", description: "Editor", categories: ["tool"], icon: <FaCode /> },
  { id: 14, name: "ChatGPT", description: "AI", categories: ["ai"], icon: <SiOpenai /> },
  { id: 15, name: "Gemini", description: "AI", categories: ["ai"], icon: <SiGoogle /> },
  { id: 16, name: "Claude", description: "AI", categories: ["ai"], icon: <FaReact /> },
  { id: 17, name: "Copilot", description: "AI", categories: ["ai"], icon: <FaReact /> },
  { id: 18, name: "Meta AI", description: "AI", categories: ["ai"], icon: <SiMeta /> },
  { id: 19, name: "Vercel", description: "Deploy", categories: ["tool"], icon: <SiVercel /> },
  { id: 20, name: "Netlify", description: "Hosting", categories: ["tool"], icon: <SiNetlify /> },
  { id: 21, name: "Windstorm", description: "AI Tool", categories: ["ai"], icon: <FaReact /> },
  { id: 22, name: "GitHub", description: "Code", categories: ["tool"], icon: <FaGithub /> },

  { id: 23, name: "Tailwind CSS", description: "Utility CSS", categories: ["web-development","design"], icon: <SiTailwindcss /> },

  { id: 24, name: "Material UI", description: "React UI Library", categories: ["library","design"], icon: <SiMui /> },

  { id: 25, name: "Hero UI", description: "Accessible UI", categories: ["library","design"], icon: <AcademicCapIcon className="w-8 h-8" /> },

  { id: 26, name: "Lucide Icons", description: "Modern Icons", categories: ["design","library"], icon: <Flame size={32} /> },

  { id: 27, name: "Tabler Icons", description: "SVG Icons", categories: ["design","library"], icon: <IconIcons size={32} /> },

  { id: 28, name: "Heroicons", description: "SVG Icon Pack", categories: ["design","library"], icon: <AcademicCapIcon className="w-8 h-8" /> },
];

export default function Skill() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = skills.filter((s) => {
    const matchCategory = filter === "all" || s.categories.includes(filter);
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const limit = isMobile ? 10 : 20;
  const visibleSkills = showAll ? filtered : filtered.slice(0, limit);

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col items-center">

      <h1 className="text-4xl sm:text-6xl font-black mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Tech Stack
      </h1>

      {/* Search + Filter */}
      <div className={`w-full max-w-3xl gap-3 mb-10 flex ${isMobile ? "flex-col" : "flex-row"}`}>
        
        <input
          type="text"
          placeholder="Search skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 focus:outline-none 
          ${isMobile ? "w-full" : "flex-1"}`}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={`px-3 py-3 rounded-xl bg-zinc-900 border border-white/10 
          ${isMobile ? "w-full" : "w-40"}`}
        >
          <option value="all">All</option>
          <option value="web-development">Web Development</option>
          <option value="web-design">Web Design</option>
          <option value="programming">Programming</option>
          <option value="library">Library</option>
          <option value="framework">Framework</option>
          <option value="backend">Backend</option>
          <option value="design">Design</option>
          <option value="tool">Tool</option>
          <option value="ai">AI</option>
        </select>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full max-w-6xl">

        {visibleSkills.map((s) => (
          <div
            key={s.id}
            className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 
            hover:scale-105 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl"></div>

            <div className="relative flex flex-col items-center text-center">

              <div className="text-4xl mb-3 text-blue-400 group-hover:rotate-6 transition">
                {s.icon}
              </div>

              <h2 className="font-bold text-sm sm:text-base">{s.name}</h2>

              <p className="text-xs text-blue-400 mb-2">{s.description}</p>

            </div>
          </div>
        ))}

      </div>

      {/* SHOW MORE */}
      {filtered.length > limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-3 rounded-xl bg-blue-500/20 border border-blue-400 text-blue-300 hover:bg-blue-500/30 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}

    </div>
  );
}