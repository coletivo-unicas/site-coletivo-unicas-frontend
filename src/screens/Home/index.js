import React, { useEffect } from 'react';
import Banner from '../Banner';
import './style.css';
import Header from '../../components/Header';
import About from '../About';
import AOS from "aos";
import "aos/dist/aos.css";
import OurTeam from '../OurTeam';
import Projects from '../Projects';

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='home'>
            <Header />
            <Banner />
            <About />
            <OurTeam />
            <Projects />
        </div>
    );
}

export default Home;