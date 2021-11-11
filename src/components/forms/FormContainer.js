import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const FormContainer = ({children, onCancel, onSubmit, valid}) => {
  return (
    <View style={styles.container}>
      <View style={styles.form_container}>{children}</View>
      <View style={styles.button_container}>
        <Pressable
          style={[styles.button, styles.button_left]}
          onPress={onCancel}>
          <Text style={styles.button_text}>Cancel</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.button_right]}
          onPress={onSubmit}
          disabled={!valid}>
          <Text style={[styles.button_text, valid ? null : styles.disabled]}>
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    flex: 1,
  },
  button_container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderTopWidth: 1,
  },
  button_left: {
    borderRightWidth: 0.5,
  },
  button_right: {
    borderLeftWidth: 0.5,
  },
  button_text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'green',
  },
  disabled: {
    color: 'grey',
  },
});

export default FormContainer;
