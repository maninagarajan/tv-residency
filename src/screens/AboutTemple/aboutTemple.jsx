import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './aboutTemple.css';
import TopImg from '../../assets/images/AboutTemple/Temple_Top.png';
import GoddessImg from '../../assets/images/AboutTemple/Goddess.png';
import TempleImg from '../../assets/images/AboutTemple/Temple.png';
import { aboutGod, aboutTemple, newMoon } from '../../constants/info';

export const AboutTempleComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='screenTop'>
                <img src={TopImg} alt='Contact-Us' />
                <div>
                    <h2>About temple</h2>
                </div>
            </div>

            <div className='aboutTempleDiv'>
                <h1 className='roomSectionHeaderText'>General Information</h1>

                <div className='imageTextRow'>
                    <img src={GoddessImg} alt='Goddess' />
                    <p>{aboutGod}</p>
                </div>

                <h1 className='roomSectionHeaderText'>Temple</h1>
                <div className='imageTextRow'>
                    <p>
                        <img src={TempleImg} alt='temple' />
                        {aboutTemple?.map((line) => <p key={line}>{`${line}\n\n`}</p>)}
                    </p>
                </div>

                <h1 className='roomSectionHeaderText'>The ‘New’ Moon</h1>
                <div className='imageText'>
                    {newMoon?.map((line) => <p key={line}>{`${line}\n\n`}</p>)}
                </div>
            </div>
        </div>
    )
}