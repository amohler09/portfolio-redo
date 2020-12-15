import React from 'react'
import './HomePage.scss'

const Loading = require('../img/loading.png')

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='header'>
        <h1>Amber Mohler</h1>
        <h2>Web Developer (In Training)</h2>
        <img src={Loading} alt='loading bar' />
      </div>
      <div className='about-me'>
        <p>Hello, and thank you for visiting! I've moved around the country and lived in 10 different places in the last 10 years, but I've recently landed on Tampa, Florida as a stopping ground (at least for a while). I love to question everything and figure out how and why things work, which means I spend a lot of time reading, listening to podcasts, or starting an odd project based on something I've just learned. I am that person that loves murder mysteries, conspiracy theories, or any paranormal matter really - at least our conversations would never get boring! I am also very passionate about animals and plan to foster and/or rehabilitate them in the future when I am able to. In the meantime, I enjoy spoiling my 8 year old Chiweenie named Boston.</p>
        <p>I love creating art and trying new techniques and styles, which is why I believe I've enjoyed Web Development so far. The process of starting with just a simple idea, planning it out, and then having the ability to bring it to life has been one of the most rewarding things for me so far in life. I started at Lambda School in October of 2019 and was introduced to a world that I didn't think I would ever make it in. Everybody seemed so far advanced in their knowledge, which drove me to push myself harder and try to catch up with the curve. One very important skill that I've gained from Lambda is knowing
        <span style={{ fontStyle: 'italic' }}> how to learn</span>, so I will not be afraid of  switching to a different tech stack or learning a new coding language to excel in my field. The code is just a paintbrush, and the browser is the canvas - the only limit to what I can paint is what my imagination holds.</p>
        <p>If you're interested in viewing some peer reviews from my colleauges at Lamba, <a href='https://my.searchlight.ai/amohler09' target='blank' rel='noopener'>visit my Searchlight Page</a>!</p>
      </div>
     
         </div>
  )
}