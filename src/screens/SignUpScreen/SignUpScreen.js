import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AppLoader from "../../components/AppLoader";

const SignUpScreen = () => {
  const [signupPending, setSignupPending] = useState(false);
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  // const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    setSignupPending(true);
    await axios
      .post(
        "https://us-central1-groovy-bonus-378512.cloudfunctions.net/pankshi_signup",
        {
          mobileno: mobileno,
          password: password,
          firstname: firstname,
          lastname: lastname,
          email: email, // This is the body part
        }
      )
      .then((response) => {
        // console.warn(response.data[3]);
        if (response.status == 200) {
          setTimeout(() => {
            setSignupPending(false);
          }, 3000);
          navigation.navigate("ConfirmEmail", {
            email: response.data[3],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of user pressed");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy policy pressed");
  };

  const onSignInPressed = () => {
    // console.warn("Sign In Pressed");
    navigation.navigate("SignIn");
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Create an account</Text>
          <CustomInput
            placeholder="First Name"
            value={firstname}
            setValue={setFirstname}
          />
          <CustomInput
            placeholder="Last Name"
            value={lastname}
            setValue={setLastname}
          />

          <CustomInput
            placeholder="Mobile Number"
            value={mobileno}
            setValue={setMobileno}
          />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <CustomInput
            placeholder="Confirm Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={true}
          />
          <CustomButton text="Register" onPress={onRegisterPressed} />
          <Text style={styles.text}>
            By registering, you confirm that you accept our{" "}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
              Privacy Policy
            </Text>
          </Text>
          <SocialSignInButtons></SocialSignInButtons>
          <CustomButton
            text="Have an account? Sign in"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
      {signupPending ? <AppLoader /> : null}
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
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
