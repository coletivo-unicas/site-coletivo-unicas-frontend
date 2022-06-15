import React from 'react';
import './style.css';
import BackgroundProjectBorder from '../../assets/images/bg_project_border.svg';
import Carousel from 'react-elastic-carousel';

const CarouselProjects = ({ handlerButton, image, title }) => {

    return (
        <div>
            <Carousel
                itemsToShow={3}
                pagination={false}
            >
                <div className='carousel-projects-background' onClick={handlerButton}>
                    <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                    <img className='carousel-projects-image' src={image} alt='projects' />
                    <label className='carousel-projects-title'>
                        {title}
                    </label>
                </div>
            </Carousel>;
        </div>
    )
}

export default CarouselProjects;