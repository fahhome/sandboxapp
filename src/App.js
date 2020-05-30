import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todostab from './components/Todostab.js';
import Userstab from './components/Userstab.js';

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <Todostab/>
    </div>
  );
}

export default App;
