import * as types from './actionTypes'
import axios from 'axios';

export function loadTasks(id){
  return function(dispatch){
    return axios.get('http://localhost:5000/tasks/', {
      params: {
        id: id
      }
    })
    .then(response => {
      console.log('taskActions response.data: ' + response.data)
      dispatch({type: types.LOAD_TASKS_SUCCESS, tasks: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

}

export function createTask(task){
    return function(dispatch){
      return axios.post('http://localhost:5000/tasks/add', task)
      .then(response =>{
        dispatch({type: types.CREATE_TASK, task})
      })
      .catch((error) => {
        console.log(error)
      })
    }
}

export function deleteTask(id){
  return function(dispatch){
    return
  }
}

export function editTask(id, task){
  return function(dispatch){
    return axios.post('http://localhost:5000/tasks/update/' + id, task)
    .then(response =>{
      dispatch({type: types.EDIT_TASK, id, task: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }
}