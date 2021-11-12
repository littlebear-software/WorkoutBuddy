import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import RightArrow from '../icons/RightArrow';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import WorkoutActions from '../redux/actions/workouts';
import Swipeout from 'react-native-swipeout';

const WorkoutCard = ({ workout, dispatch }) => {
  const navigation = useNavigation();

  const buttons = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      onPress: () => {
        dispatch(WorkoutActions.deleteWorkout(workout.id));
      },
    },
  ];

  return (
    <Swipeout
      autoClose={true}
      backgroundColor="white"
      left={buttons}
      style={styles.swipable}>
      <Pressable
        style={styles.container}
        onPress={() => {
          dispatch(WorkoutActions.selectWorkout(workout));
          navigation.navigate('Workout', { name: workout.name });
        }}>
        <Text style={styles.title}>{workout.name}</Text>
        <RightArrow />
      </Pressable>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  swipable: {
    height: 75,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 5 },
    alignSelf: 'center',
    marginVertical: 15,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    height: '100%',
    textTransform: 'capitalize',
  },
});

export default connect()(WorkoutCard);
