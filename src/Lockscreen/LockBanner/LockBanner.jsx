import { useNavigate } from "react-router-dom";
import LockBannerImage from "../../assets/images/LockBannerImage.png";

const LockBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000814] to-black" />

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16">

        {/* STRICT GRID LAYOUT (NO CENTER ISSUE) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT TEXT */}
          <div className="flex flex-col justify-start text-left">

            <span className="w-fit px-5 py-2 mb-6 text-sm tracking-[4px] uppercase border border-cyan-400/40 rounded-full text-cyan-300 bg-cyan-500/10">
              Elite Frontend Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-left">
              <span className="text-white">Crafting </span>
              <span className="text-cyan-300">Next-Level</span>
              <br />
              <span className="text-white">Digital </span>
              <span className="text-blue-400">Experiences</span>
            </h1>

            <p className="text-base md:text-xl text-white/80 mb-10 leading-relaxed text-left">
              <span className="text-blue-300 font-semibold">
                Transforming creative concepts
              </span>{" "}
              into high-performance web solutions with precision, innovation, and modern frontend engineering.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              <button
                onClick={() => navigate("/home")}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300"
              >
                Go to Home
              </button>

              <button className="px-8 py-4 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300">
                Explore Portfolio
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[520px]">

              {/* Glow */}
              <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-3xl" />

              {/* Image */}
              <img
                src={LockBannerImage}
                alt="Developer"
                className="relative w-full rounded-3xl object-cover"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default LockBanner;