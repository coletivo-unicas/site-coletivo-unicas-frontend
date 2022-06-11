import React, { useState } from 'react';
import CarouselProjects from '../../components/CarouselProjects';
import './style.css';
import ModalProjects from '../../components/ModalProjects';

const Projects = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div id='projects'>
            <h2 className='title'>Conheça os nossos projetos</h2>
            <CarouselProjects onClick={() => setModalShow(true)} />
            <button onClick={() => setModalShow(true)}>Click Here!</button>
            <div>
                <ModalProjects show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>
        </div>
    )
}

export default Projects;