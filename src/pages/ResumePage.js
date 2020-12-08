import React from 'react'
import './ResumePage.scss'

export default function ResumePage() {
  return (
    <div className='resume-page'>
      <button>Toggle Printable Version</button>
      <h1>Amber Mohler</h1>
      <h2>Objective</h2>
      <p>Experienced and accomplished individual with an extensive background in problem-solving on a daily basis and working in team-driven environments, seeking an opportunity to utilize and evolve my newly developed Full Stack Engineering skills.</p>
      <div className='resume experience'>
        <h2>Experience</h2>

        <h3>Frontend Developer, Lee McGhee Roofing</h3>
        <h3>Tampa, Florida — August 2020 - Present</h3>
        <ul>
          <li>Collaborated with the owners of the company to choose a color scheme and UX design for their website</li>
          <li>Deployed front end of application using React</li>
          <li>Designed and coded each page of the website</li>
          <li>Set up EmailJS for easily manageable contact forms</li>
          <li>Planned out backend architecture and UX designs with owners, to be executed over time as the company grows</li>
          <li>Continually update content as needed (completed job pictures, promotions, form changes, etc.)</li>
        </ul>

        <h3>Full Stack Engineer, AdaptivApps</h3>
        <h3>Remote — June 2020 - July 2020</h3>
        <p>AdaptivApps was a stakeholder in an 8 week group project called Lambda Labs (part of Lambda School’s course). My team and I built a real-time messaging application for Angel City Sports, an AdaptivApps’ client, and then integrated the application into their current website. After completing this Labs project, I was hired by AdaptivApps to continue building upon the current codebase (click <a href='https://drive.google.com/file/d/1B4JY_PIulAz9eJG2Sl_kXJMlWo-Ok91N/view' target='_blank' rel='noopener noreferrer'>here</a> to see our final group presentation video, and <a href='https://my.searchlight.ai/amohler09' target='_blank' rel='noopener noreferrer'>here</a> to see my Searchlight profile with peer reviews from my Labs team members).</p>
        <p>Once contracted with AdaptivApps, I worked with the current engineers and UX designer on a daily basis to continue building a web application to be used for a virtual version of the Angel City Games (which are usually held in person every year). I continued to code with the  Prismatopia tech stack which included Apollo Server 2, GraphQL, Prisma, Postgres, AWS, and OAuth.</p>
        <p>Our team met every day with our supervisor to distribute tasks and get status updates for ongoing tasks. During my time with AdaptivApps, I accomplished the following:</p>
        <ul>
          <li>Coded a Sponsor page showcasing everyone who donated to the Games</li>
          <li>Coded a Newsfeed component that allowed authorized users to create, like, and comment on real-time posts from other users, as well as being able to edit and delete their own posts (with or without pictures)</li>
          <li>Updated existing GraphQL backend database to accommodate the frontend changes and additions</li>
          <li>Utilized the UX designer’s Figma files to add mobile styling as well as general style updates using Material UI and CSS</li>
          <li>Pair programmed with other engineers to debug code</li>
        </ul>

        <h3>Team Lead, Lambda school</h3>
        <h3>Remote — April 2020 - July 2020</h3>
        <ul>
          <li>Mentored a group of 8-10 students throughout their journey to help with the transition into the coding environment (becoming acquainted with code editors, different problem solving techniques, Github, Slack, etc.)</li>
          <li>Held team meetings to discuss the current module, clarify any misunderstandings, share any key reminders or changes and give general support to each team member</li>
          <li>Checked that all assigned projects were turned in and met with each team member individually to review their code</li>
          <li>Volunteered for support hours weekly to help any students work on concepts they were struggling with</li>
          <li>Met with supervisors and lesson instructors to provide and receive feedback to help the program run smoothly</li>
        </ul>

        <h3>Poker Dealer, Orange City Racing & Card Club</h3>
        <h3>Orange City, Florida — November 2017 - November 2018</h3>
        <ul>
          <li>Responsible for the distribution of cards and chips to players during a poker game</li>
          <li>Maintained efficient dealing of at least 28 games per hour</li>
          <li>Maintained regular communication with all players and provided exceptional customer service as well as a fair and efficient game for all players</li>
          <li>Ability to do quick math to calculate bets as well as pots</li>
          <li>Quick memory recall and an ability to read poker hands very quickly to identify a winner</li>
        </ul>

        <h3>Call Center Operations Manager, Ring Marketing Group</h3>
        <h3>Orlando, Florida — July 2013 - August 2017</h3>
        <ul>
          <li>Sent daily reports of previous day's results</li>
          <li>Kept a running ledger of income generated and dispositions of leads from every lead source such as HomeAdvisor, Angie’s List, eLocal, telemarketing, canvassing, etc.</li>
          <li>Qualified and scheduled appointments for prospective home improvement buyers to meet with one of RMG's clients to discuss their home improvement needs</li>
          <li>Held weekly meetings with floor managers to discuss current call center production and made changes where necessary</li>
          <li>Held bi-weekly meetings with upper-level managers to discuss floor manager production</li>
          <li>Managed time card system and tracked all employee's attendance, time off, sick days & vacation</li>
          <li>Identified service areas for RMG clients that would be best suited for the client needs and purchased home owner records to use in the dialing system</li>
          <li>Managed dialing system and adjusted calls as needed for business as well as adding and removing licenses to keep costs low</li>
          <li>Created and updated all employee handbooks, drug consent forms, non-compete forms, etc.</li>
          <li>Completed employer I-9's as well as all employee documents and filed per state and federal regulation</li>
          <li>Calculated and ran payroll on a weekly basis</li>
        </ul>

        <h3>Part B Appeals Representative, Novitas Solutions</h3>
        <h3>Mechanicsburg, Pennsylvania — JUL 2012 - JUL 2013</h3>
        <ul>
          <li>Reviewed and processed medical policies, grievances, and denials of medical claims</li>
          <li>Contacted customers to gather details of their case, document the process as it moves through the system, provided a report regarding case statistics, and prepared for appeal hearings</li>
          <li>Analyzed insurance policies connected with a claim to determine company liability</li>
        </ul>
      </div>

      <div className='resume skills'>
        <ul>
          <h3>Personal</h3>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Customer Service</li>
          <li>Written Communication</li>
          <li>Teamwork</li>
          <li>Leadership</li>
          <li>Team Management</li>
          <li>Critical Thinking</li>
          <li>Creativity</li>
          <li>Organization</li>
          <li>Project Planning</li>
        </ul>
        <ul>
          <h3>Technical</h3>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>React Redux</li>
          <li>GraphQL</li>
          <li>Apollo GraphQL</li>
          <li>Prisma</li>
          <li>Node.js</li>
          <li>Github</li>
          <li>CSS/LESS/SASS</li>
          <li>Material UI</li>
          <li>Microsoft Office</li>
        </ul>
      </div>

      <div className='resume education'>
        <h3>Lambda School - October 2019 - June 2020</h3>
        <h3>University of Phoenix - 2010 - 2011</h3>
        <h3>Central Dauphin East Senior High School - 2005 - 2009</h3>
      </div>
    </div>
  )
}