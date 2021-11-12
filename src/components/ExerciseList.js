import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ExerciseCard from './ExerciseCard';
import { connect } from 'react-redux';
import BottomModal from './BottomModal';
import SetList from './SetList';
import WorkoutActions from '../redux/actions/workouts';

const ExerciseList = ({ state, dispatch, workout }) => {
  const [visible, onChangeVisible] = useState(false);

  return (
    <View style={styles.container}>
      <BottomModal
        height="80%"
        visible={visible}
        onClose={() => {
          onChangeVisible(false);
        }}>
        <SetList workout={workout.id} exercise={state.selected_exercise} />
      </BottomModal>
      <FlatList
        contentContainerStyle={styles.list}
        style={styles.container}
        data={state.selected_workout.exercises}
        renderItem={({ item }) => (
          <ExerciseCard
            key={item.id}
            workout={workout.id}
            exercise={item}
            onPress={() => {
              dispatch(WorkoutActions.selectExercise(item));
              onChangeVisible(true);
            }}
          />
        )}
      />
    </View>
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
