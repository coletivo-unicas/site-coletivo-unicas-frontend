import React from 'react';
import './style.css';
import Carousel from 'react-elastic-carousel';

const ProjectDetailsCarousel = ({ data }) => {
    return (
        <div>
            <Carousel
                itemsToShow={2}
                pagination={true}
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={2000}
            >
                {data.map((url, id) =>
                    <img key={id} className='project-details-carousel-image' src={url.image} alt='projects' />
                )}
            </Carousel>
        </div>
    )
}

export default ProjectDetailsCarousel;