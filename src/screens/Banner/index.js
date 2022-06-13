import React from 'react';
import './style.css';
import Button from '../../components/Button';
import MainBanner from '../../assets/images/banner.svg';
import { Link } from "react-scroll";

const Banner = () => {
    return (
        <div className='banner' id='banner'>
            <div className='banner-info'>
                <img className='banner-main' src={MainBanner} alt='banner' />
            </div>
            <div className='banner-button-options'>
                <Link
                    activeClass="banner-button"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    to='projects'>
                    <Button
                        title='Conheça nossos projetos'
                        color='transparent'
                        border='2px solid #FFF'
                        width='240px'
                        margin='0px 20px 150px 0px'
                    />
                </Link>

                <Button title='Fala com a gente' />
            </div>
        </div>
    );
}

export default Banner;