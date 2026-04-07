import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect (Navbar shrink + sticky feel)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300
    ${isActive ? "text-white" : "text-gray-400"}
    hover:text-white
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-0 after:bg-blue-500
    after:transition-all after:duration-300
    hover:after:w-full`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "py-2 bg-black/95 shadow-lg" : "py-5 bg-black/80"}
      backdrop-blur-md border-b border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wide">
          Portfolio <span className="text-blue-500"> Web </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          <li><NavLink to="/experience" className={linkClass}>Experience</NavLink></li>
          <li><NavLink to="/skill" className={linkClass}>Skill</NavLink></li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-black/95 border border-gray-800 rounded-xl shadow-xl px-6 py-4 w-auto min-w-[180px] backdrop-blur-md">
          <ul className="flex flex-col space-y-4">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Home</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Contact</NavLink>
            <NavLink to="/experience" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Experience</NavLink>
            <NavLink to="/skill" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Skill</NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;