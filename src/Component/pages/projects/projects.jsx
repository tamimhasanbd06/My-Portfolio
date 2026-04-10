import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* =========================
   PROJECT DATA
========================= */
const projectsData = [
  {
    id: 1,
    type: "Next.js",
    name: "DigTools",
    image: "https://s2.imgbb.ws/file/storage-sv2/Ds3SZ.png",
    description: "AI tool subscription platform for productivity and creativity.",
    live: "https://digi-tools-2139.vercel.app/",
    code: "https://github.com/tamimhasanbd06/DigiTools",
  },
  {
    id: 2,
    type: "React",
    name: "Crunchyroll",
    image: "https://s1.imgbb.ws/file/storage-sv1/DszEA.png",
    description: "Anime streaming platform with subtitles and dubbed content.",
    live: "#",
    code: "#",
  },
  {
    id: 3,
    type: "React",
    name: "Netflix",
    image: "https://s1.imgbb.ws/file/storage-sv1/D2BYL.png",
    description: "Global streaming platform offering movies, shows and originals.",
    live: "#",
    code: "#",
  },
  {
    id: 4,
    type: "Next.js",
    name: "Disney+",
    image: "https://s1.imgbb.ws/file/storage-sv1/D2nfm.jpg",
    description: "Disney, Marvel, Pixar, Star Wars content streaming service.",
    live: "#",
    code: "#",
  },
  {
    id: 5,
    type: "Normal",
    name: "Amazon",
    image: "https://s2.imgbb.ws/file/storage-sv2/D2BXx.jpg",
    description: "Global e-commerce marketplace with fast delivery and products.",
    live: "#",
    code: "#",
  },
  {
    id: 6,
    type: "Daraz",
    name: "Daraz",
    image: "https://s2.imgbb.ws/file/storage-sv2/D2B2E.png",
    description: "Popular South Asian online shopping platform with deals.",
    live: "#",
    code: "#",
  },
];

/* =========================
   PROJECT CARD
========================= */
const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-blue-500/10">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{project.type}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.name}
        </h2>
        <p className="text-sm text-gray-400 line-clamp-2 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all active:scale-95"
          >
            <FaExternalLinkAlt size={12} /> Live
          </a>
          <a
            href={project.code}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all active:scale-95"
          >
            <FaGithub size={14} /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const Projects = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const filteredProjects = projectsData.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || p.type === filter;
    return matchSearch && matchFilter;
  });

  // Limit logic: Show 6 initially, then all
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      
      {/* HEADER (Matching Skills Style) */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4">
          Project Gallery
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work, side projects, and open-source contributions.
        </p>
      </header>

      {/* SEARCH + DROPDOWN (SCALING UI) */}
      <div className="flex flex-col sm:flex-row w-full max-w-4xl gap-4 mb-12">
        {/* Search Input */}
        <div className="relative flex-1 group">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 group-hover:bg-white/[0.08]"
          />
        </div>

        {/* Scaling Dropdown */}
        <div className="relative w-full sm:w-52 group">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white appearance-none cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 group-hover:bg-white/[0.08]"
          >
            <option className="bg-zinc-900" value="All">All Projects</option>
            <option className="bg-zinc-900" value="Next.js">Next.js</option>
            <option className="bg-zinc-900" value="React">React</option>
            <option className="bg-zinc-900" value="Normal">Normal</option>
          </select>
          {/* Custom Arrow for Dropdown */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 group-hover:text-blue-400 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      {/* GRID */}
      {visibleProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-gray-500 text-center italic">
          No projects matching your search found.
        </div>
      )}

      {/* MORE BUTTON */}
      {filteredProjects.length > 6 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-16 px-10 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold shadow-2xl shadow-blue-500/20 active:scale-95 transition-all"
        >
          {showMore ? "Collapse Gallery" : "View More Projects"}
        </button>
      )}
    </section>
  );
};

export default Projects;