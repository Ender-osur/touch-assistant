import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";
import { Gesture } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const useFloatingButton = () => {
  const { width } = Dimensions.get("window");
  const margin = 0; 

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const opacity = useSharedValue(0.2);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = () => {
    opacity.value = withTiming(1, { duration: 200 });
    setIsModalVisible(true);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
    opacity: opacity.value,
  }));

  const panGesture = Gesture.Pan()
    .onStart(() => {
      translateX.value = offsetX.value;
      translateY.value = offsetY.value;
    })
    .onChange((event) => {
      translateX.value = offsetX.value + event.translationX;
      translateY.value = offsetY.value + event.translationY;
    })
    .onEnd(() => {
      const distanceToLeft = translateX.value;
      const distanceToRight = width - translateX.value;

      console.log("distanceToLeft", distanceToLeft);
      console.log("distanceToRight", distanceToRight);
      if (distanceToLeft < distanceToRight) {
        offsetX.value = margin;
      } else {
        offsetX.value = width - margin;
      }
      translateX.value = withTiming(offsetX.value);
      offsetY.value = translateY.value;
    });

  return {
    animatedStyle,
    handlePress,
    panGesture,
    isModalVisible,
    setIsModalVisible,
  };
};
