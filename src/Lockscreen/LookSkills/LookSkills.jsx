import React from "react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    full: "JavaScript Programming Language",
    icon: <FaJsSquare />,
  },
  {
    name: "TypeScript",
    full: "Type-safe JavaScript at scale",
    icon: <SiTypescript />,
  },
  {
    name: "Next.js",
    full: "Production-ready React framework",
    icon: <SiNextdotjs />,
  },
  {
    name: "React",
    full: "Modern UI library for web apps",
    icon: <FaReact />,
  },
];

const LookSkills = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">

      {/* 🌌 SAME BACKGROUND AS LOCK BANNER */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000814] to-black" />

      {/* BLUE GLOW EFFECTS (LOCK BANNER STYLE) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-center text-5xl md:text-7xl font-extrabold mb-16">
          My <span className="text-cyan-300">Skills</span>
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                relative w-full max-w-[240px] h-[340px]
                flex flex-col items-center justify-center text-center
                rounded-3xl bg-white/5 backdrop-blur-xl
                border border-white/10 shadow-2xl

                transition-all duration-300
                hover:scale-110
                hover:border-cyan-400/40
              "
            >

              {/* CARD GLOW (same LockBanner style behind image) */}
              <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-3xl opacity-70" />

              {/* ICON */}
              <div className="text-6xl mb-5 z-10 text-cyan-300">
                {skill.icon}
              </div>

              {/* NAME */}
              <h2 className="text-2xl font-bold z-10">
                {skill.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm text-white/60 px-4 mt-2 z-10">
                {skill.full}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LookSkills;