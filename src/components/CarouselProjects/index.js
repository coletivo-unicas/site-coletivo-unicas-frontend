import React from 'react';
import './style.css';
import BannerImage from '../../assets/images/banner.jpg';
import BackgroundProjectBorder from '../../assets/images/bg_project_border.svg';
// import ArrowLeft from '../../assets/images/proj_arrow_left.svg';
// import ArrowRight from '../../assets/images/proj_arrow_right.svg';
import Carousel from 'react-elastic-carousel';

const CarouselProjects = ({ handlerButton }) => {

    return (
        <div>
            <Carousel
                itemsToShow={3}
                pagination={false}
                // enableAutoPlay={true}
                // autoPlaySpeed={5000}
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
                {/* <div className='carousel-projects-background'>
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
                </div> */}
            </Carousel>;
        </div>
    )
}

export default CarouselProjects;