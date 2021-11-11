import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import FormContainer from './FormContainer';
import {connect} from 'react-redux';
import WorkoutActions from '../../redux/actions/workouts';

const WorkoutForm = ({dispatch, onClose}) => {
  const [name, onChangeName] = useState('');
  const [valid, onChangeValid] = useState(false);

  const submit = () => {
    dispatch(WorkoutActions.createWorkout(name));
    onClose();
  };
  const cancel = () => {
    onClose();
  };

  return (
    <FormContainer valid={valid} onSubmit={submit} onCancel={cancel}>
      <View style={styles.form}>
        <Text style={styles.form_title}>New Workout</Text>
        <Text style={styles.form_description}>
          Suggestions: Muscle Group, Day of Week, etc.
        </Text>
        <TextInput
          placeholder="Upper Body, Monday, Pull..."
          style={styles.form_input}
          value={name}
          onChangeText={value => {
            onChangeName(value);
            onChangeValid(value && value.trim() !== '');
          }}
        />
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  form_title: {
    fontWeight: 'bold',
  },
  form_description: {
    margin: 10,
    color: 'grey',
    textAlign: 'center',
  },
  form_input: {
    width: '90%',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default connect()(WorkoutForm);
