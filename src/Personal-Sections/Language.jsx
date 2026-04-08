import React from "react";

const languages = [
  { name: "বাংলা", level: "Native / Mother Tongue", rank: "High" },
  { name: "हिंदी", level: "Native / Mother Tongue", rank: "High" },
  { name: "English", level: "Advanced", rank: "High" },
  { name: "اردو", level: "Working Knowledge", rank: "Medium" },
  { name: "فارسی", level: "Basic Knowledge", rank: "Low" },
  { name: "العربية", level: "Basic Knowledge", rank: "Low" },
];

const Language = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Languages
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          I can speak and understand these languages with different levels of proficiency
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

        {languages.map((lang, index) => (
          <div
            key={index}
            className="relative p-6 border border-gray-700 rounded-2xl backdrop-blur-lg bg-white/5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >

            {/* Rank Badge */}
            <span className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full font-semibold ${
              lang.rank === "High"
                ? "bg-green-500"
                : lang.rank === "Medium"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}>
              {lang.rank}
            </span>

            {/* Language Name */}
            <h2 className="text-2xl font-bold mb-2">
              {lang.name}
            </h2>

            {/* Level */}
            <p className="text-gray-300">
              {lang.level}
            </p>

            {/* Progress Bar */}
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  lang.rank === "High"
                    ? "w-full bg-green-500"
                    : lang.rank === "Medium"
                    ? "w-3/4 bg-yellow-500"
                    : "w-1/2 bg-red-500"
                }`}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Language;