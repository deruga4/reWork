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
            return Object.assign({}, state, {
                data: state.data.map(item => {
                    return item.id === action.payload.id ? action.payload : item
                })
            })

        // case INCREMENT_BIRD:
        //     const bird = state.find(b => action.bird === b.name);
        //     const birds = state.filter(b => action.bird !== b.name);
        //     return [
        //         ...birds,
        //         {
        //         ...bird,
        //         views: bird.views + 1
        //         }
        //     ];
        default: 
            return state
    }
}