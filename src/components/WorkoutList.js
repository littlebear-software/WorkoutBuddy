import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import WorkoutCard from './WorkoutCard';
import {connect} from 'react-redux';

const WorkoutList = ({state}) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      style={styles.container}
      data={state.workouts}
      renderItem={({item}) => <WorkoutCard key={item.id} workout={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 15,
  },
});

const mapStateToProps = (state, props) => {
  return {
    state: state.workouts,
    ...props,
  };
};

export default connect(mapStateToProps)(WorkoutList);
