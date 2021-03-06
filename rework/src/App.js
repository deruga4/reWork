import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar'
import ProjectList from './components/project-list'
import CreateProject from './components/create-project'
import CreateTask from './components/create-task'
import ProjectDetail from './components/project-detail'
import TaskList from './components/task-list'
import EditProject from './components/edit-project'
import EditTask from './components/edit-task'

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
        <Route exact path='/project/:id' component={ProjectDetail}></Route> 
        <Route path='/project/edit/:id' component={EditProject}></Route> 
        <Route path='/task/edit/:id' component={EditTask}></Route> 
      </div>
    </Router>
   
  );
}

export default App;
