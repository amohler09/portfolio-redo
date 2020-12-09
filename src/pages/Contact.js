import React from 'react'
import './Contact.scss'

export default function Contact() {
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
      Contact Form
    </div>
  )
}


