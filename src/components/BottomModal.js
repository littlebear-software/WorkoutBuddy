import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const BottomModal = ({ visible, onClose, children, height }) => {
  return (
    <GestureRecognizer
      onSwipeDown={() => {
        onClose();
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={styles.modal}
        onRequestClose={() => {
          onClose();
        }}>
        <View style={styles.background}>
          <View style={[styles.container, { height: height }]}>{children}</View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: 'white',
    marginTop: 'auto',
    marginBottom: 0,
  },
});

export default BottomModal;
