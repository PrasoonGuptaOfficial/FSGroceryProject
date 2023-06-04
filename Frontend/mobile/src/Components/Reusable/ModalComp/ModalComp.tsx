import React from 'react';
import {Modal} from 'react-native';

const ModalComp = (props: any): React.JSX.Element => {
  const {children, modalVisibleFlag, modalVisibleClose} = props;
  return (
    <Modal
      visible={modalVisibleFlag}
      transparent={true}
      animationType="slide"
      onRequestClose={modalVisibleClose}>
      {children}
    </Modal>
  );
};

export default ModalComp;
