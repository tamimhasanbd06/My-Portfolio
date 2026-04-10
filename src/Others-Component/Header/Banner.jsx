import React from 'react';
import { motion } from "framer-motion";
import haderImg from "../../assets/images/hader.png";
import logo from "../../assets/images/logo.jpg";

const Banner = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col xl:flex-row overflow-hidden">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full xl:w-[45%] flex flex-col justify-center px-5 sm:px-8 md:px-12 xl:px-16 py-12 relative z-10 items-center xl:items-start text-center xl:text-left"
      >

        {/* Glass Effect */}
        <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>

        <div className="relative z-10 w-full flex flex-col items-center xl:items-start">

          {/* LOGO */}
          <div className="mb-6 w-full flex justify-center xl:justify-start">
            <div className="relative w-24 sm:w-28 md:w-32 xl:w-24">

              <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30"></div>

              <img
                src={logo}
                alt="logo"
                className="relative w-full aspect-square rounded-full object-cover border border-white/20 shadow-2xl"
              />
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-white font-extrabold leading-tight text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-4 w-full">
            Make Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Dream Website
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-full xl:max-w-md">
            Build ultra-modern, fast, and visually stunning websites with cutting-edge design and smooth user experience.
          </p>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full xl:w-[55%] relative"
      >

        {/* IMAGE */}
        <img
          src={haderImg}
          alt="header"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] xl:h-screen object-cover object-right"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black"></div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,200,255,0.15),transparent_60%)]"></div>

      </motion.div>

    </section>
  );
};

export default Banner;