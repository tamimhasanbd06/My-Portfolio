import React, { useState } from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaBookOpen } from "react-icons/fa";
// আপনার ইমেজের পাথটি ঠিক রাখুন
import Madrasa_1 from "../../assets/images/Picture-2026-04-10 14.3h8.28.jpg";

const Education = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // ডাটা এখন Array of Objects এ
  const educationData = [
    {
      id: 1,
      institution: "Johorpur Al-Fatah Darul Uloom Qawmi Madrasa",
      degree: "Class 12 (Kafia - Arabic)",
      department: "Kitab Department",
      duration: "Class 1 to Present",
      address: "Johorpur, Barpara, Bandar, Narayanganj, Dhaka",
      contact: "+880 1789105420",
      description: "I have completed my entire academic journey from Class 1 to Class 12 at the same institution. This madrasa has played a vital role in shaping my Islamic knowledge and academic growth.",
      image: Madrasa_1,
    },
    // আপনি চাইলে এখানে ভবিষ্যতে আরও অবজেক্ট যোগ করতে পারেন
  ];

  return (
    <section className= "max-w[1110px] min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      
      {/* --- HEADER (Skills স্টাইলে) --- */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          Education
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          My academic journey, background, and Islamic knowledge foundation.
        </p>
      </header>

      {/* --- TIMELINE/CARD CONTAINER --- */}
      <div className="w-full max-w-5xl space-y-12">
        {educationData.map((edu) => (
          <div 
            key={edu.id}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.07] flex flex-col md:flex-row gap-10 items-center overflow-hidden"
          >
            {/* Background Glow Decor */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[100px] group-hover:bg-blue-600/20 transition-all" />

            {/* --- TEXT CONTENT (Left Side) --- */}
            <div className="flex-1 space-y-6 z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-blue-400 font-bold tracking-widest text-xs uppercase">
                  <FaGraduationCap size={18} />
                  <span>{edu.duration}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h2>
                <h3 className="text-lg text-gray-300 font-medium">
                  {edu.institution}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                  <FaBookOpen className="mt-1 text-blue-500 shrink-0" />
                  <p>Studying in the <span className="text-blue-300 font-semibold">{edu.department}</span>. {edu.description}</p>
                </div>

                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="mt-1 text-red-500 shrink-0" />
                  <span>{edu.address}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <FaPhoneAlt className="text-green-500 shrink-0" />
                  <span className="font-mono">{edu.contact}</span>
                </div>
              </div>
            </div>

            {/* --- IMAGE DISPLAY (Right Side) --- */}
            <div className="w-full md:w-2/5 z-10">
              <div 
                onClick={() => setSelectedImg(edu.image)}
                className="relative cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-all shadow-2xl"
              >
                <img 
                  src={edu.image} 
                  alt={edu.institution} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/20">
                    Click to Preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- PREVIEW MODAL (Smart UI) --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white hover:text-blue-400 text-3xl transition-colors font-bold"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            <img 
              src={selectedImg} 
              alt="Education Institution" 
              className="w-full h-full object-contain rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            />
          </div>
        </div>
      )}

      {/* Footer Decoration */}
      <div className="mt-20 opacity-20 text-center">
        <p className="text-sm tracking-[8px] uppercase">Always Learning</p>
      </div>
    </section>
  );
};

export default Education;