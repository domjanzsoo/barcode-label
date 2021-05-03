import * as types from '../actions/actionTypes';

const initialState = {
    labelCollection: {},
    selectedLabel: null,
    selectedElement: null,
    elements: {},
}

function labelReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_NEW_LABEL:
            return {
                ...state,
                labelCollection: {
                    ...state.labelCollection,
                    [action.label.id]: action.label
                }
            };
        case types.ADD_LABEL_ELEMENT:
            return {
                ...state,
                elements: {
                    ...state.elements,
                    [action.element.id]:action.element,
                }
            };
        case types.SELECT_LABEL_ELEMENT:
            return {
                ...state,
                selectedElement: action.element,
            };
        case types.SELECT_LABEL:
            return {
                ...state,
                selectedLabel: state.labelCollection[action.id],
            }
        default:
            return {
                ...state,
            }
    }
}

export default labelReducer;