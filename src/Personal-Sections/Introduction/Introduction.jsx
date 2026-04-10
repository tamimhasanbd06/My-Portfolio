import React, { useEffect, useState } from "react";
import myImg from "../../assets/images/me.jpg";

const Introduction = () => {
  const [age, setAge] = useState(0);

  const [isEnglish, setIsEnglish] = useState(() => {
    const saved = localStorage.getItem("lang");
    return saved ? saved === "en" : true;
  });

  // ================= AGE CALCULATION =================
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2010-06-06");
      const today = new Date();

      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000);
    return () => clearInterval(interval);
  }, []);

  // ================= SAVE LANGUAGE =================
  useEffect(() => {
    localStorage.setItem("lang", isEnglish ? "en" : "bn");
  }, [isEnglish]);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16">

      {/* ================= LANGUAGE TOGGLE ================= */}
      <div className="flex justify-end mb-6 ">
        <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-md px-3 py-2 rounded-full shadow-md">

          <span className={`text-xs sm:text-sm ${isEnglish ? "text-blue-400 font-semibold" : "text-gray-500"}`}>
            EN
          </span>

          <div
            onClick={() => setIsEnglish(!isEnglish)}
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${
              isEnglish ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ${
                isEnglish ? "translate-x-0" : "translate-x-7"
              }`}
            />
          </div>

          <span className={`text-xs sm:text-sm ${!isEnglish ? "text-green-400 font-semibold" : "text-gray-500"}`}>
            বাংলা
          </span>

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">

        {/* ================= TEXT ================= */}
        <div className="text-center md:text-left space-y-5">

          {/* Greeting (Same in both languages) */}
          <h2 className="text-lg sm:text-xl text-gray-400">
            Assalamu Alaikum
          </h2>

          {/* Name Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {isEnglish ? (
              <>I'm <span className="text-blue-500">Tamim Hasan</span></>
            ) : (
              <>আমি <span className="text-blue-500">তামিম হাসান</span></>
            )}
          </h1>

          {/* Professional Intro */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {isEnglish ? (
              <>
                A passionate and dedicated <span className="text-blue-400 font-semibold">Frontend Web Developer</span> currently studying in Class 12 at a Qawmi Madrasa.
                Born on 6 June 2010, I am{" "}
                <span className="text-blue-400 font-semibold">{age} years old</span>.
                I specialize in building modern, clean, and user-focused web interfaces.
              </>
            ) : (
              <>
                একজন উদ্যমী ও নিষ্ঠাবান <span className="text-blue-400 font-semibold">ফ্রন্টএন্ড ওয়েব ডেভেলপার</span> এবং কওমি মাদ্রাসার দ্বাদশ শ্রেণির ছাত্র।
                আমার জন্ম ৬ জুন ২০১০ সালে, বর্তমানে আমার বয়স{" "}
                <span className="text-blue-400 font-semibold">{age} বছর</span>।
                আমি আধুনিক, পরিষ্কার এবং ইউজার-ফ্রেন্ডলি ওয়েব ইন্টারফেস তৈরি করতে দক্ষ।
              </>
            )}
          </p>

          {/* Skills */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {isEnglish
              ? "I continuously sharpen my skills in React, Tailwind CSS, and modern JavaScript to build scalable and high-quality applications."
              : "আমি নিয়মিত React, Tailwind CSS এবং আধুনিক JavaScript শিখে নিজের স্কিল উন্নত করি, যাতে স্কেলেবল ও উচ্চমানের অ্যাপ্লিকেশন তৈরি করতে পারি।"}
          </p>

          {/* Personal Growth */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {isEnglish
              ? "Beyond development, I focus on creativity, problem-solving, and continuous learning to grow as a professional developer."
              : "ডেভেলপমেন্টের পাশাপাশি আমি সৃজনশীলতা, সমস্যা সমাধান এবং নিয়মিত শেখার মাধ্যমে একজন প্রফেশনাল ডেভেলপার হিসেবে নিজেকে গড়ে তুলছি।"}
          </p>

        </div>

        {/* ================= IMAGE ================= */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-2xl opacity-70 group-hover:opacity-100 transition"></div>

            {/* Image */}
            <img
              src={myImg}
              alt="Tamim Hasan"
              className="
                relative
                w-44 sm:w-52 md:w-72 lg:w-80 xl:w-96
                rounded-2xl shadow-2xl
                transform group-hover:scale-105 transition duration-500
              "
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;