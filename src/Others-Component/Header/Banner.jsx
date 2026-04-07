import React from 'react';
import { motion } from "framer-motion";
import haderImg from "../../assets/images/hader.png";
import logo from "../../assets/images/logo.jpg"

const Banner = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col xl:flex-row overflow-hidden">

      {/* LEFT SIDE */}
      <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        className=" w-full xl:w-[40%] flex flex-col justify-center px-6 sm:px-10 md:px-14 xl:px-20 py-12 relative z-10 items-center xl:items-start text-center xl:text-left">

        {/* Glass */}
        <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>

        <div className="relative z-10 w-full flex flex-col items-center xl:items-start">

          {/* LOGO (center + responsive scale) */}
          <div className="mb-8 w-full flex justify-center xl:justify-start">
            <div className=" relative  w-30 sm:w-37.5 md:w-45  xl:w-25 ">

              <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30"></div>

              <img src={logo} alt="logo"
                className="relative w-full aspect-square rounded-full object-cover  border border-white/20 shadow-2xl"/>
            </div>
          </div>

          {/* TEXT */}
          <h1 className="text-white font-extrabold leading-tight  text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-6 w-full ">
            Make Your <br />
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Dream Website
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className=" text-gray-400  text-sm sm:text-base md:text-lg  mb-8  max-w-full xl:max-w-md ">
            Build ultra-modern, fast, and visually stunning websites with cutting-edge design and smooth user experience.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
            <button className="px-6 py-3 rounded-full  bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold  hover:scale-105 transition duration-300">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div 
        initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
        className="w-full xl:w-[60%] relative">

        {/* IMAGE (right focus fix) */}
        <img src={haderImg} alt="header"
          className=" w-full  h-75 sm:h-100 md:h-125 xl:h-full  object-cover  object-right
          "
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 
        bg-gradient-to-l 
        from-transparent 
        via-black/50 
        to-black"></div>

        {/* Glow */}
        <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_70%_50%,rgba(0,200,255,0.15),transparent_60%)]"></div>

      </motion.div>

    </section>
  );
};

export default Banner;