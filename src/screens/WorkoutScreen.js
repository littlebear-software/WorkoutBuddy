import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AddButton from '../components/buttons/AddButton';
import {connect} from 'react-redux';
import ExerciseList from '../components/ExerciseList';
import CenterModal from '../components/CenterModal';
import ExerciseForm from '../components/forms/ExerciseForm';

const WorkoutScreen = ({dispatch, state}) => {
  const [modalVisible, onChangeModalVisible] = useState(false);
  const workout = state.selected_workout;

  return (
    <View style={styles.screen}>
      <CenterModal
        visible={modalVisible}
        onClose={() => {
          onChangeModalVisible(false);
        }}>
        <ExerciseForm
          workout={workout.id}
          onClose={() => {
            onChangeModalVisible(false);
          }}
        />
      </CenterModal>
      <ExerciseList />
      <View style={styles.button_container}>
        <AddButton
          onPress={() => {
            onChangeModalVisible(true);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button_container: {
    width: '100%',
    flexDirection: 'row-reverse',
    padding: 25,
  },
});

const mapStateToProps = (state, props) => {
  return {
    state: state.workouts,
    ...props,
  };
};

export default connect(mapStateToProps)(WorkoutScreen);
