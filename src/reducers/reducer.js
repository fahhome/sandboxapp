import   {combineReducers}  from 'redux';
import tasksReducer from './tasksReducer.js'
import usersReducer from './usersReducer.js'
import loadingReducer from './loadingReducer.js'

const reducers = combineReducers({
    tasks: tasksReducer,
    users: usersReducer,
    loader : loadingReducer
});

export default reducers;


