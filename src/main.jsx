import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// Layout Components
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

// Lock Page
import Lock from "../src/Component/pages/Lock/Lock";

// Main Pages
import Home from "./Component/pages/Home/Home";
import Contact from "./Component/pages/Contact/Contact";
import Experience from "./Component/pages/Experience/Experience";
import Skill from "./Component/pages/Skill/Skill";
import Error from "./Component/pages/Error/Error";
import Project from "./Component/pages/projects/projects";

// Layout Wrapper for Main Website
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full relative">{children}</main>
      <Footer />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Lock Screen Default Route */}
        <Route path="/" element={<Lock />} />

        {/* Main Website Routes */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/experience"
          element={
            <MainLayout>
              <Experience />
            </MainLayout>
          }
        />

        <Route
          path="/skill"
          element={
            <MainLayout>
              <Skill />
            </MainLayout>
          }
        />

        <Route
          path="/project"
          element={
            <MainLayout>
              <Project />
            </MainLayout>
          }
        />

        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);