import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar'
import ProjectList from './components/project-list'

function App() {
  return (
    
    <Router>
      <div className='container'>
        <Navbar></Navbar>
        <br></br>
        <Route path="/" exact component={ProjectList} />
        {/* <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} /> */}
      </div>
    </Router>
   
  );
}

export default App;
