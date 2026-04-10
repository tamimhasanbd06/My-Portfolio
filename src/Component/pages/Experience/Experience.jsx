import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaChevronDown } from "react-icons/fa";

/* =========================
   CONFIG (EDIT FROM HERE)
========================= */
const config = {
  typing: {
    text: "Experience",
    speed: 100,
  },
  animation: {
    duration: 0.4,
    delayStep: 0.2,
  },
  filterYears: ["All", "2020", "2018", "2015"],
};

/* =========================
   EXPERIENCE DATA
========================= */
const experienceData = [
  {
    id: 1,
    role: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    duration: "2018 - Present",
    description: "Leading scalable frontend architecture and mentoring developers.",
    year: 2018,
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Apps Ltd.",
    duration: "2015 - 2017",
    description: "Built responsive UI and improved UX for multiple clients.",
    year: 2015,
  },
];

/* =========================
   CUSTOM HOOK (Typing)
========================= */
const useTyping = ({ text, speed }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
};

/* =========================
   MAIN COMPONENT
========================= */
const Experience = () => {
  const typedText = useTyping(config.typing);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? experienceData
      : experienceData.filter((exp) => exp.year >= Number(filter));

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6">
      
      {/* 1. STEEP ALIGNED HEADER (Synced with Card Width) */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex justify-between items-end border-b border-gray-800 pb-4">
          
          {/* LEFT TEXT */}
          <div className="flex flex-col">
            <span className="text-purple-500 text-xs font-bold uppercase tracking-widest mb-1">Scale</span>
            <h2 className="text-blue-400 text-xl sm:text-3xl font-extrabold tracking-tight">
              Companies
            </h2>
          </div>

          {/* DROPDOWN RIGHT (Custom Styled) */}
          <div className="relative group">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-[#111] border border-gray-700 text-white pl-4 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm font-medium cursor-pointer transition-all hover:border-gray-500"
            >
              {config.filterYears.map((year) => (
                <option key={year} value={year}>
                  Year: {year}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none group-hover:text-white transition-colors text-xs" />
          </div>

        </div>
      </div>

      {/* 2. TITLE SECTION */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-black">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            {typedText}
          </span>
        </h1>
      </div>

      {/* 3. EXPERIENCE LIST (The Cards) */}
      <div className="max-w-4xl mx-auto space-y-8 relative">
        
        {/* Timeline Vertical Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>

        {filteredData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: config.animation.duration,
              delay: index * config.animation.delayStep,
            }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* STEEP DOT */}
            <div className="absolute left-0 top-6 w-6 h-6 bg-black border-4 border-purple-500 rounded-full z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

            {/* CARD */}
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <FaBriefcase className="text-purple-400 text-lg" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-gray-400 font-medium">
                    <FaBuilding className="text-purple-500/70" />
                    <span>{exp.company}</span>
                    <span className="mx-2 text-gray-700">|</span>
                    <span className="text-xs text-gray-500 uppercase tracking-tighter">{exp.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-base mt-5 leading-relaxed max-w-2xl border-t border-gray-800/50 pt-5">
                {exp.description}
              </p>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;