import React from 'react';
import './App.css';
import Identity from './components/myPresentation/Identity';
import Stacks from './components/myPresentation/StackSkills';
import Soft from './components/myPresentation/SoftSkills';
import Education from './components/myPresentation/Education';
import CenterInterest from './components/myPresentation/CenterInterest';
import Contact from './components/myPresentation/Contact';

function App() {
  return (
    <div className="App d-flex flex-column flex-fill border-blue">
      <Identity />
      <Stacks />
      <Soft />
      <Education />
      <CenterInterest />
      <Contact />
    </div>
  );
}

export default App;
