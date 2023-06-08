import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const NavBar = () => {
    return (
        <div className='nav-bar'>
            <header>
                <Link className='title' to="/"  style={{fontSize :"40px" ,fontWeight :"bolder"}}>
                    Dermatica
                </Link>
            </header>
            <nav >
                <Link to='/appointment' > <button className='btn-btn1'>Start consulting</button></Link>
            </nav>
        </div>
    );
}

export default NavBar;
