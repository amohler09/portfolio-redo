import React, { useState } from 'react'
import './PastProjects.scss'

const Placeholder = require('../img/ProfilePicture.JPG')

export default function PastProjects() {
  const [showDetails, setShowDetails] = useState(null);

  const detailToggle = project => () => showDetails === project ? setShowDetails(null) : setShowDetails(project);

  const Projects = [
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Lee McGhee Roofing`,
      summary: 'summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary'
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Lambda School Labs Project - Adaptiv Apps - Chat Feature`,
      summary: 'summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary'
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Adaptiv Apps - Freelance`,
      summary: 'summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary'
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `Connie's Cookbook`,
      summary: 'summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary'
    },
    {
      imgUrl: require('../img/ProfilePicture.JPG'),
      title: `The World's Most Impressive To-do List`,
      summary: 'summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary'
    },
  ]
  
  return (
    <div className='projects'>
       {Projects.map((project, i) =>  (
          <div className={i % 2 ? 'flex' : 'flex reverse'} style={showDetails === i ? {padding: '0'} : null}>
            <div 
              className='project-cont' onClick={detailToggle(i)}>
              <img src={project.imgUrl} alt='' />
              <h2 className='title'>{showDetails !== i && project.title}</h2>
            </div>
            <p onClick={detailToggle(i)} className={showDetails === i ? 'details' : 'detail-hide' }>{project.summary}</p>
          </div>
        ))}
     </div>
  )
}
