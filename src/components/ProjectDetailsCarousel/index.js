import React from 'react';
import './style.css';
import Carousel from 'react-elastic-carousel';
import ProjectImage01 from '../../assets/images/project01.jpg';
import ProjectImage02 from '../../assets/images/project02.jpg';
import ProjectImage03 from '../../assets/images/project03.jpg';

const ProjectDetailsCarousel = () => {
    return (
        <div>
            <Carousel
                itemsToShow={2}
                pagination={true}
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={2000}
            >
                <img className='project-details-carousel-image' src={ProjectImage01} alt='projects' />
                <img className='project-details-carousel-image' src={ProjectImage02} alt='Retrato' />
                <img className='project-details-carousel-image' src={ProjectImage03} alt='projects' />
            </Carousel>
        </div>
    )
}

export default ProjectDetailsCarousel;