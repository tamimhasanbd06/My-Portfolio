import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

/* =========================
   PARALLAX HOOK
========================= */
const useParallax = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return { x, y, rotateX, rotateY };
};

const Error = () => {
  const navigate = useNavigate();
  const { x, y, rotateX, rotateY } = useParallax();

  /* Mouse Move */
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const xPos = (e.clientX / innerWidth) * 200 - 100;
    const yPos = (e.clientY / innerHeight) * 200 - 100;

    x.set(xPos);
    y.set(yPos);
  };

  /* Keyboard (ESC to go back) */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4"
    >

      {/* =========================
         PARTICLE BACKGROUND
      ========================= */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* =========================
         GLOW BACKGROUND
      ========================= */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* =========================
         CONTENT
      ========================= */}
      <motion.div
        style={{ x, y, rotateX, rotateY }}
        className="z-10 text-center max-w-xl backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
      >

        {/* 404 TEXT */}
        <motion.h1
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[100px] sm:text-[140px] font-extrabold leading-none bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-4xl font-semibold mt-2">
          Lost in the void
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm mt-4">
          This page doesn’t exist.  
          But don’t worry — you can safely go back home.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          {/* HOME */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 active:scale-95 transition font-semibold"
          >
            <FaHome />
            Go Home
          </Link>

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 hover:scale-105 active:scale-95 transition font-semibold"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

        {/* HINT */}
        <p className="text-gray-500 text-xs mt-6">
          Press <span className="text-white">ESC</span> to go back
        </p>

      </motion.div>
    </div>
  );
};

export default Error;