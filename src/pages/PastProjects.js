import React from 'react'
import './PastProjects.scss'

const Placeholder = require('../img/ProfilePicture.JPG')

export default function PastProjects() {
  return (
    <div className='project-cont'>
      <ul className='projects clr'>
  <li class="pusher"></li>
	<li>
      <div>
        <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
     <li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
  <li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
<li>
      <div>
        <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
     <li class="pusher"></li>
  <li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
  
  <li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
  <li class="pusher"></li>
  <li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
  <li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li><li>
      <div>
      <img src={Placeholder} alt=""/>
        <h2>Project Title</h2>
    </div>
  </li>
</ul>
      {/* <p>The inspiration for this page design came from <a href='https://codepen.io/amohler/pen/qBNYWGZ?editors=1100'>this codepen</a>. */}
    </div>
  )
}