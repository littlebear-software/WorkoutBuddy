import React, {useState} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
// import {connect} from 'react-redux';
// import WorkoutActions from '../redux/actions/workouts';

const ExerciseCard = ({exercise, dispatch, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{exercise.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    borderColor: 'grey',
    borderBottomWidth: 1,
    padding: 15,
  },
});

export default ExerciseCard;
