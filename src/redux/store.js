import { createStore, combineReducers } from 'redux';
import WorkoutReducer from './reducers/workouts';

const reducer = combineReducers({ workouts: WorkoutReducer });

const store = createStore(reducer);

export default store;
