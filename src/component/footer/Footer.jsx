import React from 'react'
import logo from '../../image/IMG-20230314-WA0010 25.png'
import {RiFacebookFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer__con'>
      <div className='footer__details'>
        <div>
          <div className='footer__logo'>
            <p>THE</p>
            <img className='footer__image' src={logo} alt='pic' />
            <p>INITIATIVE</p>
          </div>
          <p className='detail'>
              A non-profit organization committed to reducing mortality from the Non-communicable Diseases (NCDs).A non-profit organization committed to reducing mortality . 
          </p>
          <div className='icon__con'> 
              <RiFacebookFill className='icon1'/>
              <BsTwitter className='icon2'  />
              <BsLinkedin className='icon3'/>
          </div>
        </div>

        <div className='footer__section'>
          <div className='footer__li'>
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Support</li>
              <li className='donate'>Donate</li>
            </ul>
          </div>

          <div className='footer__li'>
            <h3>Service</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Support</li>
              <li className='donate'>Donate</li>
            </ul>
          </div>
        </div>
      </div>
     <div className='footer__line'>
      <hr />
      <p>Copyright Reserved @ 2023. The Oasis Initiative</p>
     </div>
    </div>
  )
}

export default Footer