import React from 'react'
import './activity.css'
import Ellipse289 from '../../image/Ellipse 289.png'
import Ellipse2891 from '../../image/Ellipse2891.png'
import Ellipse2894 from '../../image/Ellipse2894.png'
import Ellipse2892 from '../../image/Ellipse2892.png'
import Ellipse2893 from '../../image/Ellipse2893.png'



const datas =[
  {
    'image': Ellipse289,
    'name': 'Social Media Campaigns',
    'text': 'Our passion was borne out of the need to reduce the high rates of death.'
  },
  {
    'image': Ellipse2892,
    'name': 'Social Media Campaigns',
    'text': 'Our passion was borne out of the need to reduce the high rates of death.'
  },   
  {
    'image': Ellipse2894,
    'name': 'Social Media Campaigns',
    'text': 'Our passion was borne out of the need to reduce the high rates of death.'
  },   
  {
    'image': Ellipse2891,
    'name': 'Social Media Campaigns',
    'text': 'Our passion was borne out of the need to reduce the high rates of death.'
  },   {
    'image': Ellipse2893,
    'name': 'Social Media Campaigns',
    'text': 'Our passion was borne out of the need to reduce the high rates of death.'
  },   
 
]
const Activity = () => {
  const details = datas.map(data => {
    return (
      <div className='details'>
        <img src={data.image} alt='pic' />
        <h2>{data.name}</h2>
        <p>{data.text}</p>
      </div>

    )
  })
  
  return (
    
    <div className='activity' >
      <h1>Our Activities</h1>
      <div className='details__con'>
        {details}
      </div>
    </div>
  )
}

export default Activity