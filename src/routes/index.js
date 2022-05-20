import React from 'react';
import Home from '../screens/Home';
import { Routes, Route } from 'react-router-dom';

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}


export default Rotas;