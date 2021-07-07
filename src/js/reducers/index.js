// Dependencies
import {combineReducers} from 'redux';

// Reducers
import logReducer from './log';
import researchReducer from './research';
import listReducer from './list';


const rootReducer = combineReducers({
    logReducer,
    researchReducer,
    listReducer
});
export default rootReducer;