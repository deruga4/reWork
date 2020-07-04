import * as types from './actionTypes'
import axios from 'axios';

export function loadTasks(){
    return function(dispatch){
        // TODO: call the projects api and call the action
        return function(dispatch){
            return axios.get('http://localhost:5000/tasks/')
            .then(response => {
              dispatch({type: types.LOAD_TASKS_SUCCESS, tasks: response.data})
            })
            .catch((error) => {
              console.log(error);
            })
        }
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