import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Lockedcontact = () => {
  const contacts = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/tamimhasanbd06",
      color: "hover:text-blue-400",
      glow: "hover:shadow-blue-500/40",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/tamimhasanbd06",
      color: "hover:text-white",
      glow: "hover:shadow-white/20",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/tamim-hasan-th018836/",
      color: "hover:text-cyan-300",
      glow: "hover:shadow-cyan-400/40",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/u/0/#inbox",
      color: "hover:text-pink-300",
      glow: "hover:shadow-pink-500/30",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#000814] overflow-hidden">

      {/* 🌌 Background Glow (LockBanner style match) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000814] to-black" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full animate-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6">

        <h1 className="text-center text-white text-5xl md:text-6xl font-extrabold mb-16">
          Get In <span className="text-cyan-300">Touch</span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`
                group relative flex flex-col items-center justify-center
                h-44 rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-xl
                transition-all duration-300
                hover:scale-110
                hover:border-cyan-400/40
                ${item.glow}
              `}
            >

              {/* Glow behind card */}
              <div className="absolute -inset-6 bg-blue-500/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition" />

              {/* Icon */}
              <div className={`text-4xl mb-3 text-cyan-300 transition ${item.color}`}>
                {item.icon}
              </div>

              {/* Label */}
              <p className="text-white/80 font-semibold tracking-wide">
                {item.name}
              </p>

            </a>
          ))}

        </div>

        {/* Footer line */}
        <p className="text-center text-white/40 mt-16 text-sm">
          Designed with modern neon UI theme ⚡
        </p>

      </div>
    </section>
  );
};

export default Lockedcontact;