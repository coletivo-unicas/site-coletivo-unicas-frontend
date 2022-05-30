import React from 'react';
import './style.css';
import Linkedin from '../../assets/images/linkedin.png';
import Github from '../../assets/images/github.png';

const CardTeam = ({ img, name, course, pronoun }) => {
    return (
        <div className='card-team'>
            <img src={img} alt='avatar' className='card-team-image' />
            <p id='name' className='card-team-infos'>{name}</p>
            <p className='card-team-pronoun'>{pronoun}</p>
            <p className='card-team-infos'>{course}</p>
            <div className='card-team-networks-links'>
                <img className='card-team-networks' src={Linkedin} alt='linkedin' />
                <img className='card-team-networks' src={Github} alt='github' />
            </div>
        </div>
    )
}

export default CardTeam;