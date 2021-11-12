import Workout from '../../models/workout';
import Exercise from '../../models/exercise';
import ActionTypes from '../constants/action_types';

const WorkoutActions = {
  createWorkout: name => {
    return {
      type: ActionTypes.CREATE_WORKOUT,
      payload: new Workout(name),
    };
  },
  deleteWorkout: id => {
    return {
      type: ActionTypes.DELETE_WORKOUT,
      payload: id,
    };
  },
  selectWorkout: workout => {
    return {
      type: ActionTypes.SELECT_WORKOUT,
      payload: workout,
    };
  },
  addExercise: (workout, exercise) => {
    return {
      type: ActionTypes.ADD_EXERCISE,
      payload: { workout: workout, exercise: new Exercise(exercise) },
    };
  },
  removeExercise: (workout, exercise) => {
    return {
      type: ActionTypes.REMOVE_EXERCISE,
      payload: { workout: workout, exercise: exercise },
    };
  },
  selectExercise: exercise => {
    return {
      type: ActionTypes.SELECT_EXERCISE,
      payload: exercise,
    };
  },
};

export default WorkoutActions;
