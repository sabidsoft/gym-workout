import React from 'react';
import logo from '../../images/brand-logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='brand_logo' src={logo} alt="brand_logo" />
            <h1 className='brand_name'>GYM WORKOUT</h1>
        </div>
    );
};

export default Header;