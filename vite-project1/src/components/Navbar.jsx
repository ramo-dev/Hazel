import './NavbarStyles.css';
import React from 'react';
import { menuItems } from './MenuItems';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className='NavbarItems'>
            <img src='../assets/GirrafeWithAcamera-logo.png' className='Navbar-logo'></img>
            <ul className='Nav-menu'>
                {menuItems.map((item, index)=>{
                     return(
                        <li key={index}>
                            <a href={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                     )
                })}
            </ul>
        </nav>
    );
}
 
export default Navbar;
