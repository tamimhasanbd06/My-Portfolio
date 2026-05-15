import React, { useState } from "react";
import {
  FaGoogle,
  FaApple,
  FaMicrosoft,
  FaGithub,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#001a33] to-[#000814] px-4 py-12 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-700/20 rounded-full blur-[120px]"></div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/5 border border-cyan-400/20 rounded-3xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-cyan-200 text-sm">
            Sign in to continue your journey
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4 mb-6">
          <button className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105">
            <FaGoogle className="text-red-400 text-xl" />
            Login with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105">
            <FaApple className="text-white text-xl" />
            Login with Apple
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105">
            <FaMicrosoft className="text-blue-400 text-xl" />
            Login with Microsoft
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105">
            <FaGithub className="text-gray-300 text-xl" />
            Login with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-cyan-400/20"></div>
          <span className="px-4 text-cyan-200 text-sm">or continue with email</span>
          <div className="flex-grow h-px bg-cyan-400/20"></div>
        </div>

        {/* Email Login Form */}
        <form className="space-y-5">
          
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-cyan-300" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-cyan-300" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 bg-white/10 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 -translate-y-1/2 text-cyan-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-cyan-300 hover:text-cyan-100 transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-cyan-200 text-sm mt-8">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-cyan-300 font-semibold hover:text-white transition"
          >
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default login;