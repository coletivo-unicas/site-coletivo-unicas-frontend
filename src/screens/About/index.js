import React from 'react';
import Logo from '../../assets/Images/logo_unicas.svg';
import Equality from '../../assets/Images/equality.svg';
import Equity from '../../assets/Images/equity.svg';
import Diversity from '../../assets/Images/diversity.svg';
import './style.css';
import BackgroundCloud from '../../assets/Images/bg_home_slice.svg';


const About = () => {
    return (
        <div className='about' id='about' >
            <img className='about-background-cloud' src={BackgroundCloud} alt='BackgroundCloud' />
            <div className='about-container'>
                <div className='img-qs'>
                    <img className='about-image' alt='banner' src={Logo} />
                </div>

                <div>
                    <h2 className='about-title'>QUEM SOMOS NÓS?</h2>
                    <label className='about-subtitle'>Unicas é um coletivo de mulheres de tecnologia da Unicap</label>
                    <p className='about-description'>Criado em 2019 por alunas do curso de Ciência da Computação
                        da Universidade Católica de Pernambuco (UNICAP), o Coletivo
                        Unicas é uma rede de apoio entre mulheres cis e trans envolvidas
                        na Ciência e Tecnologia da UNICAP. Com o objetivo de mostrar a
                        importância da presença de grupos que são considerados minorias
                        nas áreas de STEM (sigla em inglês para Science, Technology,
                        Engineering e Mathematics, em português Ciência, Tecnologia,
                        Engenharia e Matemática).
                        Visamos atrair novas garotas e mulheres para a área, incentivar a
                        sua permanência nos cursos de STEM e criar um ambiente acadêmico e
                        profissional mais acolhedor, diverso e inclusivo para todes, através
                        de atividades como cursos, workshops, campanhas, eventos e palestras.
                        Atualmente, as integrantes do Coletivo Unicas, são alunes dos cursos
                        de Ciência da Computação e Sistemas para Internet da UNICAP.
                    </p>
                </div>

            </div>

            <div className='about-options'>
                <div>
                    <img className='about-options-image' src={Equality} alt='banner' />
                    <p id='about-options-title'>Igualdade Social e de Gênero</p>
                    <p className='about-option-description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div>
                    <img className='about-options-image' src={Equity} alt='banner' />
                    <p id='about-options-title'>Equidade Étnico-Racial</p>
                    <p className='about-option-description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div>
                    <img className='about-options-image' src={Diversity} alt='banner' />
                    <p id='about-options-title'>Igualdade e respeito à diversidade</p>
                    <p className='about-option-description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div >


    )
}

export default About;