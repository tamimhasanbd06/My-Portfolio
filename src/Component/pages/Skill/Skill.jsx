import React from "react";

// ICONS (ID অনুযায়ী import)
import { IoLogoHtml5 } from "react-icons/io"; // id: 1
import { FaCss3Alt } from "react-icons/fa6"; // id: 2
import { FaJsSquare } from "react-icons/fa"; // id: 3
import { FaReact } from "react-icons/fa6"; // id: 4
import { LiaNode } from "react-icons/lia"; // id: 5
import { RiNextjsFill } from "react-icons/ri"; // id: 6
import { SiMongodb } from "react-icons/si"; // id: 7
import { SiExpressdotcom } from "react-icons/si"; // id: 8
import { SiLiberadotchat } from "react-icons/si"; // id: 9
import { RiGeminiFill } from "react-icons/ri"; // id: 10
import { BsClaude } from "react-icons/bs"; // id: 11
import { GiSpermWhale } from "react-icons/gi"; // id: 12
import { FaGithub } from "react-icons/fa"; // id: 13
import { FaGithubAlt } from "react-icons/fa"; // id: 14
import { GoCopilot } from "react-icons/go"; // id: 15

const Skill = () => {
  const skills = [
    { id: 1, shortName: "HTML", fullName: "HyperText Markup Language", icon: <IoLogoHtml5 /> },
    { id: 2, shortName: "CSS", fullName: "Cascading Style Sheets", icon: <FaCss3Alt /> },
    { id: 3, shortName: "JS", fullName: "JavaScript", icon: <FaJsSquare /> },
    { id: 4, shortName: "React", fullName: "React Library", icon: <FaReact /> },
    { id: 5, shortName: "Node", fullName: "Node.js Runtime", icon: <LiaNode /> },
    { id: 6, shortName: "Next", fullName: "Next.js Framework", icon: <RiNextjsFill /> },
    { id: 7, shortName: "MongoDB", fullName: "NoSQL Database", icon: <SiMongodb /> },
    { id: 8, shortName: "Express", fullName: "Express.js Framework", icon: <SiExpressdotcom /> },
    { id: 9, shortName: "ChatGPT", fullName: "AI Assistant by OpenAI", icon: <SiLiberadotchat /> },
    { id: 10, shortName: "Gemini", fullName: "AI by Google", icon: <RiGeminiFill /> },
    { id: 11, shortName: "Claude", fullName: "AI by Anthropic", icon: <BsClaude /> },
    { id: 12, shortName: "DeepSeek", fullName: "AI Model", icon: <GiSpermWhale /> },
    { id: 13, shortName: "GitHub", fullName: "Code Hosting Platform", icon: <FaGithub /> },
    { id: 14, shortName: "Git", fullName: "Version Control System", icon: <FaGithubAlt /> },
    { id: 15, shortName: "Copilot", fullName: "GitHub AI Assistant", icon: <GoCopilot /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Skills
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-6 rounded-2xl 
            bg-black/80 border border-white/20 backdrop-blur-md 
            hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 
            transition-all duration-300"
          >
            <div className="text-5xl mb-3 text-blue-400">
              {skill.icon}
            </div>

            <h2 className="text-lg font-bold">{skill.shortName}</h2>

            <p className="text-xs opacity-70 text-center">
              {skill.fullName}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Skill;