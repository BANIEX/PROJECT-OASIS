import React from 'react'
import './mission.css'
import Ellipse287 from '../../image/Ellipse287.png'
import Ellipse2893 from '../../image/Ellipse2893.png'

const Mission = () => {
  return (
    <div className='mission__con'>
      <section className='mission__first'>
        <div>
          <img className='img__first' src={Ellipse287} alt='pic' />
        </div>
        <div className='mission first'>
          <h2>Our Mission</h2>
          <p>Our passion was borne out of the need to reduce the high rates of death and enormous burden that stems from a ravaging invasion of the non communicable diseases in Nigeria.</p>
        </div>
      </section>

      <div className='line'>

      </div>

      <section className='mission__second'>
        <div className='mission second'>
          <h2>Our Vission</h2>
          <p>Our passion was borne out of the need to reduce the high rates of death and enormous burden that stems from a ravaging invasion of the non communicable diseases in Nigeria.</p>
        </div>
        <div>
          <img className='img__second'src={Ellipse2893} alt="pic" />
        </div>
      </section>
    </div>
  )
}

export default Mission