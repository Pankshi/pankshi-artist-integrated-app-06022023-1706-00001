import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setusername] = useState("");

  const navigation = useNavigation();

  const onSendPressed = () => {
    // console.warn("Confirm Pressed");
    navigation.navigate("NewPassword");
  };

  const onSignInPressed = () => {
    // console.warn("Sign In Pressed");
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setusername}
        />
        <CustomButton text="Send" onPress={onSendPressed} />

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
    fontSize: 20,
    fontWeight: "bold",
    color: "#051C60",
    margin: 20,
  },
});

export default ForgotPasswordScreen;
