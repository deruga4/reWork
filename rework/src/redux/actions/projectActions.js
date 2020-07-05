import * as types from './actionTypes'
import axios from 'axios';

export function loadProjectsSuccess(projects){
    return {type: types.LOAD_PROJECTS_SUCCESS, projects}
}

export function loadProjects(){
    return function(dispatch){
        return axios.get('http://localhost:5000/projects/')
        .then(response => {
          dispatch(loadProjectsSuccess(response.data))
        })
        .catch((error) => {
          console.log(error);
        })
    }
}

export function deleteProjectsSuccess(data){
  console.log(data)
  return {type: types.DELETE_PROJECT, data}
}

export function deleteProject(id){
  return function(dispatch){
    return axios.delete('http://localhost:5000/projects/' + id)
      .then(response => {
        dispatch(deleteProjectsSuccess(id))
      })
      .catch((error) => {
        console.log(error)
      })

  }
}

export function createProjectSuccess(project){
  return {type: types.CREATE_PROJECT, project}
}

export function createProject(project){
  return function(dispatch){
    console.log('create project action called')
    return axios.post('http://localhost:5000/projects/add', project)
    .then(response => {
      dispatch({type: types.CREATE_PROJECT, project})
    })
    .catch((error) =>{
      console.log(error)
    })
  }
}

export function getById(id){
  return function(dispatch){
    return axios.get('http://localhost:5000/projects/' + id)
    .then(response => {
      dispatch({type: types.GET_PROJECT_BY_ID, id})
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function editProject(id){
  return function(dispatch){
    return axios.post('http://localhost:5000/projects/update/' + id)
  }
}