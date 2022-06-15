import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/logo_unicas.svg';
import './style.css';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <>
            <Navbar>
                <img alt='logo' src={Logo} />
                <div className='header-container'>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        to="banner"
                    >Início
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        to="about"
                    >Sobre
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        to="projects">Projetos
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        to="ourTeam">Nosso time
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        to="partnerships">Parcerias
                    </Link>
                    <Link
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                        to='contact'>Contato
                    </Link>
                </div>
            </Navbar>
        </>
    );
}

export default Header;