import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import WorkoutList from '../components/WorkoutList';
import AddButton from '../components/buttons/AddButton';
import WorkoutForm from '../components/forms/WorkoutForm';
import CenterModal from '../components/CenterModal';

const WorkoutsScreen = () => {
  const [modalVisible, onChangeModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      <CenterModal
        visible={modalVisible}
        onClose={() => {
          onChangeModalVisible(false);
        }}>
        <WorkoutForm
          onClose={() => {
            onChangeModalVisible(false);
          }}
        />
      </CenterModal>
      <WorkoutList />
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

export default WorkoutsScreen;
