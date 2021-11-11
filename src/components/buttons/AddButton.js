import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const AddButton = ({onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  button_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddButton;
