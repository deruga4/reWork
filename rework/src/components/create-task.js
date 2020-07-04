import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as taskActions from '../redux/actions/taskActions'
import * as projectActions from '../redux/actions/projectActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangeEndDate = this.onChangeEndDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this)

    this.state = {
      project: null,
      name: '',
      description: '',
      status: 'Not Started',
      startDate: new Date(),
      endDate: new Date()
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/projects')
    //     .then(response => {
    //         if(response.data.length > 0){
    //             this.setState({
    //                 statuses: response.Project.path('status').enumValues
    //             })
    //         }
    //     })
    //     .catch((error) =>{
    //       console.log(error)
    //     })

    this.props.loadProjects()
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeStartDate(e){
    this.setState({startDate: e})
  }
  onChangeEndDate(e){
    this.setState({endDate: e} )
  }
  onChangeProject(e){
    console.log('onchange project: ' + e.target.value)
    this.setState({project: e.target.value})
  }

  deleteTask(id){
    // TODO: Implement delete task
    // this.props.actions.deleteTask(id)
  }

  onSubmit(e) {
    e.preventDefault();

    // const project = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   startDate: tprojecthis.state.startDate,
    //   endDate: this.state.endDate,
    //   status: this.state.status
    // }

    // console.log(project);

    // axios.post('http://localhost:5000/projects/add', project)
    //   .then(res => console.log(res.data));

    console.log(this.props.projects)
    console.log(this.state.project)
    const newTask = {
      project: this.state.project,
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    this.props.createTask(newTask)

    window.location = '/';
  }

  render() {
    return (
    <div>
      <br></br>
      <h3>Create New Task</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 

          <label>Parent project</label>
          <div className="form-group">
            <select
              selected={this.state.project_id}
              onChange={this.onChangeProject}
              name='project'>
              
              {this.props.projects.map(project => {
                return (<option value={project._id} key={project._id}>{project.name}</option>)
              })}
            </select>
            
          </div>
        
          <label>Task Name</label>
          <input required type="text" id="project-name" name="name" value={this.state.name} onChange={this.onChange}></input>
        </div>
        <div className="form-group"> 
          <label>Description</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChange}
              name='description'
              />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <div>
            <DatePicker
              required
              selected={this.state.startDate}
              onChange={this.onChangeStartDate}
              name='startDate'
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>End Date</label>
          <div>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.onChangeEndDate}
              name='endDate'
            />
          </div>
        </div>

        <div className="form-group">
          <label>Status</label>
            <select
              selected={this.state.status}
              onChange={this.onChange}
              name='status'>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
            
        </div>
<br></br>
        <div className="form-group">
          <input type="submit" value="Create Project" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

CreateTask.propTypes = {
  tasks: PropTypes.array.isRequired,
  createTask: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    tasks: state.tasks,
    projects: state.projects
  }
}

// function mapDispatchToProps(dispatch){
//   return{
//     actions: {
//       createProject: bindActionCreators(projectActions.createProject, dispatch),
//     }
//   }project
// }
function mapDispatchToProps(dispatch){
  return{
    createTask: bindActionCreators(taskActions.createTask, dispatch),
    loadProjects: bindActionCreators(projectActions.loadProjects, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask)