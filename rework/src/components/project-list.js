import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Project = props => (
    <tr>
      <td>{props.project.name}</td>
      <td>{props.project.description}</td>
      <td>{props.project.startDate}</td>
      <td>{props.project.endDate}</td>
      <td>
        <Link to={"/edit/"+props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
      </td>
    </tr>
  )

  export default class ProjectList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteProject = this.deleteProject.bind(this)
  
      this.state = {projects: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/projects/')
        .then(response => {
          this.setState({ projects: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteProject(id) {
      axios.delete('http://localhost:5000/projects/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        projects: this.state.projects.filter(el => el._id !== id)
      })
    }
  
    projectList() {
      return this.state.projects.map(currentproject => {
        return <Project project={currentproject} deleteProject={this.deleteProject} key={currentproject._id}/>;
      })
    }
  
    render() {
      return (
        <div>
          <h3>All Projects</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.projectList() }
            </tbody>
          </table>
        </div>
      )
    }
  }