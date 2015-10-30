import {combineReducers} from 'redux';
import githubReducer from './githubReducer.js';

const rootReducer = combineReducers({
    github: githubReducer
});

export default rootReducer;
