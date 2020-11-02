import React, { useState } from 'react'
import './PastProjects.scss'

const Placeholder = require('../img/ProfilePicture.JPG')

export default function PastProjects() {
  const [currentProject, setCurrentProject] = useState(0);

  const detailToggle = project => () => currentProject === project ? setCurrentProject(0) : setCurrentProject(project);

  const Projects = [
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Lee McGhee Roofing`,
      summary: (<ul></ul>)
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Lambda School Labs Project - Adaptiv Apps - Chat Feature`,
      summary: (<ul></ul>)
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Adaptiv Apps - Freelance`,
      summary: (<ul></ul>)
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Connie's Cookbook`,
      summary: (<ul></ul>)
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `The World's Most Impressive To-do List`,
      summary: (<ul></ul>)
    },

  ]
  
  return (
    <div className='projects'>
      <ul >
        <li className={currentProject === 1 ? 'details' : 'hide-details'}>Lee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee RoofingLee McGhee Roofing</li>
        <li className={currentProject === 1 ? 'img-cont' : ''}>
          <div onClick={detailToggle(1)}>
            <img src={Placeholder} alt=""/>
            <h2>Lee McGhee Roofing</h2>
          </div>
        </li>
        <li className={currentProject === 2 ? 'img-cont' : ''}>
          <div onClick={detailToggle(2)}>
            <img src={Placeholder} alt=""/>
            <h2>Lambda School Project Adaptiv Apps - Chat Feature</h2>
          </div>
        </li>
        <li className={currentProject === 2 ? 'details' : 'hide-details'}>Lambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat FeatureLambda School Project Adaptiv Apps - Chat Feature</li>
        <li className={currentProject === 3 ? 'details' : 'hide-details'}>Adaptiv Apps - Freelance</li>
        <li className={currentProject === 3 ? 'img-cont' : ''}>
          <div onClick={detailToggle(3)}>
            <img src={Placeholder} alt=""/>
            <h2>Adaptiv Apps - Freelance</h2>
          </div>
        </li>
        <li className={currentProject === 4 ? 'img-cont' : ''}>
          <div onClick={detailToggle(4)}>
            <img src={Placeholder} alt=""/>
            <h2>Connie's Cookbook</h2>
          </div>
        </li>
        <li className={currentProject === 4 ? 'details' : 'hide-details'}>Connie's Cookbook</li>
        <li className={currentProject === 5 ? 'details' : 'hide-details'}>The World's Most Impressive To-do List</li>
        <li className={currentProject === 5 ? 'img-cont' : ''}>
          <div onClick={detailToggle(5)}>
            <img src={Placeholder} alt=""/>
            <h2>The World's Most Impressive To-do List</h2>
          </div>
        </li>
        </ul>
      {/* <p>The inspiration for this page design came from <a href='https://codepen.io/amohler/pen/qBNYWGZ?editors=1100'>this codepen</a>.
      The concept of using a list-item element and turning it into these beautiful hexagon shapes really made me want to attempt to build something similar myself! This was great practice at finding and using the correct CSS pseudo-selectors to get the desired effect.</p> */}
    </div>
  )
}