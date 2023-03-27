import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/Inventrory">Inventrory</a>
                <a href="/Login">Login</a>

            </div>
        </nav>
    );
};

export default Header;