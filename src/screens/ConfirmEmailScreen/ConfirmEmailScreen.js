import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [code, setCode] = useState("");

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    // console.warn("Confirm Pressed");
    navigation.navigate("Home");
  };

  const onSignInPressed = () => {
    // console.warn("Sign In Pressed");
    navigation.navigate("SignIn");
  };

  const onResendPressed = () => {
    // console.warn("Resend Pressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confrim" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 20,
  },
});

export default SignUpScreen;
