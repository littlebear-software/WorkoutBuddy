import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import ModalContainer from './modals/ModalContainer';

const CenterModal = ({visible, onClose, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}
      onRequestClose={() => {
        onClose();
      }}>
      <ModalContainer>{children}</ModalContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
});

export default CenterModal;
