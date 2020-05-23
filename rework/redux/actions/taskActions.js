import * as types from './actionTypes'

export function loadTasksSuccess(tasks){
    return {type: types.LOAD_TASKS_SUCCESS, tasks}
}

export function loadTasks(){
    return function(dispatch){
        // TODO: call the projects api and call the action
    }
}