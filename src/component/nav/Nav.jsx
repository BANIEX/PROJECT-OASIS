import React from 'react'
import logo from '../../image/logo.jpeg'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav__con'>
        <div>
            <img className='logo' src={logo} alt='logo' />
        </div>
        <nav>
            <ul className='nav__list'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Support</li>
                <li className='donate'>Donate</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
