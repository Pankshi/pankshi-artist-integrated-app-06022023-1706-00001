import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AnimatedLottieView
        source={require("../../../assets/AppLoader.json")}
        autoPlay
        loop
      ></AnimatedLottieView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default AppLoader;
