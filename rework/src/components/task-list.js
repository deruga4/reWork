import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import * as taskActions from '../redux/actions/taskActions'
import * as projectActions from '../redux/actions/projectActions'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {format, isThisSecond} from 'date-fns'

// const Projects = ({ projects }) => (
  
// )

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this)

    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    const {tasks, actions} = this.props
    // if (projects.length === 0){
    //   this.props.actions.loadProjects().catch(error => {
    //     alert('Loading projects failed ' + error)
    //   })
    // }
    actions.loadTasks(this.props.match.params.id)
    actions.loadProjects().then(() => {
      this.setState({projects: this.props.projects})
      console.log(this.state.projects)
      console.log(this.props.tasks)
    })
    
    console.log(this.props.match.params.id)
  }

  async deleteTask(id){
    this.props.actions.deleteTask(id)  
  }

  render() {
    return (
      <div>
        <h2>Tasks</h2>
          <div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Project</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.tasks.map(task =>{
                  return (
                    <tr key={task._id}>
                      <td>{this.state.projects.filter(project => project._id == task.project)
                      .map(project => project.name)}</td>
                      <td>{task.name}</td>
                      <td>{task.description}</td>
                      <td>{task.status}</td>
                      <td>{format(new Date(task.startDate), 'yyyy-MM-dd GGGG')}</td>
                      <td>{task.endDate}</td>
                      <td>
                        <Link to={"/task/edit/"+task._id}>edit</Link> | <Link to="/" onClick={() => this.deleteTask(task._id)}>delete</Link>
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

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  
}

function mapStateToProps(state){
  return{
    tasks: state.tasks,
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions:{
      loadTasks: bindActionCreators(taskActions.loadTasks, dispatch),
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch),
      getProjectById: bindActionCreators(projectActions.getById, dispatch),
      deleteTask: bindActionCreators(taskActions.deleteTask, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)