import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this)
    this.onChangeEndDate = this.onChangeEndDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      status: 'not-started',
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

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeStartDate(date) {
    this.setState({
      startDate: date
    })
  }

  onChangeEndDate(date) {
    this.setState({
      endDate: date
    })
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const project = {
      name: this.state.name,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      status: this.state.status
    }

    console.log(project);

    axios.post('http://localhost:5000/projects/add', project)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <br></br>
      <h3>Create New Project</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Project Name</label>
          <input required type="text" id="project-name" name="project-name" value={this.state.name} onChange={this.onChangeName}></input>
        </div>
        <div className="form-group"> 
          <label>Description</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Start Date</label>
          <div>
            <DatePicker
              required
              selected={this.state.startDate}
              onChange={this.onChangeStartDate}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>End Date</label>
          <div>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.onChangeEndDate}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Status</label>
            <select
              selected={this.state.status}
              onChange={this.onChangeStatus}>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
            
        </div>
<br></br>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}