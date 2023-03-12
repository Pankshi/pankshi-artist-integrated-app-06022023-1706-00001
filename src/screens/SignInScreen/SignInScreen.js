import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import Logo from "../../../assets/images/Pankshi_logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import AppLoader from "../../components/AppLoader";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginPending, setLoginPending] = useState(false);
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn("Sign in");
    navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    // console.warn("Forgot Password");
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    // console.warn("Sign up Pressed");
    navigation.navigate("SignUp");
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <Text style={styles.logoname}>
            {Constants.manifest.extra.appName}
          </Text>
          <CustomInput
            placeholder="Email or Mobile Number"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomButton text="Sign In" onPress={onSignInPressed} />
          <CustomButton
            text="Forgot Password"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <SocialSignInButtons></SocialSignInButtons>

          <CustomButton
            text="Don't have a account? Create One"
            onPress={onSignUpPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
      {loginPending ? <AppLoader /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 50,
  },
  logo: {
    alignItems: "center",
    maxHeight: 200,
    maxWidth: 300,
    width: "40%",
  },
  logoname: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#051C60",
    bottom: 30,
    letterSpacing: 3,
  },
});

export default SignInScreen;
