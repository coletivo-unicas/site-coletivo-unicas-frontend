import React from 'react';
import BannerImage from '../../assets/images/banner.jpg';
import './style.css';
import Button from '../../components/Button';
import { Link } from "react-scroll";

const About = () => {
    return (
        <div className='about' id='about' >
            <div>
                <h2 className='title'>Sobre o Coletivo Unicas</h2>
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
                <div className='about-button'>
                    <Link to='ourTeam'> <Button title='Conhecer o time' width='170px' /></Link>
                </div>
            </div>
            <div>

            </div>
            <div>
                <img className='about-image' alt='banner' src={BannerImage} />
            </div>
        </div>
    )
}

export default About;