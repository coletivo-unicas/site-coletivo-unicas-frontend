import React, { useState, useRef } from 'react';
import CarouselProjects from '../../components/CarouselProjects';
import './style.css';
import ModalProjects from '../../components/ModalProjects';

const Projects = () => {

    const [dropdown, setDropdown] = useState("");
    const modalRef = useRef(null);

    const toggleDropdown = () => {
        console.log("show");
        //se clicar no botão, modal aparece
        setDropdown("show");
        document.body.addEventListener("click", closeDropdown);
    }

    const closeDropdown = event => {
        event.stopPropagation(); //impede de executar listeners dos filhos
        const contain = modalRef.current.contains(event.target.value);
        if (!contain) { //se clicar fora do modal, ele DESaparece
            console.log("hidden");
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };
    return (
        <div id='projects'>
            <h2 className='title'>Conheça os nossos projetos</h2>
            <CarouselProjects onClick={toggleDropdown} />
            <button onClick={toggleDropdown}>Click Here!</button>
            <div>
                <ModalProjects className={dropdown} modalRef={modalRef} />
            </div>
        </div>
    )
}

export default Projects;