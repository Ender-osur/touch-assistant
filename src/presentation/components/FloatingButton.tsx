import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Animated from "react-native-reanimated";
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

import ModalContainer from "./modals/ModalContainer";
import { useFloatingButton } from "../hooks/useFloatingButton";
import { styles } from "../styles/FloatingButton.styles";

const FloatingButton: React.FC = () => {
  const {
    animatedStyle,
    handlePress,
    panGesture,
    isModalVisible,
    setIsModalVisible,
  } = useFloatingButton();

  return (
    <>
      <ModalContainer
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.floatingContainer, animatedStyle]}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.containerCircles}>
              <Animated.View style={styles.circle} />
              <Animated.View style={styles.firstRing} />
              <Animated.View style={styles.secondRing} />
              <Animated.View style={styles.thirdRing} />
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default FloatingButton;
