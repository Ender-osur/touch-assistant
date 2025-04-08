import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  floatingContainer: {
    position: "absolute",
    bottom: 50,
    right: 30,
  },
  containerCircles: {
    backgroundColor: "#405",
    justifyContent: "center",
    alignItems: "center",
  },
  firstRing: {
    height: 60,
    width: 60,
    backgroundColor: "#61696d",
    position: "absolute",
    borderRadius: 50,
  },
  secondRing: {
    height: 50,
    width: 50,
    backgroundColor: "#91969c",
    position: "absolute",
    borderRadius: 50,
  },
  thirdRing: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    position: "absolute",
    borderRadius: 50,
  },
  circle: {
    height: 80,
    width: 80,
    backgroundColor: "#202931",
    position: "absolute",
    borderRadius: 50,
  },
});
