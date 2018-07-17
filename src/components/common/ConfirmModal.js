import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, StyleSheet, View, Modal,
} from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  cardSection: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
  },
});

export const ConfirmModal = ({
  children, visible, onConfirm, onCancel,
}) => (
  <Modal
    transparent
    visible={visible}
    animationType="slide"
    onRequestClose={() => {}}
  >
    <View style={styles.container}>
      <CardSection style={styles.cardSection}>
        <Text style={styles.text}>{children}</Text>
      </CardSection>
      <CardSection>
        <Button onPress={onConfirm}> Confirm </Button>
        <Button onPress={onCancel}> Cancel </Button>
      </CardSection>
    </View>
  </Modal>
);

ConfirmModal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
