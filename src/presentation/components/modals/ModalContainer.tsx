import React from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../../styles/modals/ModalContainer.style";

interface ModalContainerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView} >
        <Modal
          transparent
          animationType="slide"
          visible={isOpen}
          onRequestClose={onClose}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {children}
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ModalContainer;
