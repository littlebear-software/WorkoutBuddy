import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import WorkoutActions from '../redux/actions/workouts';
import { timeSince } from '../logic/time_logic';

const ExerciseCard = ({ workout, exercise, dispatch, onPress }) => {
  console.log(workout);
  console.log(JSON.stringify(exercise));

  let last_set = null;
  if (exercise.sets.length > 0) {
    last_set = exercise.sets[exercise.sets.length - 1];
  }

  const buttons = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => {
        dispatch(WorkoutActions.removeExercise(workout, exercise.id));
      },
    },
  ];

  return (
    <Swipeout
      autoClose={true}
      backgroundColor="white"
      left={buttons}
      style={styles.swipable}>
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{exercise.name}</Text>
        {last_set ? (
          <View style={styles.info}>
            <Text>{timeSince(last_set.timestamp)}</Text>
            <Text>{`${last_set.reps} reps ${last_set.weight} lb`}</Text>
          </View>
        ) : null}
      </Pressable>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  swipable: {
    height: 75,
    width: '100%',
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
  info: {
    height: '100%',
    justifyContent: 'flex-end',
  },
});

export default connect()(ExerciseCard);
