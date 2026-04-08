import React, { useState } from "react";

/* =========================
   ✅ IMPORT SECTION
========================= */
import Introduction from "../Introduction";
import Contact from "../../Component/pages/Contact/Contact";
import Education from "../Education";
import Languages from "../Language";

/* =========================
   ✅ COMPONENT MAP (🔥 VERY IMPORTANT)
   👉 এখানে component register করা হয়
========================= */
const components = {
  introduction: Introduction,
  contact: Contact,
  education: Education,
  languages: Languages,
};

const Personals = () => {

  // ✅ Default component
  const [active, setActive] = useState("introduction");

  /* =========================
     ✅ Dynamic Component Picker
  ========================= */
  const ActiveComponent = components[active];

  /* =========================
     ✅ NAV STYLE
  ========================= */
  const linkStyle = (name) =>
    `cursor-pointer px-3 py-2 text-sm font-medium transition-all duration-300
    ${active === name ? "text-white border-b-2 border-blue-500" : "text-gray-400"}
    hover:text-white`;

  return (
    <div className="bg-black min-h-screen">

      {/* =========================
          ✅ NAVBAR
      ========================= */}
      <nav className="sticky top-0 z-50 bg-black/90 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

          <div className="text-white text-xl font-bold">
            Portfolio <span className="text-blue-500">Web</span>
          </div>

          {/* =========================
              ✅ NAV LINKS
              👉 এখানে শুধু name change করলেই কাজ করবে
          ========================= */}
          <ul className="flex space-x-6">

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
        </div>
      </nav>

      {/* =========================
          ✅ DISPLAY AREA (🔥 MAIN)
      ========================= */}
      <div>
        <ActiveComponent />   {/* 🔥 এখানে auto component render হবে */}
      </div>

    </div>
  );
};

export default Personals;