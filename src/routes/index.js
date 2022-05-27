import React from 'react';
import Home from '../screens/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from '../screens/Contact';

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}


export default Rotas;