import React from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import BannerImage from '../../assets/images/banner.jpg';
import BackgroundProjectBorder from '../../assets/images/bg_project_border.svg';

const CarouselProjects = ({ handlerButton }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        }
    };
    return (
        <div>
            <Carousel
                responsive={responsive}
                centerMode={true}
            >
                <div className='carousel-projects-background' onClick={handlerButton}>
                    <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                    <img className='carousel-projects-image' src={BannerImage} alt='projects' />
                    <label className='carousel-projects-title'>
                        Technovation Girls
                    </label>
                </div>
                <div className='carousel-projects-background'>
                    <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                    <img className='carousel-projects-image' src={BannerImage} alt='projects' />
                    <label className='carousel-projects-title'>
                        Technovation Girls
                    </label>
                </div>
                <div className='carousel-projects-background'>
                    <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                    <img className='carousel-projects-image' src={BannerImage} alt='projects' />
                    <label className='carousel-projects-title'>
                        Technovation Girls
                    </label>
                </div>
                <div className='carousel-projects-background'>
                    <img className='carousel-projects-border' src={BackgroundProjectBorder} alt='BackgroundProjectBorder' />
                    <img className='carousel-projects-image' src={BannerImage} alt='projects' />
                    <label className='carousel-projects-title'>
                        Technovation Girls
                    </label>
                </div>
            </Carousel>;
        </div>
    )
}

export default CarouselProjects;