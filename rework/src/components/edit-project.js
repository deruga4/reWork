import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as projectActions from '../redux/actions/projectActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios';


class EditProject extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangeEndDate = this.onChangeEndDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
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

    let projectId = this.props.match.params.id
    
    
    

    if (!projectId){
        console.log('Edit project: an error occurred!')
        window.location = '/';
    }



    // get the project info from db
    axios.get('http://localhost:5000/projects/' + projectId)
    .then(response => {
        let projectData = response.data
        console.log(projectData)
        this.setState({
            name: projectData.name,
            description: projectData.description,
            status: projectData.status,
            startDate: Date.parse(projectData.startDate),
            endDate: Date.parse(projectData.endDate)
        })
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  onChange(e){
    console.log(e)
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeStartDate(e){
    this.setState({startDate: new Date(e)})
  }
  onChangeEndDate(e){
    console.log(e)
    this.setState({endDate: new Date(e)} )
  }
  

  onSubmit(e) {
    e.preventDefault();

    // const project = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   startDate: this.state.startDate,
    //   endDate: this.state.endDate,
    //   status: this.state.status
    // }

    // console.log(project);

    // axios.post('http://localhost:5000/projects/add', project)
    //   .then(res => console.log(res.data));

    const newProject = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    let projectId = this.props.match.params.id
    this.props.editProject(projectId, newProject)

    window.location = '/';
  }

  render() {
    return (
    <div>
    <br></br>
    <h3>Edit Project</h3>
    <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <label>Project Name</label>
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
        <input type="submit" value="Save Project" className="btn btn-primary" />
        </div>
    </form>
    </div>
    )
  }
}

EditProject.propTypes = {
  editProject: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    projects: state.projects
  }
}

// function mapDispatchToProps(dispatch){
//   return{
//     actions: {
//       createProject: bindActionCreators(projectActions.createProject, dispatch),
//     }
//   }
// }
function mapDispatchToProps(dispatch){
  return{
    editProject: bindActionCreators(projectActions.editProject, dispatch),
    loadProjects: bindActionCreators(projectActions.loadProjects, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject)