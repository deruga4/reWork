import * as types from './actionTypes'

export function loadProjectsSuccess(projects){
    return {type: types.LOAD_PROJECTS_SUCCESS, projects}
}

export function loadProjects(){
    return function(dispatch){
        // TODO: call the projects api and call the action
    }
}