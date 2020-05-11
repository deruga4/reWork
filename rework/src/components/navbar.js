import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateProject from './create-project.js'

export default class Navbar extends Component {

	render() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			
			
				<ul className="navbar-nav mr-auto">
					<li>
						<Link to="/" className="navbar-brand">re:Work</Link>
					</li>
					<li className="navbar-item">
						<Link to="/create-project" className="nav-link">Create Project</Link>
					</li>
				</ul>
		</nav>
	);
	}
}