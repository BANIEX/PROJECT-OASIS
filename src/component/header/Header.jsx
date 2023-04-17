import React from 'react'
import { IconContext } from 'react-icons'
import { RxChevronDown } from 'react-icons/rx'
import './header.css'
import Ellipse289 from '../../image/Ellipse 289.png'
//import VectorPattern from '../../image/VectorPattern.png'
//import VectorPatternb from '../../image/VectorPatternb.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__con'>
          <section className='header__first'>
            <h2 className='about'>Alone we can do so little Together we can <span>Change</span></h2>
            <p>The Oasis Initiative is a fast rising, blossoming not-for-profit organization working to reduce mortality from Non-communicable diseases (NCD) in Nigeria.</p>
            <button>Know more</button>
          </section>
          <section>
            <img src={Ellipse289} alt='pic' />
          </section>
        </div>
        <div  className='scroll__con'>
          <RxChevronDown  className='scroll' size='3em'/>
        </div>
    </div>
  )
}

export default Header