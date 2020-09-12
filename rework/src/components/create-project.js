import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as projectActions from '../redux/actions/projectActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'



class CreateProject extends Component {
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
  }

  onChange(e){
    console.log(e)
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeStartDate(e){
    this.setState({startDate: e})
  }
  onChangeEndDate(e){
    this.setState({endDate: e} )
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

    console.log(this.state)
    const newProject = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    this.props.createProject(newProject)
     
    window.location = '/'

  }

  render() {
    return (
    <div>
      <br></br>
      <h3>Create New Project</h3>
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
          <input type="submit" value="Create Project" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    
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
    createProject: bindActionCreators(projectActions.createProject, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)