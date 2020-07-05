import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import * as taskActions from '../redux/actions/taskActions'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {format} from 'date-fns'

// const Projects = ({ projects }) => (
  
// )

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this)
  }

  componentDidMount() {
    // if (projects.length === 0){
    //   this.props.actions.loadProjects().catch(error => {
    //     alert('Loading projects failed ' + error)
    //   })
    // }
    this.props.loadTasks(this.props.match.params.id)
    console.log(this.props.match.params.id)
  }

  deleteTask(id){
    this.props.actions.deleteTask(id)
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
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.tasks.map(task =>{
                  return (
                    <tr key={task._id}>
                      <td>{task.name}</td>
                      <td>{task.description}</td>
                      <td>{format(new Date(task.startDate), 'yyyy-MM-dd GGGG')}</td>
                      <td>{task.endDate}</td>
                      <td>
                        <Link to={"/edit/"+task._id}>edit</Link> | <Link to="/" onClick={() => this.deleteTask(task._id)}>delete</Link>
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
  loadTasks: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch){
  return{
    loadTasks: bindActionCreators(taskActions.loadTasks, dispatch),
    deleteTask: bindActionCreators(taskActions.deleteTask, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)