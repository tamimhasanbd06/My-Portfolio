import React from 'react';
import Banner from '../../../Others-Component/Header/Banner';
import Skill from '../../pages/Skill/Skill';
import Introduction from '../../../Personal-Sections/Introduction/Introduction';
import Projects from '../../../Component/pages/projects/projects';
import Contact from '../Contact/Contact';
import Education from '../../../Personal-Sections/Education/Education';
import Experience from '../Experience/Experience'
import About from '../../../Others-Component/About/About'
const Home = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <About/>
            <Skill />
            <Projects />
             <Experience/> 
            <Contact/>
            <Education/>
          
        </div>
    );
};

export default Home;