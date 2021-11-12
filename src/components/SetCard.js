import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import WorkoutActions from '../redux/actions/workouts';
import moment from 'moment';

const SetCard = ({ dispatch, workout, exercise, set }) => {
  const buttons = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => {
        dispatch(WorkoutActions.removeSet(workout, exercise, set.id));
      },
    },
  ];

  return (
    <Swipeout
      autoClose={true}
      backgroundColor="white"
      left={buttons}
      style={styles.swipable}>
      <View style={styles.container}>
        <Text style={styles.time}>
          {moment(set.timestamp).format('h:mm a')}
        </Text>
        <Text style={styles.reps}>{`${set.reps} rep`}</Text>
        <Text style={styles.weight}>{`${set.weight} lb`}</Text>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  swipable: {
    width: '100%',
    height: 55,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  container: {
    padding: 15,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  reps: {
    color: 'green',
  },
  weight: {
    color: 'orange',
  },
});

export default SetCard;
