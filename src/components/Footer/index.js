import React from 'react';
import EmailSvg from '../../assets/icons/socialmedia/EmailSvg'; // [Import .SVG] FORMA 3
import LinkedinSvg from '../../assets/icons/socialmedia/LinkedinSvg';
import GithubSvg from '../../assets/icons/socialmedia/GithubSvg';
import InstagramSvg from '../../assets/icons/socialmedia/InstagramSvg';
import './style.css';

const Footer = () => {
    return (
        <footer className='footer-bg'>
            <div className='footer-container'>
                <div className='footer-social-media'>
                    <a href='mailto:coletivounicas@gmail.com' target="_blank" rel="noreferrer">
                        <EmailSvg className='icon-social-media' />
                    </a>
                    <a href='https://www.linkedin.com/company/coletivo-unicas' target="_blank" rel="noreferrer">
                        <LinkedinSvg className='icon-social-media' />
                    </a>
                    <a href='https://github.com/coletivo-unicas' target="_blank" rel="noreferrer">
                        <GithubSvg className='icon-social-media' />
                    </a>
                    <a href='https://www.instagram.com/coletivo.unicas' target="_blank" rel="noreferrer">
                        <InstagramSvg className='icon-social-media' />
                    </a>

                </div>

                <p>Desenvolvido por Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                <p>Coletivo Unicas - Direitos reservados</p>

            </div>
        </footer>
    )
};

export default Footer