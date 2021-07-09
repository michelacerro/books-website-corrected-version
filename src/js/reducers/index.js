// Dependencies
import {combineReducers} from 'redux';

// Reducers
import researchReducer from './research';
import listReducer from './list';


const rootReducer = combineReducers({
    researchReducer,
    listReducer
});
export default rootReducer;