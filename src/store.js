import { createStore, combineReducers } from 'redux';
import  rootReducer  from './reducers/editOptionReducer';
import labelReducer from './reducers/labelContentReducer';

let mainReducer = combineReducers({
    editOption:rootReducer,
    labelContent:labelReducer,
});


const store =  createStore(
        mainReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

export default store;