// Dependencies
import {combineReducers} from 'redux';

// Reducers
import logReducer from './log';
import researchReducer from './research';


const rootReducer = combineReducers({
    logReducer,
    researchReducer,
});
export default rootReducer;