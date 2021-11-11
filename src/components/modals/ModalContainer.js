import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';

const ModalContainer = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.modal}>
      <View style={styles.container}>{children}</View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  container: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '75%',
    height: 200,
    borderRadius: 15,
    backgroundColor: 'rgb(247,247,247)',
  },
});

export default ModalContainer;
