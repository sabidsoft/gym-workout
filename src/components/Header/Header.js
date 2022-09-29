import React from 'react'
import logo from '../../images/brand-logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <img className='brand_logo' src={logo} alt="brand_logo" />
                <h1 className='brand_name'>GYM WORKOUT</h1>
            </header>
            <p className='exercises_title'>Select today's exercise</p>
        </>
    )
}

export default Header