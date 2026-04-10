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

  useEffect(() => {
    const handleResize = () => {
      // ৩২০পিক্সেল বা ছোট স্ক্রিনের জন্য লিমিট আরও কমানো হয়েছে
      if (window.innerWidth < 640) {
        setLimit(8); 
      } else if (window.innerWidth < 1024) {
        setLimit(12);
      } else {
        setLimit(20);
      }
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

  const visibleSkills = showAll ? filtered : filtered.slice(0, limit);

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 flex flex-col items-center">

      {/* Header - ৩২০px এর জন্য text সাইজ অপ্টিমাইজড */}
      <header className="mb-10 text-center max-w-full px-2">
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4 leading-tight">
          Tech Stack
        </h1>
        <p className="text-gray-400 text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A curated list of my technical skills and the tools I use daily.
        </p>
      </header>

      {/* Search + Filter - ৩২০px এ এগুলো যেন ভেঙে না যায় তাই flex-col করা হয়েছে */}
      <div className="flex flex-col xs:flex-row w-full max-w-3xl gap-3 mb-10">
        <input
          type="text"
          placeholder="Search skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500 text-sm transition-all"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full xs:w-auto px-3 py-3 rounded-xl bg-zinc-900 border border-white/10 cursor-pointer text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Category</option>
          <option value="web">Web</option>
          <option value="library">Library</option>
          <option value="framework">Framework</option>
          <option value="backend">Backend</option>
          <option value="design">Design</option>
          <option value="tool">Tool</option>
          <option value="ai">AI</option>
        </select>
      </div>

      {/* GRID - ছোট স্ক্রিনে (৩২০px) ২ কলাম এবং গ্যাপ কমানো হয়েছে */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 w-full max-w-6xl px-2">
        {visibleSkills.map((s) => (
          <div
            key={s.id}
            className="group p-3 xs:p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col items-center hover:bg-zinc-800/80 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-all duration-300">
              {s.icon}
            </div>

            <h2 className="font-bold text-xs sm:text-base md:text-lg text-white/90 text-center truncate w-full">
              {s.name}
            </h2>

            <span className="text-[9px] sm:text-xs font-medium uppercase tracking-tighter sm:tracking-widest text-blue-400/70 mt-1">
              {s.description}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      {filtered.length > limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-sm sm:text-base active:scale-95 transition-all shadow-lg shadow-blue-900/20"
        >
          {showAll ? "Collapse List" : "Explore More"}
        </button>
      )}
    </div>
  );
}