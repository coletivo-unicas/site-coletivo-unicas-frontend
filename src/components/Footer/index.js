import React from 'react';
import EmailSvg from '../../assets/Icons/socialmedia/EmailSvg'; // [Import .SVG] FORMA 3
import LinkedinSvg from '../../assets/Icons/socialmedia/LinkedinSvg';
import GithubSvg from '../../assets/Icons/socialmedia/GithubSvg';
import InstagramSvg from '../../assets/Icons/socialmedia/InstagramSvg';
import './style.css';
// import icEmail from '../../assets/icons/socialmedia/ic_email.svg';  // [Import .SVG] FORMA 1
// import { ReactComponent as IcEmail } from '../../assets/icons/socialmedia/ic_email.svg'; // [Import .SVG] FORMA 2



const Footer = () => {
    return (
        <footer className='footer-bg'>
            <div className='footer-container'>
                {/*[Import .SVG] FORMA 1 - Img */}
                {/* <img src={icEmail} alt="Icone de Email Vermelho"/>   */}

                {/*[Import .SVG] FORMA 2 - SVG - ReactComponent */}
                {/* <IcEmail/> */}

                {/*[Import .SVG] FORMA 3 - Componente SVG */}
                <div className='footer-social-media'>
                    <a href='mailto:coletivounicas@gmail.com' target="_blank" rel="noreferrer">
                        <EmailSvg className='icon-social-media'/>
                    </a>
                    <a href='https://www.linkedin.com/company/coletivo-unicas' target="_blank" rel="noreferrer">
                        <LinkedinSvg className='icon-social-media'/>
                    </a>
                    <a href='https://github.com/coletivo-unicas' target="_blank" rel="noreferrer">
                        <GithubSvg className='icon-social-media'/>
                    </a>
                    <a href='https://www.instagram.com/coletivo.unicas' target="_blank" rel="noreferrer">
                        <InstagramSvg className='icon-social-media'/>
                    </a>
            
                </div>

                <p>Desenvolvido por Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                <p>Coletivo Unicas - Direitos reservados</p>

            </div>
        </footer>
    )
};

export default Footer