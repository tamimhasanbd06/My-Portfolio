import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaVideo,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      label: "+8801883650010",
      href: "tel:+8801883650010",
      icon: <FaPhone className="text-2xl text-blue-400" />,
    },
    {
      id: 2,
      label: "WhatsApp",
      href: "https://wa.me/8801883650010",
      icon: <FaWhatsapp className="text-2xl text-green-400" />,
    },
    {
      id: 3,
      label: "Email",
      href: "mailto:tamimhasanbd06@gmail.com",
      icon: <FaEnvelope className="text-2xl text-blue-400" />,
    },
    {
      id: 4,
      label: "Location",
      href: "https://www.google.com/maps/place/Jaharpur+Alfatah+Darul+Ulum+Madrasha",
      icon: <FaMapMarkerAlt className="text-2xl text-red-400" />,
    },
    {
      id: 5,
      label: "IMO",
      href: "tel:+8801883650010",
      icon: <FaVideo className="text-2xl text-pink-400" />,
    },
    {
      id: 6,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tamim-hasan-th018836/",
      icon: <FaLinkedin className="text-2xl text-blue-300" />,
    },
    {
      id: 7,
      label: "Facebook",
      href: "https://www.facebook.com/tamimhasanbd06",
      icon: <FaFacebook className="text-2xl text-blue-500" />,
    },
    {
      id: 8,
      label: "Discord",
      href: "https://discord.com/channels/1477537833286762641/1477537836361060525", 
      icon: <BsDiscord className="text-2xl text-indigo-400" />,
    },
      {
      id: 9,
      label: " Telegram",
      href: "https://web.telegram.org/a/", 
      icon: <BsTelegram  className="text-2xl text-indigo-400" />,
    },
  ];

  const cardStyle =
    "flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-md bg-black/80 border border-white/20 hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-95";

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">

      {/* HEADER */}
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Contact Me
      </h1>

      {/* CONTACT CARDS */}
      <div className="w-full max-w-2xl space-y-5">
        {contacts.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
            className={`${cardStyle} group`}
          >
            {/* ICON */}
            <span className="group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </span>

            {/* TEXT */}
            <span className="text-lg font-medium tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;