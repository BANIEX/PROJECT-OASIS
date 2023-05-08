import React from 'react'
import { SiGmail } from 'react-icons/si'
import {RiFacebookFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import './contact.css'

const Contact = () => {
    const [user, setUser] = React.useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
    })
    function handleChange(event){
        const {name, value } = event.target
        setUser(prevUser => ({
            ...prevUser,
            [name] : value
        }))
    }
    function handleSubmit(event){
        event.preventDefault()

    }
  return (
    <div className='contact__con'>
        <h2>Contact us</h2>
        <p>Get in touch with us by filling the below form</p>
        <div className='contact__section'>
            <div className='contact__first'>
                <h3>Get in touch</h3>
                <form className='form' onSubmit={handleSubmit}>
                    Enter Full Name<input 
                    type='name'
                    id='fullName'
                    name='fullName' 
                    value={user.fullName}
                    onChange={handleChange}
                    required />
                   <section className='form__section'>
                        <div className='section_form'>
                            <label htmlFor='email'>Email</label>
                            <input 
                            type='email'
                            id='email'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            required />
                        </div>
                        <div className='section_form'>
                            Phone<input 
                            type='phone'
                            name='phoneNumber'
                            value={user.phoneNumber}
                            onChange={handleChange}
                             />
                        </div>
                   </section>
                    Subject<input 
                    type='text' 
                    name='subject'
                    value={user.subject}
                    onChange={handleChange}
                     />
                    Message<textarea 
                    style={{height: 100}}
                    placeholder='Enter your message'
                    name='message'
                    value={user.message}
                    onChange={handleChange}
                    />
                    <div className='button__con'>
                        <button className="contact__button">Submit</button> 
                    </div>
                </form>
            </div>
            <div className='contact__line'></div>
            <div className='contact__third'>
                <h3>Contact</h3>
                <h4>Contact us via</h4>
                <div className='contactus'>
                    <div>
                        <SiGmail className='gmail' />
                        <span className='contact'>email@gmail.com</span>
                    </div>
                    <div>
                        <BsLinkedin className='linkedln'/>
                        <span className='contact'>Linkedln</span>
                    </div>
                    <div>
                        <FiInstagram className='instagram' />
                        <span className='contact'>Instagram</span>
                    </div>
                    <div>
                        <BsTwitter className='twitter' />
                        <span className='contact'>Twitter</span>
                    </div>
                    <div>
                        <RiFacebookFill className='facebook' />
                        <span className='contact'>Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact