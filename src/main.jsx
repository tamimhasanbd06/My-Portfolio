import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'






import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";     

import Home from "./Component/pages/Home/Home.jsx";
import Contact from "./Component/pages/Contact/Contact.jsx";
import Experience from "./Component/pages/Experience/Experience.jsx";
import Skill from "./Component/pages/Skill/Skill.jsx";
import Error from "./Component/pages/Error/Error.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)