import ActionTypes from '../constants/action_types';
const initial_state = {
  workouts: [
    {
      id: 0,
      name: 'Push Day',
      exercises: [
        {
          id: 0,
          name: 'BB Bench Press',
          sets: [
            {
              id: 6,
              reps: 5,
              weight: 155,
              timestamp: new Date(2021, 10, 5, 17, 34, 0),
            },
            {
              id: 5,
              reps: 5,
              weight: 155,
              timestamp: new Date(2021, 10, 5, 17, 32, 0),
            },
            {
              id: 4,
              reps: 5,
              weight: 155,
              timestamp: new Date(2021, 10, 5, 17, 30, 0),
            },
            {
              id: 3,
              reps: 5,
              weight: 155,
              timestamp: new Date(2021, 10, 9, 17, 34, 0),
            },
            {
              id: 2,
              reps: 5,
              weight: 155,
              timestamp: new Date(2021, 10, 9, 17, 32, 0),
            },
            {
              id: 1,
              reps: 5,
              weight: 155,
              timestamp: new Date(2021, 10, 9, 17, 30, 0),
            },
          ],
        },
      ],
    },
  ],
  selected_workout: null,
  selected_exercise: null,
};

const WorkoutReducer = (state = initial_state, { type, payload }) => {
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
        item => item.id !== payload
      );
      break;
    case ActionTypes.ADD_EXERCISE:
      new_state.workouts.map(w => {
        if (w.id === payload.workout) {
          w.exercises.push(payload.exercise);
          new_state.selected_workout = w;
        }
        return w;
      });
      console.log(JSON.stringify(new_state));
      break;
    case ActionTypes.REMOVE_EXERCISE:
      new_state.workouts.map(w => {
        if (w.id === payload.workout) {
          w.exercises = w.exercises.filter(
            item => item.id !== payload.exercise
          );
        }
        return w;
      });
      console.log(JSON.stringify(new_state));
      break;
    case ActionTypes.SELECT_EXERCISE:
      new_state.selected_exercise = payload;
      break;
  }

  return new_state;
};

export default WorkoutReducer;
