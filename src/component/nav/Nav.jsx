import React from 'react'
//import { React.useState } from 'react'
import logo from '../../image/logo.jpeg'
import { MdClose } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  const [nav, setNav] = React.useState(true)
  function handleClick(){
    setNav(prevNav => !prevNav)
  }
  return (
    <div className='nav__con'>
        <div>
            <img className='logo' src={logo} alt='logo' />
        </div>
        
        <nav>
            <ul className={nav ? 'nav__list lists ' : 'nav__list list'}>
                <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='/'><li>Home</li></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='about'><li>About Us</li></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='contact'><li>Contact Us</li></NavLink>
                <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to='support'><li>Support</li></NavLink>
                <li className='donate'>Donate</li>
            </ul>
            <div className={nav ? 'nav__bar bars' : 'nav__bar'}>
              <MdClose onClick={handleClick} className={ nav ? 'closed' : 'bar'}/>
              <GoThreeBars onClick={handleClick} className={ nav ? 'bar' : 'open'}/>
          </div>
            <button className='nav__button'>Donate</button>
        </nav>
    </div>
  )
}

export default Nav
