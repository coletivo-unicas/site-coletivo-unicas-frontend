import React from 'react';
import Home from '../screens/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from '../screens/Contact';
import Header from '../components/Header';

const Rotas = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}


export default Rotas;