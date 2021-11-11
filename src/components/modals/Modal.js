import React, {useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import ModalContainer from './ModalContainer';

const MyModal = ({show, hide}) => {
  const [visible, onChangeVisible] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}
      onRequestClose={() => {
        onChangeVisible(false);
      }}>
      <ModalContainer />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
});

export default MyModal;
