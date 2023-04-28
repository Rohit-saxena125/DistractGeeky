import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
const Header = () => {

    const [active, setActive] = useState(false)
    const handleLogout = () => {


        alert("user has been logged out successfully");
        localStorage.clear();
        setTimeout(() => { window.location.href = "/login"; }, 1000)



    };
    const showMenu = () => {
        setActive(!active)
    }
    const isLogged = localStorage.getItem('isLoggedIn');
    console.log(isLogged);

    return (
        <div className='fixed w-full text-white flex justify-between p-4 items-center'>

            <div className='text-2xl font-bold text-center uppercase'>
                <h1> <span className='block text-4xl'> DISTRACT FREE GEEKS</span></h1>
            </div>

            {isLogged ?
                <nav>

                    <div className='absolute right-6 md:hidden top-6 scale-150'>
                        <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer' />
                    </div>
                    <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/plan'>plan</Link></li>
                        <li><Link to='/recommendation'>RECOMMENDATION</Link></li>
                        <li><Link to='/practice'>PRACTICE</Link></li>

                        <li><button onClick={() => { handleLogout() }}>Logout</button></li>
                    </ul>

                    <MenuItems showMenu={showMenu} active={active} />

                </nav>

                :
                <nav>
                    <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>

                        <li><Link to='/login'><FontAwesomeIcon icon={faUser} /></Link></li>
                    </ul>
                </nav>}

        </div>
    );
};

export default Header;