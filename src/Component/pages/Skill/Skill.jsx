import React, { useState, useEffect } from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaReact, FaGithub, FaCode, FaJsSquare } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiMongodb, SiExpress, SiFigma, SiDaisyui, SiOpenai,
  SiGoogle, SiMeta, SiNetlify, SiVercel,
} from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { MdRouter } from "react-icons/md";

const skills = [
  { id: 1, name: "HTML", description: "Markup", categories: ["web"], icon: <IoLogoHtml5 className="text-blue-400" /> },
  { id: 2, name: "CSS", description: "Style", categories: ["web"], icon: <FaCss3Alt className="text-blue-400" /> },
  { id: 3, name: "JavaScript", description: "Language", categories: ["web"], icon: <FaJsSquare className="text-blue-400" /> },
  { id: 4, name: "React", description: "Library", categories: ["library"], icon: <FaReact className="text-blue-400" /> },
  { id: 5, name: "Next.js", description: "Framework", categories: ["framework"], icon: <RiNextjsFill className="text-blue-400" /> },
  { id: 6, name: "Node.js", description: "Runtime", categories: ["backend"], icon: <LiaNode className="text-blue-400" /> },
  { id: 7, name: "Express", description: "Backend", categories: ["backend"], icon: <SiExpress className="text-blue-400" /> },
  { id: 8, name: "MongoDB", description: "Database", categories: ["backend"], icon: <SiMongodb className="text-blue-400" /> },
  { id: 9, name: "Figma", description: "Design", categories: ["design"], icon: <SiFigma className="text-blue-400" /> },
  { id: 10, name: "DaisyUI", description: "UI", categories: ["design"], icon: <SiDaisyui className="text-blue-400" /> },
  { id: 11, name: "Vite", description: "Tool", categories: ["tool"], icon: <TbBrandVite className="text-blue-400" /> },
  { id: 12, name: "React Router", description: "Routing", categories: ["library"], icon: <MdRouter className="text-blue-400" /> },
  { id: 13, name: "VS Code", description: "Editor", categories: ["tool"], icon: <FaCode className="text-blue-400" /> },
  { id: 14, name: "ChatGPT", description: "AI", categories: ["ai"], icon: <SiOpenai className="text-blue-400" /> },
  { id: 15, name: "Gemini", description: "AI", categories: ["ai"], icon: <SiGoogle className="text-blue-400" /> },
  { id: 16, name: "Claude", description: "AI", categories: ["ai"], icon: <FaReact className="text-blue-400" /> },
  { id: 17, name: "Copilot", description: "AI", categories: ["ai"], icon: <FaReact className="text-blue-400" /> },
  { id: 18, name: "Meta AI", description: "AI", categories: ["ai"], icon: <SiMeta className="text-blue-400" /> },
  { id: 19, name: "Vercel", description: "Deploy", categories: ["tool"], icon: <SiVercel className="text-blue-400" /> },
  { id: 20, name: "Netlify", description: "Hosting", categories: ["tool"], icon: <SiNetlify className="text-blue-400" /> },
  { id: 21, name: "Windstorm", description: "AI Tool", categories: ["ai"], icon: <FaReact className="text-blue-400" /> },
  { id: 22, name: "GitHub", description: "Code", categories: ["tool"], icon: <FaGithub className="text-blue-400" /> },
];

export default function Skill() {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);

  // Logic to handle responsiveness for card limits
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setLimit(10); // Mobile and Tablet
      } else {
        setLimit(20); // Laptop and Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = skills.filter((s) => {
    const matchCategory = filter === "all" || s.categories.includes(filter);
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const visibleSkills = showAll ? filtered : filtered.slice(0, limit);

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      
      {/* --- Header Section with Gradient --- */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          Tech Stack
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A curated list of my technical skills and the tools I use daily.
        </p>
      </header>

      {/* --- Filter and Search UI --- */}
      <div className="flex w-full max-w-3xl gap-4 mb-10">
        <input
          type="text"
          placeholder="Search skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none cursor-pointer"
        >
          <option className="bg-zinc-900" value="all">All</option>
          <option className="bg-zinc-900" value="web">Web</option>
          <option className="bg-zinc-900" value="library">Library</option>
          <option className="bg-zinc-900" value="framework">Framework</option>
          <option className="bg-zinc-900" value="backend">Backend</option>
          <option className="bg-zinc-900" value="design">Design</option>
          <option className="bg-zinc-900" value="tool">Tool</option>
          <option className="bg-zinc-900" value="ai">AI</option>
        </select>
      </div>

      {/* --- Skills Grid --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {visibleSkills.map((s) => (
          <div
            key={s.id}
            className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col items-center hover:bg-zinc-800/80 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
              {s.icon}
            </div>
            <h2 className="font-bold text-lg text-white/90">{s.name}</h2>
            <span className="text-[10px] font-medium uppercase tracking-widest text-blue-400/70 mt-1">
              {s.description}
            </span>
          </div>
        ))}
      </div>

      {/* --- Show More Button --- */}
      {filtered.length > limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
        >
          {showAll ? "Collapse List" : "Explore More"}
        </button>
      )}
    </div>
  );
}