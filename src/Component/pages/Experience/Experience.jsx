import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

/* =========================
   CONFIG
========================= */
const config = {
  typing: {
    text: "Experience",
    speed: 100,
  },
  animation: {
    duration: 0.5,
    delayStep: 0.15,
  },
};

/* =========================
   EXPERIENCE DATA
========================= */
const experienceData = [
  {
    id: 1,
    jobTitle: "Internship Developer",
    position: "Junior Developer",
    company: "Ionic Corporation",
    startDate: "2026",
    endDate: "Present",
    description:
      "I am a junior web developer intern at Ionic Corporation, focusing on frontend development and building responsive user interfaces.",
    year: 2026,
  },
  
];

/* =========================
   TYPING EFFECT
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

  return (
    <section className="bg-black text-white min-h-screen py-10 sm:py-16 px-3 sm:px-6 overflow-hidden min-w-[310px]">

      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <div className="border-b border-gray-800 pb-6">

         

            

          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black break-words leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {typedText}
            </span>
          </h1>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="relative space-y-8 sm:space-y-10">

          {/* TIMELINE LINE */}
          <div className="absolute left-[10px] sm:left-[14px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/60 to-transparent"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: config.animation.duration,
                delay: index * config.animation.delayStep,
              }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-12"
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-0 top-8 sm:top-10 w-5 h-5 sm:w-7 sm:h-7 bg-black border-4 border-purple-500 rounded-full z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>

              {/* CARD */}
              <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-5 sm:p-8 lg:p-10 hover:border-purple-500/50 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] transition-all duration-500 group">

                {/* TOP SECTION */}
                <div className="flex flex-col gap-6">

                  {/* JOB TITLE */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-all">
                      <FaBriefcase className="text-purple-400 text-lg sm:text-xl" />
                    </div>

                    <h2 className="text-xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {exp.jobTitle}
                    </h2>
                  </div>

                  {/* INFO GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-sm sm:text-base">

                    {/* COMPANY */}
                    <div className="flex items-center gap-3">
                      <FaBuilding className="text-purple-500/70 flex-shrink-0" />
                      <span>{exp.company}</span>
                    </div>

                    {/* POSITION */}
                    <div className="flex items-center gap-3">
                      <FaUserTie className="text-pink-500/70 flex-shrink-0" />
                      <span>{exp.position}</span>
                    </div>

                    {/* START */}
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-green-400 flex-shrink-0" />
                      <span>Start: {exp.startDate}</span>
                    </div>

                    {/* END */}
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-red-400 flex-shrink-0" />
                      <span>End: {exp.endDate}</span>
                    </div>

                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-8 pt-6 border-t border-gray-800/60">
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;