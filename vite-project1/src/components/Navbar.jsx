import './NavbarStyles.css';
import React, { useState } from 'react';
import { menuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }


    return ( 
        <nav className='NavbarItems'>
            <a href='/' className='Navbar-logo'>
                <img src={logo} alt="Girrafe With a Camera"></img>
                <span className='Navbar-name'>Hazel</span>
            </a>

            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"} ></i>
            </div>


            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index)=>{
                     return(
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                     )
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    );
}
 
export default Navbar;
