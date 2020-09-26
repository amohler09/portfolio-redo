import React from 'react';
import HomePage from './pages/HomePage'
import PastProjects from './pages/PastProjects'
import ResumePage from './pages/ResumePage'
import './App.css';

import { Route } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <Route exact path='/'>
      <HomePage />
      </Route>
      <Route path='/PastProjects'>
      <PastProjects />
</Route>
<Route path='/Resume'>
<ResumePage />
</Route>
      
      
      
    </div>  );
}

export default App;
