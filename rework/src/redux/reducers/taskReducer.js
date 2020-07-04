import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function taskReducer(state = initialState.tasks, action){
    switch(action.type){
        case types.LOAD_TASKS_SUCCESS:
            return action.tasks
        case types.CREATE_TASK:
            console.log('what is action ' + action)
            return [...state, action.taskData]
        default: 
            return state
    }
}