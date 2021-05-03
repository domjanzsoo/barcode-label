import * as types from './actionTypes';

export function switchEditOption(option){
       return {
        type: types.SWITCH_OPTION,
        payload: option
       }    
};

export function initLabel(label){
       return {
        type: types.ADD_NEW_LABEL,
        label: label
       }    
};

export function selectLabel(id) {
       return {
       type: types.SELECT_LABEL,
       id: id
       }
}

export function addNewLabelContent(elm){
       return {
              type: types.ADD_LABEL_ELEMENT,
              element: elm  
       }
}

export function selectLabelElement(elm){
       return {
              type: types.SELECT_LABEL_ELEMENT,
              element: elm  
       }
}


