import React, { useState } from "react";
import {
  FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt,
  FaVideo, FaLinkedin, FaFacebook, FaCopy, FaCheck
} from "react-icons/fa";
import { BsDiscord, BsTelegram } from "react-icons/bs";

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);

  const contactData = [
    {
      id: 1,
      category: "Contact",
      label: "Phone",
      copyText: "+8801883650010",
      href: "tel:+8801883650010",
      icon: <FaPhone />,
    },
    {
      id: 2,
      category: "Contact",
      label: "WhatsApp",
      copyText: "+8801883650010",
      href: "https://wa.me/8801883650010",
      icon: <FaWhatsapp />,
    },
    {
      id: 3,
      category: "Contact",
      label: "Email",
      copyText: "tamimhasanbd06@gmail.com",
      href: "mailto:tamimhasanbd06@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      id: 4,
      category: "Contact",
      label: "Location",
      copyText: "Dhaka, Bangladesh",
      href: "https://maps.google.com",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 5,
      category: "Contact",
      label: "IMO",
      copyText: "+8801883650010",
      href: "tel:+8801883650010",
      icon: <FaVideo />,
    },
    {
      id: 6,
      category: "Social",
      label: "LinkedIn",
      copyText: "https://www.linkedin.com/in/tamim-hasan-th018836/",
      href: "https://www.linkedin.com/in/tamim-hasan-th018836/",
      icon: <FaLinkedin />,
    },
    {
      id: 7,
      category: "Social",
      label: "Facebook",
      copyText: "https://www.facebook.com/tamimhasanbd06",
      href: "https://www.facebook.com/tamimhasanbd06",
      icon: <FaFacebook />,
    },
    {
      id: 8,
      category: "Social",
      label: "Discord",
      copyText: "Tamim#1234",
      href: "https://discord.com",
      icon: <BsDiscord />,
    },
    {
      id: 9,
      category: "Social",
      label: "Telegram",
      copyText: "https://t.me/tamimhasan",
      href: "https://t.me/tamimhasan",
      icon: <BsTelegram />,
    },
  ];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const renderCards = (category) => (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-sm sm:text-base font-bold text-blue-400/80 uppercase tracking-widest px-2">
        {category}
      </h2>

      {contactData
        .filter((item) => item.category === category)
        .map((item) => (
          <div
            key={item.id}
            className="
              group relative flex items-center justify-between
              p-3 sm:p-4 rounded-xl
              bg-white/5 border border-white/10
              hover:bg-white/10 hover:border-blue-500/40
              transition-all duration-300
              hover:scale-[1.01]
            "
          >
            {/* LEFT SIDE (ICON ONLY) */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-grow"
            >
              <div className="
                text-xl sm:text-2xl
                p-2 sm:p-3 rounded-lg
                bg-white/5
                group-hover:scale-110 transition
              ">
                {item.icon}
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-300">
                {item.label}
              </p>
            </a>

            {/* COPY BUTTON ONLY */}
            <button
              onClick={() => handleCopy(item.copyText, item.id)}
              className="
                p-2 sm:p-3 rounded-lg
                bg-white/5 hover:bg-blue-500/20
                border border-transparent hover:border-blue-500/30
                transition
                active:scale-90
              "
            >
              {copiedId === item.id ? (
                <FaCheck className="text-green-400 text-sm sm:text-base" />
              ) : (
                <FaCopy className="text-gray-400 text-sm sm:text-base" />
              )}
            </button>
          </div>
        ))}
    </div>
  );

  return (
    <div className="
      min-h-screen bg-black text-white
      py-16 sm:py-20 px-4 sm:px-6
      flex flex-col items-center
    ">
      {/* HEADER */}
      <header className="mb-10 sm:mb-16 text-center">
        <h1 className="
          text-3xl sm:text-5xl md:text-7xl font-black
          bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
          bg-clip-text text-transparent
        ">
          Get In Touch
        </h1>

        <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto mt-3">
          Click any item to explore or copy instantly
        </p>
      </header>

      {/* GRID */}
      <div className="
        w-full max-w-6xl
        grid grid-cols-1 md:grid-cols-2
        gap-6 sm:gap-12
      ">
        {renderCards("Contact")}
        {renderCards("Social")}
      </div>

      {/* FOOTER TEXT */}
      <div className="mt-16 sm:mt-20 opacity-30 text-center">
        <p className="text-xs sm:text-sm tracking-[6px] sm:tracking-[10px] uppercase">
          Available for Work
        </p>
      </div>
    </div>
  );
};

export default Contact;