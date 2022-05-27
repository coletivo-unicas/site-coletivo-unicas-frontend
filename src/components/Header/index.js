import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/logo.png';
import './style.css';

const Header = () => {
    return (
        <>
            <Navbar>
                <NavLink to="/"><img alt="logo" src={Logo} /></NavLink>
                <div className='header-container'>
                    <NavLink className="header-itens" to="/">Sobre</NavLink>
                    <NavLink className="header-itens" to="/">Nosso time</NavLink>
                    <NavLink className="header-itens" to="/">Projetos</NavLink>
                    <NavLink className="header-itens" to="/">Parcerias</NavLink>
                    <NavLink className="header-itens" to='/contact'>Contato</NavLink>
                </div>
            </Navbar>
        </>
    );
}

export default Header;