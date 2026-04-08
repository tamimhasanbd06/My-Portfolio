import React, { useState } from "react";

/* =========================
   ✅ IMPORT SECTION
========================= */
import Introduction from "../Introduction";
import Contact from "../../Component/pages/Contact/Contact";
import Education from "../Education";
import Languages from "../Language";

/* =========================
   ✅ COMPONENT MAP
========================= */
const components = {
  introduction: Introduction,
  contact: Contact,
  education: Education,
  languages: Languages,
};

const Personals = () => {

  const [active, setActive] = useState("introduction");
  const [menuOpen, setMenuOpen] = useState(false);

  const ActiveComponent = components[active];

  const linkStyle = (name) =>
    `cursor-pointer px-3 py-2 text-sm sm:text-base font-medium transition-all duration-300
    ${active === name ? "text-white border-b-2 border-blue-500" : "text-gray-400"}
    hover:text-white`;

  return (
    <div className="bg-black min-h-screen">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center py-3 sm:py-4">

          {/* LOGO */}
          <div className="text-white text-lg sm:text-xl font-bold">
            Portfolio <span className="text-blue-500">Web</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-6">
            <li onClick={() => setActive("introduction")} className={linkStyle("introduction")}>
              Introduction
            </li>
            <li onClick={() => setActive("contact")} className={linkStyle("contact")}>
              Contact
            </li>
            <li onClick={() => setActive("education")} className={linkStyle("education")}>
              Education
            </li>
            <li onClick={() => setActive("languages")} className={linkStyle("languages")}>
              Languages
            </li>
          </ul>

          {/* MOBILE BUTTON */}
          <div className="md:hidden relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-white text-2xl"
            >
              ☰
            </button>

            {/* =========================
                ✅ COMPACT DROPDOWN
            ========================= */}
            {menuOpen && (
              <div className="
                absolute right-0 mt-3
                w-48
                bg-gray-900
                border border-gray-700
                rounded-xl
                shadow-lg
                p-3
                animate-fadeIn
              ">
                <ul className="flex flex-col gap-2">

                  <li onClick={() => { setActive("introduction"); setMenuOpen(false); }} className={linkStyle("introduction")}>
                    Introduction
                  </li>

                  <li onClick={() => { setActive("contact"); setMenuOpen(false); }} className={linkStyle("contact")}>
                    Contact
                  </li>

                  <li onClick={() => { setActive("education"); setMenuOpen(false); }} className={linkStyle("education")}>
                    Education
                  </li>

                  <li onClick={() => { setActive("languages"); setMenuOpen(false); }} className={linkStyle("languages")}>
                    Languages
                  </li>

                </ul>
              </div>
            )}

          </div>

        </div>
      </nav>

      {/* DISPLAY */}
      <div>
        <ActiveComponent />
      </div>

      {/* ANIMATION */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
};

export default Personals;