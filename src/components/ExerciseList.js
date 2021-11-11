import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ExerciseCard from './ExerciseCard';
import {connect} from 'react-redux';

const ExerciseList = ({state}) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      style={styles.container}
      data={state.selected_workout.exercises}
      renderItem={({item}) => <ExerciseCard key={item.id} exercise={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

const mapStateToProps = (state, props) => {
  return {
    state: state.workouts,
    ...props,
  };
};

export default connect(mapStateToProps)(ExerciseList);
