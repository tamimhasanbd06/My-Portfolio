import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* =========================
   PROJECT DATA
========================= */
const projectsData = [
  {
    id: 1,
    type: "React",
    name: "DigTools",
    image: "https://s2.imgbb.ws/file/storage-sv2/Ds3SZ.png",
    description: "AI tool subscription platform for productivity and creativity.",
    live: "https://digi-tools-xi.vercel.app/",
    code: "https://github.com/tamimhasanbd06/DigiTools",
  },
  {
    id: 2,
    type: "React",
    name: " Bank loon",
    image: "https://s1.imgbb.ws/file/storage-sv1/Kv3Xp.png",
    description: "A bank loan website is a digital platform where users can easily check loan options, apply online, and manage repayments in a simple and convenient way.",
    live: "https://bank-loan-calculator.vercel.app/",
    code: "https://github.com/tamimhasanbd06/Bank-Loan-Calculator",
  },
  {
    id: 3,
    type: "React",
    name: "Keen Keeper",
    image: "https://s2.imgbb.ws/file/storage-sv2/KzGFS.png",
    description: "This app allows instant audio, video, and text communication. Users can make voice and video calls, send instant text messages, and all data is securely encrypted, ensuring privacy and safety in every conversation.",
    live: "https://keen-keeper-tawny.vercel.app/",
    code: "https://github.com/tamimhasanbd06/Keen-Keeper",
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
    type: "Normal",
    name: "Daraz",
    image: "https://s2.imgbb.ws/file/storage-sv2/D2B2E.png",
    description: "Popular South Asian online shopping platform with deals.",
    live: "#",
    code: "#",
  },
];

/* =========================
   CARD
========================= */
const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-lg">

      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-3 right-3 bg-black/80 px-2 py-1 rounded-full border border-white/10">
          <span className="text-blue-400 text-[10px] font-bold uppercase">
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold group-hover:text-blue-400 transition">
          {project.name}
        </h2>

        <p className="text-xs text-gray-400 mt-2 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-500 rounded-xl transition"
          >
            <FaExternalLinkAlt /> Live
          </a>

          <a
            href={project.code}
            className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
};

/* =========================
   MAIN
========================= */
export default function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const filteredProjects = projectsData.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || p.type === filter;
    return matchSearch && matchFilter;
  });

  const visibleProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center">

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-10">
        Project Gallery
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl mb-10">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
        />

        {/* CUSTOM DROPDOWN */}
        <div className="relative w-full sm:w-56">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="
              w-full px-5 py-3 pr-10
              rounded-2xl
              bg-black/90
              border border-white/10
              text-white text-sm
              appearance-none cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
              hover:bg-black
              transition
            "
          >
            <option value="All">All Projects</option>
            <option value="Next.js">Next.js</option>
            <option value="React">React</option>
            <option value="Normal">Normal</option>
          </select>

          {/* arrow */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </div>

      {/* GRID */}
      {visibleProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-20">No projects found</p>
      )}

      {/* MORE BUTTON */}
      {filteredProjects.length > 6 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-12 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold hover:scale-105 transition"
        >
          {showMore ? "Show Less" : "View More Projects"}
        </button>
      )}

    </section>
  );
}