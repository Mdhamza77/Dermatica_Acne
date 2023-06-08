import React from 'react';
import { Link } from 'react-router-dom';
import './style.css' ;
const NavBar = () => {
    return (
        <div className='nav-bar'>
            <header>
                <Link className='title' to="/">
                    Dermatica
                </Link>
            </header>
            <nav >
                <button className='btn-btn1'>Start consulting</button>
            </nav>
        </div>
    );
}

export default NavBar;
