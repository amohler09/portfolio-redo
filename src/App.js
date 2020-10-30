import React from 'react';
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage'
import PastProjects from './pages/PastProjects'
import ResumePage from './pages/ResumePage'
import Contact from './pages/Contact'
import './App.scss';

import { Route } from 'react-router-dom'

function App() {
  
  return (
    <main>
      <div className='navbar'>
        <NavBar />
      </div>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/PastProjects'>
        <PastProjects />
      </Route>
      <Route path='/Resume'>
        <ResumePage />
      </Route>
      <Route path='/Contact'>
        <Contact />
      </Route>
    </main>  );
}

export default App;
