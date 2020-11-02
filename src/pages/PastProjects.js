import React, { useState } from 'react'
import './PastProjects.scss'

const Placeholder = require('../img/ProfilePicture.JPG')

export default function PastProjects() {
  const [showDetails, setShowDetails] = useState(0);

  const detailToggle = project => () => showDetails === project ? setShowDetails(false) : setShowDetails(project);
  
  return (
    <div>
      <ul className='projects'>
        <li className={showDetails === 1 ? 'details' : ''}>Lee McGhee Roofing</li>
        <li>
          <div onClick={detailToggle(1)}>
            <img src={Placeholder} alt=""/>
            <h2>Lee McGhee Roofing</h2>
          </div>
        </li>
        <li>
          <div onClick={detailToggle(2)}>
            <img src={Placeholder} alt=""/>
            <h2>Lambda School Project Adaptiv Apps - Chat Feature</h2>
          </div>
        </li>
        <li className={showDetails === 2 ? 'details' : ''}>Lambda School Project Adaptiv Apps - Chat Feature</li>
        <li className={showDetails === 3 ? 'details' : ''}>Adaptiv Apps - Freelance</li>
        <li>
          <div onClick={detailToggle(3)}>
            <img src={Placeholder} alt=""/>
            <h2>Adaptiv Apps - Freelance</h2>
          </div>
        </li>
        <li>
          <div onClick={detailToggle(4)}>
            <img src={Placeholder} alt=""/>
            <h2>Connie's Cookbook</h2>
          </div>
        </li>
        <li className={showDetails === 4 ? 'details' : ''}>Connie's Cookbook</li>
        <li className={showDetails === 5 ? 'details' : ''}>The World's Most Impressive To-do List</li>
        <li>
          <div onClick={detailToggle(5)}>
            <img src={Placeholder} alt=""/>
            <h2>The World's Most Impressive To-do List</h2>
          </div>
        </li>
        </ul>
      {/* <p>The inspiration for this page design came from <a href='https://codepen.io/amohler/pen/qBNYWGZ?editors=1100'>this codepen</a>.*/}
    </div>
  )
}