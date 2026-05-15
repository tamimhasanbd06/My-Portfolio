import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

  // 🔹 State: Mobile menu open/close control
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 State: Scroll করলে navbar style change করার জন্য
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Ref: Click outside detect করার জন্য (mobile menu close)
  const menuRef = useRef();

  // 🔹 Side Effects: scroll + outside click handle
  useEffect(() => {

    // 👉 Scroll করলে navbar ছোট হবে + shadow আসবে
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    // 👉 Navbar এর বাইরে click করলে mobile menu বন্ধ হবে
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    // 🔹 Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  // 🔹 NavLink style (Active + Hover animation)
  const linkClass = ({ isActive }) =>
    `relative px-2 py-2 text-sm sm:text-base font-medium transition-all duration-300
    ${isActive ? "text-white" : "text-gray-400"}
    hover:text-white
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-blue-500
    after:transition-all after:duration-300
    hover:after:w-full`;

  return (
    <>
      {/* ================= NAVBAR CONTAINER ================= */}
      <nav
        className={`
        sticky top-0 z-50
        bg-black/90 backdrop-blur-md   /* 👉 glass effect */
        ${scrolled ? "py-2 shadow-lg" : "py-3"}  /* 👉 scroll effect */
        border-b border-white/10 transition-all duration-300
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

          {/* ================= LOGO ================= */}
          <div className="text-white text-lg sm:text-xl font-bold">
            Portfolio <span className="text-blue-500">Web</span>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/skill" className={linkClass}>Skill</NavLink></li>
            <li><NavLink to="/project" className={linkClass}>Project</NavLink></li>
            <li><NavLink to="/experience" className={linkClass}>Experience</NavLink></li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>

          {/* ================= HAMBURGER BUTTON (Mobile) ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5"
          >
            {/* 👉 Top Line */}
            <span className={`h-[2px] bg-white transition-all duration-300 
              ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>

            {/* 👉 Middle Line */}
            <span className={`h-[2px] bg-white transition-all duration-300 
              ${isOpen ? "opacity-0" : ""}`}></span>

            {/* 👉 Bottom Line */}
            <span className={`h-[2px] bg-white transition-all duration-300 
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          ref={menuRef}
          className={`
            md:hidden
            absolute left-0 top-full w-full
            bg-black/95 backdrop-blur-lg   /* 👉 glass menu */
            border-t border-white/10
            transition-all duration-300
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
          <ul className="flex flex-col px-6 py-6 gap-5 text-base">

            <NavLink to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              Home
            </NavLink>

            <NavLink to="/skill" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              Skill
            </NavLink>

            <NavLink to="/project" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              Project
            </NavLink>

            <NavLink to="/experience" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              Experience
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              Contact
            </NavLink>

          </ul>
        </div>

      </nav>
    </>
  );
}

export default Navbar;