import React, { useState } from 'react'
import './Contact.scss'
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: '',
  });

  const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const userID = process.env.REACT_APP_EMAILJS_USERID;

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('Contact_Form', template, formData, userID)
      .then(res => { 
        console.log(res);
        setFormData({
          from_name: '',
          from_email: '',
          from_phone: '',
          message: '',
        })
        alert('Thank you for your message!')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='contact-page'>
      <h1>Contact</h1>
      <div className='flex-cont' >
        <div className='contact'>
          <i class="fas fa-globe-americas"></i>
          <h3>Current Location</h3>
          <p>Tampa, FL</p>
        </div>
        <div className='contact'>
          <i class="fas fa-mobile-alt"></i>
          <h3>Phone</h3>
          <a href='tel:3213471543'>321-347-1543</a>
        </div>
        <div className='contact'>
          <i class="far fa-paper-plane"></i>
          <h3>Email</h3>
          <a href="mailto:amohler09@gmail.com">amohler09@ gmail.com</a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name='from_name' 
          value={formData.from_name}
          onChange={handleChange}
          placeholder='Name'
          required='true'
        />
        <input
          name='from_email' 
          value={formData.from_email}
          onChange={handleChange}
          placeholder='Email'
          type='email'
          required='true'
        />
        <input
          name='from_phone' 
          value={formData.from_phone}
          onChange={handleChange}
          placeholder='Phone Number'
          required='true'
        />
        <textarea
          name='message' 
          value={formData.message}
          onChange={handleChange}
          placeholder='Message'
          required='true'
        />
        <button type='submit' value='Send Message'>Send Message</button>
      </form>
    </div>
  )
}


