import React from 'react';
import './style.css';
import Linkedin from '../../assets/images/linkedin.svg';
import Github from '../../assets/images/github.svg';
import Button from '../../components/Button';

const CardTeam = ({ img, name, course, pronoun, signUp }) => {
    return (
        <div className='card-team'>
            <img src={img} alt='avatar' className='card-team-image' />
            <p id='name' className='card-team-infos'>{name}</p>
            <p className='card-team-pronoun'>{pronoun}</p>
            <p className='card-team-infos' id='card-team-course'>{course}</p>
            {!signUp &&
                <div className='card-team-networks-links'>
                    <img className='card-team-networks' src={Linkedin} alt='linkedin' />
                    <img className='card-team-networks' src={Github} alt='github' />
                </div>
            }
            {signUp &&
                <div className='card-team-networks-links' id='card-team-button'>
                    <Button
                        title="Inscreva-se"
                        color="#6451A6"
                        width="110px"
                        height="34px" />
                </div>
            }

        </div>
    )
}

export default CardTeam;