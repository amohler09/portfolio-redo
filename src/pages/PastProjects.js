import React, { useState } from 'react'
import './PastProjects.scss'

export default function PastProjects() {
  const [showDetails, setShowDetails] = useState(null);

  const detailToggle = project => () => showDetails === project ? setShowDetails(null) : setShowDetails(project);

  const Projects = [
    {
      imgUrl: require('../img/LMR.png'),
      title: `Lee McGhee Roofing`,
      summary: <div>
                <a href='http://www.leemcgheeroofing.com' target='_blank' rel='noopener noreferrer' >www.LeeMcGheeRoofing.com</a>
                <p>Source code is private on Github and available upon request</p>
                <ul>
                  <li>Features & skills used</li>
                </ul>

      </div>
                
    },
    {
      imgUrl: require('../img/AdaptivApps.png'),
      title: `Lambda School Labs Project - Adaptiv Apps - Chat Feature`,
      summary: <div>
                <a href='https://github.com/AngelCitySportsAdm1n/AdaptivApps-fe' target='_blank' rel='noopener noreferrer' >Front End Github Repository</a>
                <a href='https://github.com/AngelCitySportsAdm1n/AdaptivApps-be' target='_blank' rel='noopener noreferrer' >Back End Github Repository</a>
                <a href='https://drive.google.com/file/d/1B4JY_PIulAz9eJG2Sl_kXJMlWo-Ok91N/view' target='_blank' rel='noopener noreferrer' >Presentation Video</a>
                <p>The deployed project site is managed by Lambda School and unfortunately no longer live ☹️</p>
                <ul>
                  <li>Features & skills used</li>
                </ul>
              </div>
    },
    {
      imgUrl: require('../img/Portfolio.png'),
      title: `This Portfolio Website!`,
      summary: <div>
                <a href='https://github.com/amohler09/reducer-todo' target='_blank' rel='noopener noreferrer' >Github Repository</a>
                <ul>
                  <li>Features & skills used</li>
                </ul>
              </div>
    },
    {
      imgUrl: require('../img/Cookbook.png'),
      title: `Connie's Cookbook`,
      summary: <div>
                <a href='https://connies-cookbook.vercel.app/' target='_blank' rel='noopener noreferrer' >Deployed Project Site</a>
                <a href='https://github.com/amohler09/connies-cookbook' target='_blank' rel='noopener noreferrer' >Github Repository</a>
                <ul>
                  <li>Features & skills used</li>
                </ul>
              </div>
    },
    {
      imgUrl: require('../img/TodoList.png'),
      title: `The World's Most Impressive To-do List`,
      summary: <div>
                <a href='https://reducer-todo-teal.now.sh/' target='_blank' rel='noopener noreferrer' >Deployed Project Site</a>
                <a href='https://github.com/amohler09/reducer-todo' target='_blank' rel='noopener noreferrer' >Github Repository</a>
                <ul>
                  <li>Features & skills used</li>
                </ul>
              </div>
    },
  ]
  
  return (
    <div className='projects'>
      <h1>Past Projects</h1>
      <h3>(Click a project image to learn more)</h3>
       {Projects.map((project, i) =>  (
          <div className={i % 2 ? 'flex' : 'flex reverse'} style={showDetails === i ? {padding: '0'} : null}>
            <div 
              className='project-cont' onClick={detailToggle(i)}>
              <img src={project.imgUrl} alt={`${project.title} project`} />
              <h2 className='title'>{showDetails !== i && project.title}</h2>
            </div>
            <div onClick={detailToggle(i)} className={showDetails === i ? 'details' : 'detail-hide' }>
              <h2>{project.title}</h2>
              {project.summary}
            </div>
          </div>
        ))}
     </div>
  )
}
