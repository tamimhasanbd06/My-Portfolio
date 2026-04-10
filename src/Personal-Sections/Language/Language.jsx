import React from "react";
import { FaGlobeAsia } from "react-icons/fa"; // একটি গ্লোবাল আইকন ব্যবহারের জন্য

const languages = [
  { name: "বাংলা", level: "Native / Mother Tongue", rank: "High", percentage: "100%" },
  { name: "हिंदी", level: "Native / Mother Tongue", rank: "High", percentage: "95%" },
  { name: "English", level: "Advanced Proficiency", rank: "High", percentage: "85%" },
  { name: "اردو", level: "Working Knowledge", rank: "Medium", percentage: "65%" },
  { name: "فارسی", level: "Basic Knowledge", rank: "Low", percentage: "40%" },
  { name: "العربية", level: "Basic Knowledge", rank: "Low", percentage: "35%" },
];

const Language = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      
      {/* --- HEADER (Skills স্টাইলে) --- */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          Languages
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Communication is the key. Here are the languages I can speak and understand.
        </p>
      </header>

      {/* --- GRID (Mobile-First) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-blue-600/10 blur-[50px] group-hover:bg-blue-600/20 transition-all" />

            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <FaGlobeAsia size={24} />
              </div>
              
              {/* Rank Badge */}
              <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                lang.rank === "High" 
                ? "border-green-500/50 text-green-400 bg-green-500/10" 
                : lang.rank === "Medium" 
                ? "border-yellow-500/50 text-yellow-400 bg-yellow-500/10" 
                : "border-blue-500/50 text-blue-400 bg-blue-500/10"
              }`}>
                {lang.rank} Rank
              </span>
            </div>

            {/* Language Info */}
            <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {lang.name}
            </h2>
            <p className="text-sm text-gray-400 mb-6 font-medium">
              {lang.level}
            </p>

            {/* --- SMART PROGRESS BAR --- */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-gray-500">
                <span>Proficiency</span>
                <span className="text-blue-400">{lang.percentage}</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_#3b82f6]"
                  style={{ width: lang.percentage }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Decoration */}
      <div className="mt-20 opacity-20 text-center">
        <p className="text-sm tracking-[10px] uppercase italic">Multilingual Explorer</p>
      </div>

    </section>
  );
};

export default Language;