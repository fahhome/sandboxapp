import   {combineReducers}  from 'redux';
import tasksReducer from './tasksReducer.js'
import usersReducer from './usersReducer.js'

const reducers = combineReducers({
    tasks: tasksReducer,
    users: usersReducer
});

export default reducers;