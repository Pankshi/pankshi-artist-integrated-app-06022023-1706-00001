import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppLoader from "../../components/AppLoader";
import axios from "axios";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const [confirmemailPending, setconfirmemailPending] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const [mail, setEmail] = useState(route.params?.email);

  const onConfirmPressed = () => {
    setconfirmemailPending(true);
    axios
      .post(
        "https://us-central1-groovy-bonus-378512.cloudfunctions.net/pankshi_confirm_otp",
        {
          otp: code,
          email: mail,
        }
      )
      .then((response) => {
        if (response.data == "code matched" && response.status == 200) {
          setTimeout(() => {
            setconfirmemailPending(false);
          }, 3000);
          navigation.navigate("Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSignInPressed = () => {
    // console.warn("Sign In Pressed");
    navigation.navigate("SignIn");
  };

  const onResendPressed = () => {
    console.warn("Resend Pressed");
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Confirm your Email</Text>
          <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
          />
          <CustomButton text="Confirm" onPress={onConfirmPressed} />
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
      {confirmemailPending ? <AppLoader /> : null}
    </>
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

export default ConfirmEmailScreen;
