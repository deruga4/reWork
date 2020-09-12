import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function taskReducer(state = initialState.tasks, action){
    switch(action.type){
        case types.LOAD_TASKS_SUCCESS:
            console.log('reducer action.tasks: ' + action.tasks)
            return action.tasks
        case types.CREATE_TASK:
            return [...state, action.taskData]
        case types.EDIT_TASK:
            return state.map((task, index) => {
                if (action.id !== task.id){
                    return task
                }
                return{
                    ...task,
                    ...action.task
                }
            })
        default: 
            return state
    }
}