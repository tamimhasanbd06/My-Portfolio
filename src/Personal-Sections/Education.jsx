import React, { useState } from "react";
import Madrasa_1 from "../assets/images/unnamed(5).jpg"


const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Premium Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Education
            </span>
          </h2>
          <p className="text-gray-400 mt-3">
            My Academic Journey & Background
          </p>
        </div>

        {/* Card */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center hover:shadow-purple-500/20 transition-all duration-500">

          {/* Text */}
          <div className="md:w-2/3 space-y-5">
            <p className="text-xl font-semibold text-white">
              Class 12 (Kafia - Arabic)
            </p>

            <p className="text-gray-400 leading-relaxed">
              I am currently studying in the <span className="text-white font-medium">Kitab Department</span> at
              <span className="text-white"> Johorpur Al-Fatah Darul Uloom Qawmi Madrasa</span>.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I have completed my entire academic journey from Class 1 to Class 12 at the same institution.
            </p>

            <p className="text-gray-400 leading-relaxed">
              This madrasa has played a vital role in shaping my Islamic knowledge and academic growth.
            </p>

            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">Address:</span> Johorpur, Barpara, Bandar, Narayanganj, Dhaka.
            </p>

            <p>
              Official Number: +880 1789105420 
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/3 w-full">
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={Madrasa_1}
                alt="Madrasah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (50% screen, centered, blurred background) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-2xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] md:w-[50%] max-h-[90%] bg-black border border-gray-700 rounded-2xl shadow-2xl p-2"
          >
            <img
              src={Madrasa_1}
              alt="Preview"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;