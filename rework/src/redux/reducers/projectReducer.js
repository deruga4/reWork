import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function projectReducer(state = initialState.projects, action){
    switch(action.type){
        case types.CREATE_PROJECT:{
            console.log(action)
            console.log(action.projectData)
            return [...state, action.projectData]
        }
        case types.LOAD_PROJECTS_SUCCESS:
            return action.projects
        case types.DELETE_PROJECT:{
            console.log(action.data)
        
            return [...state.filter((data) => data._id !== action.data)]
        }
        default: 
            return state
    }
}