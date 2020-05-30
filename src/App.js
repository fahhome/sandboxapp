import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todostab from './components/Todostab.js';
import Userstab from './components/Userstab.js';
import {BrowserRouter as Router , Switch , Route ,Link} from 'react-router-dom' ;

function App() {
  return (

   <Router> 
    <div className="App">
      <h1>ToDo Application</h1>
      <Link to="/">
        <button>Todo</button>
      </Link>
      <Link to="/users">
         <button>Users</button>
      </Link>
   
      <Switch>
           
      <Route  path="/" exact component={Todostab}/>

      <Route  path="/users" exact component={Userstab}/>

      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
