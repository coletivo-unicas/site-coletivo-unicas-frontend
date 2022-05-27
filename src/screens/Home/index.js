import React from 'react';
import Banner from '../Banner';
import Contact from '../Contact';
import './style.css';
import Header from '../../components/Header';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Contact />
        </div>
    );
}

export default Home;