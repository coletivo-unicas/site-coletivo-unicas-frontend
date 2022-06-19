import React from 'react';
import './style.css';
import BannerImage from '../../assets/images/banner-teste.jpg';
import Retrato from '../../assets/images/retrato.jpg';
import Carousel from 'react-elastic-carousel';


const ProjectDetailsCarousel = () => {
    return (
        <div>
            <Carousel
                itemsToShow={2}
                pagination={true}
                showArrows={false}
                // enableAutoPlay={true}
                // autoPlaySpeed={2000}
            >
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={Retrato} alt='Retrato' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
            </Carousel>
        </div>
    )
}

export default ProjectDetailsCarousel;