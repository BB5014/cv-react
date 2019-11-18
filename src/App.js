import React from 'react';
import './App.css';
import Identity from './components/myPresentation/Identity';
import Stacks from './components/myPresentation/StackSkills';

function App() {
  return (
    <div className="App d-flex flex-column flex-fill border-blue">
      <Identity />
      <Stacks />
    </div>
  );
}

export default App;
