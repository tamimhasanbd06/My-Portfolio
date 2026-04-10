import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding } from "react-icons/fa";

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
    description:
      "Leading scalable frontend architecture and mentoring developers.",
    year: 2018,
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Apps Ltd.",
    duration: "2015 - 2017",
    description:
      "Built responsive UI and improved UX for multiple clients.",
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

      {/* HEADER (Companies LEFT + Dropdown RIGHT) */}
      <div className="flex justify-between items-center mb-8">

        {/* LEFT TEXT */}
        <h2 className="text-blue-400 text-lg sm:text-2xl font-extrabold tracking-wide">
          Companies
        </h2>

        {/* DROPDOWN RIGHT */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-[#111] border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
        >
          {config.filterYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

      </div>

      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            {typedText}
          </span>
        </h1>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="max-w-4xl mx-auto space-y-6 border-l border-gray-800 pl-4 sm:pl-6">

        {filteredData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: config.animation.duration,
              delay: index * config.animation.delayStep,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* DOT */}
            <div className="absolute -left-3 top-4 w-3 h-3 bg-purple-500 rounded-full"></div>

            {/* CARD */}
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">

              {/* ROLE */}
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-purple-400" />
                <h2 className="text-lg sm:text-xl font-semibold">
                  {exp.role}
                </h2>
              </div>

              {/* COMPANY */}
              <div className="flex items-center gap-2 mt-2 text-purple-400 text-sm">
                <FaBuilding />
                {exp.company}
              </div>

              {/* DATE */}
              <p className="text-gray-500 text-xs mt-1">
                {exp.duration}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
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