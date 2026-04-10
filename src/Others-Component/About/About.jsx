import React, { useState } from "react";

const content = {
  en: {
    title: "About Me",
    role: "Content Developer • Future Full Stack Engineer",
    intro:
      "My name is Mohammad Tamim Hasan. I am a passionate web developer focused on building modern, scalable, and intelligent web applications.",
    education:
      "I study under the Bangladesh education board at Johorpur Al-Fa Darul Ulum Kamil Madrasa & Orphanage. Currently in class 12.",
    skills:
      "HTML, CSS, JavaScript, React, Next.js, MongoDB, Express, Tailwind CSS, Vite, React Router, AI tools & modern libraries.",
    experience:
      "I am not currently working in a company, but I have built several advanced real-world projects through my Programming Hero journey.",
    goal:
      "My goal is to become a Full Stack Developer and build an AI assistant that can control devices using voice commands.",
  },

  bn: {
    title: "আমার সম্পর্কে",
    role: "কনটেন্ট ডেভেলপার • ভবিষ্যৎ ফুল স্ট্যাক ইঞ্জিনিয়ার",
    intro:
      "আমার নাম মোহাম্মদ তামিম হাসান। আমি একজন ওয়েব ডেভেলপার, যিনি আধুনিক এবং শক্তিশালী ওয়েব অ্যাপ তৈরি করতে আগ্রহী।",
    education:
      "আমি বাংলাদেশ শিক্ষা বোর্ডের অধীনে জহরপুর আল-ফা দারুল উলুম কামিল মাদ্রাসা ও এতিমখানায় পড়াশোনা করছি। বর্তমানে দ্বাদশ শ্রেণিতে আছি।",
    skills:
      "HTML, CSS, JavaScript, React, Next.js, MongoDB, Express, Tailwind CSS, Vite, React Router, AI tools ও আধুনিক লাইব্রেরি।",
    experience:
      "আমি বর্তমানে কোনো কোম্পানিতে কাজ করছি না, তবে Programming Hero কোর্সের মাধ্যমে অনেক উন্নত প্রজেক্ট তৈরি করেছি।",
    goal:
      "আমার লক্ষ্য একজন ফুল স্ট্যাক ডেভেলপার হওয়া এবং ভয়েস কন্ট্রোলড AI অ্যাসিস্ট্যান্ট তৈরি করা।",
  },
};

const About = () => {
  const [lang, setLang] = useState("en");
  const [expanded, setExpanded] = useState(false);

  const data = content[lang];

  const fullText = `
${data.intro}

${data.education}

${data.skills}

${data.experience}

${data.goal}
  `.trim();

  const lines = fullText.split("\n").filter(Boolean);
  const visibleLines = expanded ? lines : lines.slice(0, 15);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-[#0b0b1a] to-black px-4 py-10">

      {/* CARD */}
      <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 
        bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,255,0.15)] p-6 sm:p-10">

        {/* GLOW */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-2xl -z-10"></div>

        {/* TITLE */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {data.title}
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-400">
            {data.role}
          </p>
        </div>

        {/* TOGGLE (RESPONSIVE POSITION) */}
        <div
          className="
            flex items-center gap-2 justify-center mt-4
            md:absolute md:top-5 md:left-5 md:mt-0 md:justify-start
          "
        >
          <span className="text-xs text-gray-400">BN</span>

          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300
              ${lang === "bn" ? "bg-purple-600" : "bg-gray-700"}`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300
                ${lang === "bn" ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>

          <span className="text-xs text-gray-400">EN</span>
        </div>

        {/* CONTENT */}
        <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-7 mt-6">
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              {line}
            </div>
          ))}
        </div>

        {/* MORE BUTTON */}
        {lines.length > 15 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 
              text-white font-medium shadow-lg hover:scale-105 transition"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;