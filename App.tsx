import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FloatingButton from "./src/presentation/components/FloatingButton";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FloatingButton />
    </GestureHandlerRootView>
  );
}
