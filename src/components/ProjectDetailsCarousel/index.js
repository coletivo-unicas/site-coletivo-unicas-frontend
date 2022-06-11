import React from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import BannerImage from '../../assets/images/mulheres-na-tecnologia.jpg';

const ProjectDetailsCarousel = ({ handlerButton }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div>
            <Carousel
                responsive={responsive}
                centerMode={true}
                autoPlay={false}
            >
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
                <img className='project-details-carousel-image' src={BannerImage} alt='projects' />
            </Carousel>
        </div>
    )
}

export default ProjectDetailsCarousel;