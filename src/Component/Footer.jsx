import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { BsDiscord, BsTelegram } from "react-icons/bs";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();
  const [copiedId, setCopiedId] = useState(null);
  const [toast, setToast] = useState("");

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setToast("Copied Successfully ✔");

    setTimeout(() => {
      setCopiedId(null);
      setToast("");
    }, 1200);
  };

  const footerData = [
    {
      title: "Contact",
      items: [
        { id: 1, label: "Phone", href: "tel:+8801883650010", copyText: "+8801883650010", icon: <FaPhone /> },
        { id: 2, label: "Email", href: "mailto:tamimhasanbd06@gmail.com", copyText: "tamimhasanbd06@gmail.com", icon: <FaEnvelope /> },
        { id: 3, label: "WhatsApp", href: "https://wa.me/8801883650010", copyText: "+8801883650010", icon: <FaWhatsapp /> },
        { id: 4, label: "LinkedIn", href: "https://linkedin.com", copyText: "https://linkedin.com", icon: <FaLinkedin /> },
      ],
    },
    {
      title: "Social",
      items: [
        { id: 5, label: "Facebook", href: "https://facebook.com", copyText: "https://facebook.com", icon: <FaFacebook /> },
        { id: 6, label: "Discord", href: "https://discord.com", copyText: "Tamim#1234", icon: <BsDiscord /> },
        { id: 7, label: "Telegram", href: "https://t.me/tamimhasan", copyText: "https://t.me/tamimhasan", icon: <BsTelegram /> },
        { id: 8, label: "Twitter", href: "https://x.com/home", copyText: "https://x.com/home", icon: <FaTwitter /> },
        { id: 9, label: "Instagram", href: "https://instagram.com", copyText: "https://instagram.com", icon: <FaInstagram /> },
        { id: 10, label: "TikTok", href: "https://tiktok.com", copyText: "https://tiktok.com", icon: <FaTiktok /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { id: 11, label: "GitHub", href: "https://github.com/", copyText: "https://github.com/", icon: <FaGithub /> },
        { id: 12, label: "Vercel", href: "https://vercel.com", copyText: "https://vercel.com", icon: <SiVercel /> },
      ],
    },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">

      {/* 🌌 Floating Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full top-[-120px] left-[-120px] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full bottom-[-120px] right-[-120px] animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-4 py-16">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12
          bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent"
        >
          Tamim Hasan Portfolio
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {footerData.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >

              <h3 className="text-lg font-semibold mb-5 text-cyan-400">
                {section.title}
              </h3>

              <div className="space-y-3">

                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="
                      group relative flex items-center justify-between
                      p-3 rounded-xl
                      bg-white/5 backdrop-blur-md
                      border border-white/10
                      hover:border-cyan-400/50
                      hover:bg-white/10
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-lg hover:shadow-cyan-500/10
                      active:scale-[0.97]
                    "
                  >

                    {/* LEFT SIDE */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 flex-grow"
                    >
                      <span className="
                        text-cyan-400
                        group-hover:scale-125 group-hover:rotate-6
                        transition-all duration-300
                      ">
                        {item.icon}
                      </span>

                      <span className="text-sm group-hover:text-cyan-300 transition">
                        {item.label}
                      </span>
                    </a>

                    {/* COPY BUTTON */}
                    <button
                      onClick={() => handleCopy(item.copyText, item.id)}
                      className="
                        relative p-2 rounded-lg
                        bg-white/5 hover:bg-cyan-500/20
                        border border-transparent hover:border-cyan-400/40
                        transition-all duration-300
                        overflow-hidden
                      "
                    >
                      {/* ripple effect */}
                      <span className="absolute inset-0 scale-0 group-active:scale-100 bg-cyan-400/20 rounded-full transition"></span>

                      {copiedId === item.id ? (
                        <motion.div
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1.3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FaCheck className="text-green-400 animate-pulse" />
                        </motion.div>
                      ) : (
                        <FaCopy className="text-gray-400" />
                      )}
                    </button>

                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm">
        © {year} Tamim Hasan Portfolio. All rights reserved.
      </div>

      {/* 🔔 TOAST */}
      {toast && (
        <div className="
          fixed bottom-6 left-1/2 -translate-x-1/2
          bg-cyan-500/20 border border-cyan-400/30
          backdrop-blur-xl
          px-6 py-2 rounded-full
          text-cyan-200
          animate-pulse
        ">
          {toast}
        </div>
      )}

    </footer>
  );
};

export default Footer;