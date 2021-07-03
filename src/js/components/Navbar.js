// Style
import NavbarCSS from '../../css/components/Navbar.module.css';

// Icons
import {FiMenu} from 'react-icons/fi';
import {IoClose} from 'react-icons/io5';

// Dependencies
import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const showMenu = () => {
        const n = document.getElementById('navbar');
        
        if (n.style.display === 'none') {
            n.style.display = 'block';
            setOpenMenu(true);
        } else {
            n.style.display = 'none';
            setOpenMenu(false)
        };
    };

    return (
        <div className={NavbarCSS['general-container']}>
            <button className={NavbarCSS['icon']} onClick={showMenu}>
                {openMenu ? <IoClose /> : <FiMenu />}
            </button>
            <div className={NavbarCSS['navbar-container']} id='navbar'>
                <div className={NavbarCSS['navbar']}>
                    <ul className={NavbarCSS['navbar-list']}>
                        <button className={NavbarCSS['navbar-item']} onClick={showMenu}>
                            <Link to='/books-website' className={NavbarCSS['navbar-links']}>Home</Link>
                        </button>
                        <div className={NavbarCSS['divider']}></div>
                        <button className={NavbarCSS['navbar-item']} onClick={showMenu}>
                            <Link to='/search' className={NavbarCSS['navbar-links']}>Search</Link>
                        </button>
                        <div className={NavbarCSS['divider']}></div>
                        <button className={NavbarCSS['navbar-item']} onClick={showMenu}>
                            <Link to='/signup' className={NavbarCSS['navbar-links']}>Sign Up</Link>
                        </button>
                        <div className={NavbarCSS['divider']}></div>
                        <button className={NavbarCSS['navbar-item']} onClick={showMenu}>
                            <Link to='/login' className={NavbarCSS['navbar-links']}>Log In</Link>
                        </button>
                        <div className={NavbarCSS['divider']}></div>
                        <button className={NavbarCSS['navbar-item']} onClick={showMenu}>
                            <Link to='/logout' className={NavbarCSS['navbar-links']}>Log Out</Link>
                        </button>
                     </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;