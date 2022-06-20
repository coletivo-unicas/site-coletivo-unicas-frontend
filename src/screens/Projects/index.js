import React, { useState } from 'react';
import CarouselProjects from '../../components/CarouselProjects';
import './style.css';
import ModalProjects from '../../components/ModalProjects';
import BackgroundProjects from '../../assets/images/bg_projects.svg';
import BannerImage from '../../assets/images/banner.jpg';

const Projects = () => {
    const [modalShowData, setModalShowData] = useState(false);
    
    return (
        <div id='projects'>
            <div>
                <h2 className='projects-title'>NOSSOS PROJETOS</h2>
                <CarouselProjects
                    handlerButton={() => setModalShowData(true)}
                    image={BannerImage} />
                <div>
                    <ModalProjects show={modalShowData} projectId={'1'}
                        onHide={() => setModalShowData(false)} />
                </div>
                <img className='projects-background' src={BackgroundProjects} alt='BackgroundProjects' />
            </div>

        </div>
    )
}

export default Projects;