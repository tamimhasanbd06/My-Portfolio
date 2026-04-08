import React, { useEffect, useState } from "react";
import myImg from "../assets/images/me.jpg";

const Introduction = () => {

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
    <section className="min-h-screen flex items-center bg-black text-white px-4 sm:px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-4 sm:space-y-6 animate-fadeIn text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Tamim Hasan</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            I am Mohammad Tamim Hasan, a Class 12 student of a Qawmi Madrasa.
            I was born on 6 June 2010 and currently I am{" "}
            <span className="text-blue-400 font-semibold">{age} years old</span>.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            I am passionate about coding and I am working hard to become a
            professional Web Developer.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Besides coding, I enjoy reading books which helps me grow my
            knowledge and creativity.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">

            <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg">
              Hire Me
            </button>

            <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-gray-600 hover:border-blue-500 transition rounded-lg">
              Download CV
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">

          <div className="group">

            <img
              src={myImg}
              alt="Tamim Hasan"
              className="
                w-45
                sm:w-55
                md:w-80
                lg:w-100
                xl:w-112.5
                rounded-2xl shadow-2xl
                transform group-hover:scale-105 transition duration-500
              "
            />

          </div>

        </div>

      </div>

      {/* ANIMATION */}
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