import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as projectActions from '../redux/actions/projectActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios';
import {format} from 'date-fns'


class EditProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      status: 'Not Started',
      startDate: new Date(),
      endDate: new Date(),
      validProjectId: false
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
    
    if (projectId){
        this.state.validProjectId = true
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

  render() {
    return (
    <div>
        <br></br>
        <h3>{this.state.name}</h3>
        <p>{this.state.description}</p>
        <p>Start date: {format(this.state.startDate, 'yyyy/MM/dd')}</p>
        <p>End date: {format(this.state.endDate, 'yyyy/MM/dd')}</p>
        <p>Status: {this.state.status}</p>

   
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