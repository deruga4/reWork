import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to="/" className="brand-logo">re:Work</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/create-project" className="nav-link">Create Project</Link></li>
          <li><Link to="/create-task" className="nav-link">Create Task</Link></li>
          <li><Link to="/all-tasks" className="nav-link">Task List</Link></li>
        </ul>
      </div>
    </nav>
  );
  }
}         