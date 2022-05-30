import React from 'react';
import CardTeam from '../../components/CardTeam';
import './style.css';
import Avatar from '../../assets/images/avatar.jpg';

const OurTeam = () => {
    return (
        <div id='ourTeam'>
            <h2 className='title'>Nosso Time</h2>
            <div className='our-team-list'>
                <ul>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Maria Alice'
                            pronoun='(ela/dela)'
                            course='Sistemas para internet'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Joana Silva'
                            pronoun='(ela/dela)'
                            course='Ciência da computação'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Bruna Santos'
                            pronoun='(ela/dela)'
                            course='Sistemas para internet'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Maria Alice'
                            pronoun='(ela/dela)'
                            course='Sistemas para internet'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Joana Silva'
                            pronoun='(ela/dela)'
                            course='Ciência da computação'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Bruna Santos'
                            pronoun='(ela/dela)'
                            course='Sistemas para internet'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Maria Alice'
                            pronoun='(ela/dela)'
                            course='Sistemas para internet'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Joana Silva'
                            pronoun='(ela/dela)'
                            course='Ciência da computação'
                        />
                    </li>
                    <li>
                        <CardTeam
                            img={Avatar}
                            name='Bruna Santos'
                            pronoun='(ela/dela)'
                            course='Sistemas para internet'
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OurTeam;