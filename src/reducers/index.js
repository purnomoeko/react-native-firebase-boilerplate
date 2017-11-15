import { combineReducers } from 'redux';
import firebaseReducers from './firebaseReducers';


const rootReducer = combineReducers({
    firebaseReducers,
});

export default rootReducer;
