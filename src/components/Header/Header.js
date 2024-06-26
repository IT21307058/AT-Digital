import React from 'react'
import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import logo from '../../assets/image/Logo.png'

const Header = () => {
    const navRef = useRef();

    // this function called remove class list nav
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (

        <header className='logo-nav-gap'>
            <img src={logo} alt="Description of the image" className='logo' />

            <div>
                <p></p>
                <nav ref={navRef}>
                    <a href="#">Service</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Careers</a>

                    {/* Close button */}
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>

                {/* Toggle button */}
                <button className='nav-btn toggle-btn' onClick={showNavbar}>
                    <FaBars />
                </button>

            </div>
        </header>

    )
}

export default Header