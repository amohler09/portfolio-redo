import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const ProfilePicture = require('../img/ProfilePicture.JPG')

export default function NavBar() {
  return (
    <nav>
      <img src={ProfilePicture} alt='Amber Mohler' />
      <Link to='/' className='navLink'>About Me</Link>
      <Link to='Resume' className='navLink'>Resume</Link>
      <Link to='PastProjects' className='navLink'>Past Projects</Link>
      <Link to='Contact' className='navLink'>Contact</Link>
      
    </nav>
  )
}