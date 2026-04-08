import React, { useEffect, useState } from "react";
import myImg from "../assets/images/me.jpg";

const Introduction = () => {

  /* =========================
     🔥 AUTO AGE CALCULATION
  ========================= */
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date("2010-06-06");
      const today = new Date();

      let calculatedAge = today.getFullYear() - birthDate.getFullYear();

      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    };

    calculateAge();

    const interval = setInterval(calculateAge, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-black text-white px-6 md:px-12">

      {/* =========================
          🔥 MAIN CONTAINER
      ========================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* =========================
            🔥 LEFT CONTENT
        ========================= */}
        <div className="space-y-6 animate-fadeIn">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Tamim Hasan</span>
          </h1>

          <p className="text-gray-300 text-lg">
            I am Mohammad Tamim Hasan, a Class 12 student of a Qawmi Madrasa.
            I was born on 6 June 2010 and currently I am{" "}
            <span className="text-blue-400 font-semibold">{age} years old</span>.
          </p>

          <p className="text-gray-400">
            I am passionate about coding and I am working hard to become a
            professional Web Developer.
          </p>

          <p className="text-gray-400">
            Besides coding, I enjoy reading books which helps me grow my
            knowledge and creativity.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg">
              Hire Me
            </button>

            <button className="px-6 py-3 border border-gray-600 hover:border-blue-500 transition rounded-lg">
              Download CV
            </button>
          </div>

        </div>

        {/* =========================
            🔥 RIGHT IMAGE
        ========================= */}
        <div className="flex justify-center md:justify-end">

          <div className="group">

            {/* ✅ IMAGE (NO OVERLAY NOW) */}
            <img
              src={myImg}
              alt="Tamim Hasan"
              className="w-[300px] md:w-[450px] rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

      {/* =========================
          🔥 CUSTOM ANIMATION
      ========================= */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </section>
  );
};

export default Introduction;