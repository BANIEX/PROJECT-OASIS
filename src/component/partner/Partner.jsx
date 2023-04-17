import React from 'react'
import './partner.css'
import Frame1 from '../../image/Frame 3733.png'
import Frame2 from '../../image/Frame 3734.png'
import Frame3 from '../../image/Frame 3735.png'

const Partner = () => {
  return (
    <div className='partner'>
      <h1>Our Partners</h1>
      <div className='partner__image'>
        <img src={Frame1} alt='pic' />
        <img src={Frame2} alt='pic' />
        <img src={Frame3} alt='pic' />
      </div>
    </div>
  )
}

export default Partner