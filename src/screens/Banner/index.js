import React from 'react';
import './style.css';
import BannerImage from '../../assets/images/banner.jpg';
import Button from '../../components/Button';

const Banner = () => {
    return (
        <div className='banner' id='banner'>
            <div className='banner-info'>
                <h2 className='banner-title'>Nós somos as mulheres sobre as quais os homens nos alertaram</h2>
                <p>
                    Lugar de mulher é na tecnologia, é na unicap e é fazendo tecnologia na Unicap!
                    O coletivo Unicas é formado por mulheres e não-binaries da area de tecnologia da Unicap.
                    Vem conhecer nosso trabalho, e se juntar com a gente para mostrar que lugar de mulher é
                    onde ela quiser!
                </p>
                <div className='banner-button-options'>
                    <Button
                        title='Conheça nossos projetos'
                        color='#cc9bdc'
                        border='2px solid #4db8a6'
                        width='220px'
                        margin='0 20px 0 0' />
                    <Button title='Fala com a gente' />
                </div>
            </div>
            <div>
                <img className='banner-image' alt='banner' src={BannerImage} />
            </div>
        </div>
    );
}

export default Banner;