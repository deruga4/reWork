import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function projectReducer(state = initialState.projects, action){
    switch(action.type){
        case types.CREATE_PROJECT:{
            console.log(action)
            return [...state, action.projectData]
        }
        case types.LOAD_PROJECTS_SUCCESS:
            return action.projects
        case types.DELETE_PROJECT:{
            return [...state.filter((data) => data._id !== action.data)]
        }
        default: 
            return state
    }
}