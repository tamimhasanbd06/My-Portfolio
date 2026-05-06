import React, { useState, useEffect, useMemo } from "react";

/* ICONS */
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaReact, FaGithub, FaCode, FaJsSquare, FaRobot, FaPaintBrush, FaKey } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiFigma, SiOpenai, SiGoogle, SiMeta, SiNetlify, SiVercel, SiTailwindcss, SiMui, SiChartdotjs, SiPerplexity, SiFirebase } from "react-icons/si";
import { TbBrandVite, TbWind, TbAtomOff, TbLock, TbNotebook, TbChartBar } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

/* ================= 37 SKILLS ================= */
const skills = [
  { id: 1, name: "HTML", desc: "Structure", cat: "frontend", icon: <IoLogoHtml5 /> },
  { id: 2, name: "CSS", desc: "Design", cat: "frontend", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", desc: "Logic", cat: "frontend", icon: <FaJsSquare /> },
  { id: 38, name: " TypeScript", desc: "Logic", cat: "frontend", icon: <SiTypescript /> },
  { id: 4, name: "React", desc: "Library", cat: "frontend", icon: <FaReact /> },
  { id: 5, name: "Next.js", desc: "Framework", cat: "framework", icon: <RiNextjsFill /> },

  { id: 6, name: "Node.js", desc: "Backend", cat: "backend", icon: <LiaNode /> },
  { id: 7, name: "Express", desc: "Backend", cat: "backend", icon: <SiExpress /> },
  { id: 8, name: "MongoDB", desc: "Database", cat: "backend", icon: <SiMongodb /> },

  { id: 9, name: "Figma", desc: "Design", cat: "design", icon: <SiFigma /> },
  { id: 10, name: "Tailwind", desc: "Library", cat: "library", icon: <SiTailwindcss /> },

  { id: 11, name: "VS Code", desc: "Tool", cat: "tool", icon: <FaCode /> },
  { id: 12, name: "Vite", desc: "Tool", cat: "tool", icon: <TbBrandVite /> },
  { id: 13, name: "GitHub", desc: "Tool", cat: "tool", icon: <FaGithub /> },
  { id: 14, name: "Vercel", desc: "Tool", cat: "tool", icon: <SiVercel /> },
  { id: 15, name: "Netlify", desc: "Tool", cat: "tool", icon: <SiNetlify /> },

  { id: 16, name: "ChatGPT", desc: "AI", cat: "ai", icon: <SiOpenai /> },
  { id: 17, name: "Gemini", desc: "AI", cat: "ai", icon: <SiGoogle /> },
  { id: 18, name: "Meta AI", desc: "AI", cat: "ai", icon: <SiMeta /> },
  { id: 19, name: "Claude", desc: "AI", cat: "ai", icon: <FaRobot /> },
  { id: 20, name: "DeepSeek", desc: "AI", cat: "ai", icon: <FaRobot /> },

  { id: 21, name: "Copilot", desc: "AI Code", cat: "ai", icon: <FaGithub /> },
  { id: 22, name: "Perplexity", desc: "AI Search", cat: "ai", icon: <SiPerplexity /> },
  { id: 23, name: "DALL·E", desc: "AI Image", cat: "ai", icon: <SiOpenai /> },
  { id: 24, name: "Midjourney", desc: "AI Art", cat: "ai", icon: <FaPaintBrush /> },
  { id: 25, name: "Stable Diffusion", desc: "AI Image", cat: "ai", icon: <FaPaintBrush /> },

  { id: 26, name: "Material UI", desc: "Library", cat: "library", icon: <SiMui /> },
  { id: 27, name: "Chart.js", desc: "Charts", cat: "library", icon: <SiChartdotjs /> },
  { id: 28, name: "Recharts", desc: "Charts", cat: "library", icon: <SiChartdotjs /> },
  { id: 29, name: "ApexCharts", desc: "Charts", cat: "library", icon: <TbChartBar /> },

  { id: 30, name: "Auth System", desc: "Security", cat: "backend", icon: <TbLock /> },
  { id: 31, name: "NextAuth", desc: "Auth", cat: "backend", icon: <FaKey /> },
  { id: 32, name: "Firebase Auth", desc: "Auth", cat: "backend", icon: <SiFirebase /> },

  { id: 33, name: "Markdown Tools", desc: "Docs", cat: "tool", icon: <TbNotebook /> },
  { id: 34, name: "Wind Tools", desc: "Utility", cat: "tool", icon: <TbWind /> },
  { id: 35, name: "Atom Tools", desc: "Physics UI", cat: "tool", icon: <TbAtomOff /> },

  { id: 36, name: "Portfolio UI", desc: "Design System", cat: "design", icon: <FaPaintBrush /> },
  { id: 37, name: "Code Helper", desc: "Dev Tool", cat: "tool", icon: <FaCode /> },
];

/* ================= CUSTOM DROPDOWN ================= */
function Dropdown({ value, setValue }) {
  const [open, setOpen] = useState(false);

  const options = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "library", label: "Library" },
    { value: "framework", label: "Framework" },
    { value: "tool", label: "Tools" },
    { value: "ai", label: "AI" },
    { value: "design", label: "Design" },
  ];

  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative w-full md:w-56">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 rounded-xl
        bg-black border border-white/10 text-white"
      >
        <span>{selected.label}</span>
        <span>⌄</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-black border border-white/10 rounded-xl overflow-hidden z-50">

          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                setValue(opt.value);
                setOpen(false);
              }}
              className={`
                px-4 py-3 text-sm cursor-pointer text-white
                ${opt.value === value ? "bg-white/10" : "hover:bg-white/5"}
              `}
            >
              {opt.label}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

/* ================= MAIN ================= */
export default function Skill() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(20);

  /* RESPONSIVE LIMIT */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setLimit(20);
      else if (w >= 1024) setLimit(15);
      else if (w >= 768) setLimit(12);
      else setLimit(10);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchCat = filter === "all" || s.cat === filter;
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  const visible = showAll ? filtered : filtered.slice(0, limit);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Tech Stack
      </h1>

      {/* SEARCH + DROPDOWN */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 mb-8">

        {/* SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search skills..."
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none text-white"
        />

        {/* DROPDOWN */}
        <Dropdown value={filter} setValue={setFilter} />

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {visible.map((s) => (
          <div
            key={s.id}
            className="p-4 rounded-xl bg-white/5 border border-white/10
            flex flex-col items-center text-center hover:scale-105 transition"
          >
            <div className="text-3xl text-blue-400 mb-2">
              {s.icon}
            </div>
            <h3 className="text-sm font-semibold">{s.name}</h3>
            <p className="text-xs text-gray-400">{s.desc}</p>
          </div>
        ))}

      </div>

      {/* SHOW MORE */}
      {filtered.length > limit && (
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