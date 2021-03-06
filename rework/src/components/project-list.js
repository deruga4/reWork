import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import * as projectActions from '../redux/actions/projectActions'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {format} from 'date-fns'

// const Projects = ({ projects }) => (
  
// )

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this)
  }

  componentDidMount() {
    const {projects, actions} = this.props
    // if (projects.length === 0){
    //   this.props.actions.loadProjects().catch(error => {
    //     alert('Loading projects failed ' + error)
    //   })
    // }
    actions.loadProjects()
    console.log(this.props.projects) 
  }

  deleteProject(id){
    this.props.actions.deleteProject(id)
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
          <div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.projects.map(project =>{
                  return (
                    <tr key={project._id}>
                      <td><Link to={`project/${project._id}`}>{project.name}</Link></td>
                      <td>{project.description}</td>
                      <td>{project.status}</td>
                      <td>{format(new Date(project.startDate), 'yyyy-MM-dd GGGG')}</td>
                      <td>{project.endDate}</td>
                      <td>
                        <Link to={"/project/edit/"+project._id}>edit</Link> | <Link to="/" onClick={() => this.deleteProject(project._id)}>delete</Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return{
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch),
      deleteProject: bindActionCreators(projectActions.deleteProject, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)