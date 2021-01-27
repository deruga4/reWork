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
        case types.EDIT_PROJECT:
            return Object.assign({}, state, {
                data: state.data.map(item => {
                    return item.id === action.payload.id ? action.payload : item
                })
            })
            // return state.map((project, index) => {
            //     if (action.id !== project.id){
            //         return project
            //     }
            //     return{
            //         ...project,
            //         ...action.project
            //     }
            // })
        default: 
            return state
    }
}