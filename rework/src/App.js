import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar'
import ProjectList from './components/project-list'
import CreateProject from './components/create-project'
import CreateTask from './components/create-task'
import ProjectDetail from './components/project-detail'
import TaskList from './components/task-list'

function App() {
  return (
    
    <Router>
      <div className='container'>
        <Navbar></Navbar>
        <br></br>
        <Route path="/" exact component={ProjectList} />
        <Route path='/create-project' component={CreateProject}></Route>
        <Route path='/create-task' component={CreateTask}></Route>
        <Route path='/all-tasks' component={TaskList}></Route> 
        <Route path='/project/:id' component={TaskList}></Route> 
        <Route path='/project/edit/:id' component={TaskList}></Route> 
      </div>
    </Router>
   
  );
}

export default App;
