import React from 'react';
import './style.css';
import BannerImage from '../../assets/images/banner.jpg';
import Button from '../../components/Button';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-info'>
                <h2>Site Coletivo Unicas</h2>
                <p>Quem sabe o que as mulheres podem ser quando
                    finalmente tiverem liberdade para se tornarem
                    elas mesmas?
                </p>
                <div className='banner-button-options'>
                    <Button title='Contato' />
                </div>
            </div>
            <div>
                <img className='banner-image' alt='banner' src={BannerImage} />
            </div>
        </div>
    );
}

export default Banner;