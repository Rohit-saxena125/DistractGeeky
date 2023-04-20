import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({showMenu,active}) => {
  return (
                <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <Close onClick={showMenu} className='cursor-pointer'/>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>History</Link></li>
                    <li><Link to='/'>RECOMMENDATION</Link></li>
                    <li><Link to='/'>PRACTICE</Link></li>
                    <li><Link to='/'>PAYMENT</Link></li>
                    {/* <li><Link to='/Login'>Login</Link></li> */}
                    {/* <li><Link to='/logout'>Logout</Link></li> */}
                </ul>
  );
};

export default MenuItems;
