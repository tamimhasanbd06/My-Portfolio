import React from "react";
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
} from "react-icons/fa";
import { BsDiscord, BsTelegram } from "react-icons/bs";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerData = [
    {
      title: "Contact",
      items: [
        { label: "Phone", href: "tel:+8801883650010", icon: <FaPhone /> },
        { label: "Email", href: "mailto:tamimhasanbd06@gmail.com", icon: <FaEnvelope /> },
        { label: "WhatsApp", href: "https://wa.me/8801883650010", icon: <FaWhatsapp /> },
         { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedin /> },
      ],
    },
    {
      title: "Social",
      items: [
       
  { label: "Facebook", href: "https://facebook.com", icon: <FaFacebook /> },
  { label: "Discord", href: "https://discord.com", icon: <BsDiscord /> },
  { label: "Telegram", href: "https://telegram.org", icon: <BsTelegram /> },
  { label: "Twitter", href: "https://x.com/home", icon: <FaTwitter /> },
  { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
  { label: "TikTok", href: "https://tiktok.com", icon: <FaTiktok /> }
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/",
          icon: <FaGithub />,
        },
        {
          label: "Vercel",
          href: "https://vercel.com/tamimhasanbd06s-projects",
          icon: <SiVercel />,
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-6xl mx-auto px-4 py-16">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
        >
          Tamim Hasan Portfolio
        </motion.h2>

        {/* GRID (Now 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {footerData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >

              {/* SECTION TITLE */}
              <h3 className="text-lg font-semibold mb-5 text-purple-400">
                {section.title}
              </h3>

              {/* LINKS */}
              <div className="space-y-3">

                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.05] transition-all group"
                  >

                    <span className="text-purple-400 group-hover:scale-110 transition">
                      {item.icon}
                    </span>

                    <span className="text-sm group-hover:text-purple-300 transition">
                      {item.label}
                    </span>

                  </a>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm">
        © {year} Tamim Hasan Portfolio. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;