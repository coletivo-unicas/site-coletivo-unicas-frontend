import React, { useState } from 'react';
import CarouselProjects from '../../components/CarouselProjects';
import './style.css';
import ModalProjects from '../../components/ModalProjects';
import BackgroundProjects from '../../assets/images/bg_projects.svg'

const Projects = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div id='projects'>
            <div>
                <h2 className='projects-title'>CONHEÇA OS NOSSOS PROJETOS</h2>
                <CarouselProjects onClick={() => setModalShow(true)} />
                <button onClick={() => setModalShow(true)}>Click Here!</button>
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