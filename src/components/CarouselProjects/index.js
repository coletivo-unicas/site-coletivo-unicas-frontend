import React, { useState, useEffect } from 'react';
import './style.css';
import BackgroundProjectBorder from '../../assets/Images/bg_project_border.svg';
import Carousel from 'react-elastic-carousel';
import api from "../../services/api";

const CarouselProjects = ({ handlerButton }) => {
    let [itemsToShowDevice, setItemsToShowDevice] = useState(3);
    const [projectsData, setProjectsData] = useState([]);

    const getProjects = async () => {
        await api
            .get("projects")
            .then((response) => {
                setProjectsData(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        getProjects();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setItemsToShowDevice(1);
        }
    }, []);

    return (
        <div className='carousel-projects'>
            <Carousel
                itemsToShow={itemsToShowDevice}
                pagination={false}
            >
                {projectsData.map((project, id) =>
                    <div key={id} className='carousel-projects-background' onClick={handlerButton}>
                        <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                        <img className='carousel-projects-image' src={project.images[0].image} alt='projects' />
                        <label className='carousel-projects-title'>
                            {project.title}
                        </label>
                    </div>
                )}
            </Carousel>
        </div>
    )
}

export default CarouselProjects;