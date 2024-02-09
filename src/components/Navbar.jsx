import './NavbarStyles.css';
import React, { useState } from 'react';
import { menuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import NotFound from '../routes/NotFound';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }


    return ( 
        <nav className='NavbarItems'>
            <Link to='/' className='Navbar-logo'>
                <img src={logo} alt="Girrafe With a Camera"></img>
                <span className='Navbar-name'>Hazel</span>
            </Link>

            <div className='menu-icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"} ></i>
            </div>


            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index)=>{
                     return(
                        <li key={index}>
                            <Link to={item.url} className={item.cName}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                     )
                })}
                <button><Link to={NotFound}>Sign Up</Link></button>
            </ul>
        </nav>
    );
}
 
export default Navbar;
