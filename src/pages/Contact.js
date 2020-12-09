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

  console.log('template', template)
  console.log(formData);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('Contact_Form', template, formData, userID)
      .then(res => console.log(res))
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
          <p>Tampa, FL</p>
        </div>
        <div className='contact'>
          <i class="far fa-paper-plane"></i>
          <h3>Email</h3>
          <p>Tampa, FL</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
        <input
          name='from_name' 
          value={formData.from_name}
          onChange={handleChange}
        />
        <label>
          Email
        </label>
        <input
          name='from_email' 
          value={formData.from_email}
          onChange={handleChange}
        />
        <label>
          Phone Number
        </label>
        <input
          name='from_phone' 
          value={formData.from_phone}
          onChange={handleChange}
        />
        <label>
          Message
        </label>
        <input
          name='message' 
          value={formData.from_message}
          onChange={handleChange}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}


