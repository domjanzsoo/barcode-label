import * as types from '../actions/actionTypes';

const initialState={
    currentOption:'none',
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case types.SWITCH_OPTION:
            return{
                ...state,
                currentOption:action.payload
            }
        default:
            return{
                ...state
            }       
    }
}

export default rootReducer;