import React from 'react';
import CardTeam from '../../components/CardTeam';
import './style.css';
import Ana from '../../assets/images/time/ana.svg';
import Deborah from '../../assets/images/time/deborah.svg';
import Hanaty from '../../assets/images/time/hanaty.svg';
import Maria from '../../assets/images/time/maria.svg';
import BackgroundHive from '../../assets/images/bg_our_team_hive.svg';
import BackgroundLine from '../../assets/images/bg_our_team_line.svg';
import You from '../../assets/images/you.svg';


const OurTeam = () => {
    return (
        <div id='ourTeam'>
            <img className='our-team-background-line' src={BackgroundLine} alt='BackgroundLine' />
            <div>
                <h2 className='our-team-title'>NOSSO TIME</h2>
                <div className='our-team-list'>
                    <ul>
                        <li>
                            <CardTeam
                                img={You}
                                name='Você'
                                pronoun='(do jeitinho que você é)'
                                course='Vem fazer parte dessa mudança com a gente!'
                                signUp={true}
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Ana}
                                name='Maria Alice'
                                pronoun='(ela/dela)'
                                course='Sistemas para internet'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Deborah}
                                name='Joana Silva'
                                pronoun='(ela/dela)'
                                course='Ciência da computação'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Hanaty}
                                name='Maria Alice'
                                pronoun='(ela/dela)'
                                course='Sistemas para internet'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Maria}
                                name='Joana Silva'
                                pronoun='(ela/dela)'
                                course='Ciência da computação'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Ana}
                                name='Maria Alice'
                                pronoun='(ela/dela)'
                                course='Sistemas para internet'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Deborah}
                                name='Joana Silva'
                                pronoun='(ela/dela)'
                                course='Ciência da computação'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Hanaty}
                                name='Maria Alice'
                                pronoun='(ela/dela)'
                                course='Sistemas para internet'
                            />
                        </li>
                        <li>
                            <CardTeam
                                img={Maria}
                                name='Joana Silva'
                                pronoun='(ela/dela)'
                                course='Ciência da computação'
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <img className='our-team-background-hive' src={BackgroundHive} alt='BackgroundHive' />
        </div>
    )
}

export default OurTeam;