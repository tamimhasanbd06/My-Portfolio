import React, { useState } from "react";
import {
  FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt,
  FaVideo, FaLinkedin, FaFacebook, FaCopy, FaCheck
} from "react-icons/fa";
import { BsDiscord, BsTelegram } from "react-icons/bs";

const Contact = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [toast, setToast] = useState("");

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
    setToast("Copied Successfully ✔");

    setTimeout(() => {
      setCopiedId(null);
      setToast("");
    }, 1500);
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
              hover:bg-white/10 hover:border-cyan-400/50
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10
              active:scale-[0.98]
            "
          >

            {/* LEFT SIDE */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-grow"
            >
              <div className="
                text-xl sm:text-2xl text-cyan-400
                p-2 sm:p-3 rounded-lg
                bg-white/5
                group-hover:text-blue-300
                group-hover:scale-125 group-hover:rotate-3
                transition-all duration-300
                drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]
              ">
                {item.icon}
              </div>

              <p className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition">
                {item.label}
              </p>
            </a>

            {/* COPY BUTTON */}
            <button
              onClick={() => handleCopy(item.copyText, item.id)}
              className="
                relative p-2 sm:p-3 rounded-lg
                bg-white/5 hover:bg-cyan-500/20
                border border-transparent hover:border-cyan-400/40
                transition
                overflow-hidden
              "
            >
              {/* ripple */}
              <span className="absolute inset-0 scale-0 group-active:scale-100 bg-cyan-400/20 rounded-full transition"></span>

              {copiedId === item.id ? (
                <FaCheck className="text-green-400 text-sm sm:text-base animate-pulse" />
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
      flex flex-col items-center relative
      overflow-hidden
    ">

      {/* Glow BG */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full top-[-100px] left-[-100px]" />

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

      {/* FOOTER */}
      <div className="mt-16 sm:mt-20 opacity-40 text-center">
        <p className="text-xs sm:text-sm tracking-[8px] uppercase">
          Available for Work
        </p>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="
          fixed bottom-6 left-1/2 -translate-x-1/2
          bg-cyan-500/20 border border-cyan-400/30
          text-cyan-200 px-5 py-2 rounded-full
          backdrop-blur-md
          animate-pulse
        ">
          {toast}
        </div>
      )}

    </div>
  );
};

export default Contact;