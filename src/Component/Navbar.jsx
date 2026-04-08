import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm sm:text-base font-medium transition-all duration-300
    ${isActive ? "text-white" : "text-gray-400"}
    hover:text-white
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0 after:bg-blue-500
    after:transition-all after:duration-300
    hover:after:w-full`;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
        sticky top-0 z-50
        bg-black
        ${scrolled ? "py-2 shadow-lg" : "py-4"}
        border-b border-gray-800 transition-all duration-300
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

          {/* LOGO */}
          <div className="text-white text-lg sm:text-xl font-bold">
            Portfolio <span className="text-blue-500">Web</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">

            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>

            <li><NavLink to="/skill" className={linkClass}>Skill</NavLink></li>

            {/* ✅ NEW PROJECT LINK */}
            <li><NavLink to="/project" className={linkClass}>Project</NavLink></li>

            <li><NavLink to="/experience" className={linkClass}>Experience</NavLink></li>

            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>

          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl relative w-8 h-8 flex items-center justify-center"
          >
            <span className={`absolute transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`}>—</span>
            <span className={`absolute transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}>—</span>
            <span className={`absolute transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`}>—</span>
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            ref={menuRef}
            className="
              md:hidden
              absolute right-4 mt-2
              w-52
              bg-black
              border border-gray-800
              rounded-xl
              shadow-xl
              p-4
              animate-fadeIn
            "
          >
            <ul className="flex flex-col gap-3 text-sm">

              <NavLink to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                Home
              </NavLink>

              <NavLink to="/skill" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                Skill
              </NavLink>

              {/* ✅ NEW PROJECT LINK */}
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
        )}
      </nav>

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
    </>
  );
}

export default Navbar;