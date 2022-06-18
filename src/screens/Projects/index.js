import React, { useState } from 'react';
import CarouselProjects from '../../components/CarouselProjects';
import './style.css';
import ModalProjects from '../../components/ModalProjects';
import BackgroundProjects from '../../assets/images/bg_projects.svg';
import BannerImage from '../../assets/images/banner.jpg';

const Projects = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div id='projects'>
            <div>
                <h2 className='projects-title'>CONHEÇA OS NOSSOS PROJETOS</h2>
                <CarouselProjects
                    handlerButton={() => setModalShow(true)}
                    title='Technovation Girls'
                    image={BannerImage} />
                <div>
                    <ModalProjects show={modalShow}
                        onHide={() => setModalShow(false)} />
                </div>
                <img className='projects-background' src={BackgroundProjects} alt='BackgroundProjects' />
            </div>

        </div>
    )
}

export default Projects;