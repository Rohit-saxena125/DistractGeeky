import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; 
const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className='fixed w-full text-white flex justify-between p-4 items-center'>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1> <span className='block text-4xl'>GEEKS</span></h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>
                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/history'>HISTORY</Link></li>
                    <li><Link to='/recommendation'>RECOMMENDATION</Link></li>
                    <li><Link to='/'>PRACTICE</Link></li>
                    <li><Link to='/'>PAYMENT</Link></li>
                    <li><Link to='/'>PERFORMANCE</Link></li>
                    <li><Link to='/login'><FontAwesomeIcon icon={faUser} /></Link></li>
                </ul>

                <MenuItems showMenu={showMenu} active={active}/>

        </nav>

    </div>
  );
};

export default Header;
