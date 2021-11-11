import ActionTypes from '../constants/action_types';
const initial_state = {
  workouts: [],
  selected_workout: null,
};

const WorkoutReducer = (state = initial_state, {type, payload}) => {
  let new_state = Object.assign({}, state);

  switch (type) {
    case ActionTypes.CREATE_WORKOUT:
      new_state.workouts.push(payload);
      break;
    case ActionTypes.SELECT_WORKOUT:
      new_state.selected_workout = payload;
      break;
    case ActionTypes.DELETE_WORKOUT:
      new_state.workouts = new_state.workouts.filter(
        item => item.id !== payload,
      );
      break;
    case ActionTypes.ADD_EXERCISE:
      const {workout, exercise} = payload;
      new_state.workouts.map(w => {
        if (w.id === workout) {
          w.exercises.push(exercise);
          new_state.selected_workout = w;
        }
        return w;
      });
      console.log(JSON.stringify(new_state));
      break;
  }

  return new_state;
};

export default WorkoutReducer;
