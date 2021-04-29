import React, { useState } from "react";
import { signUpPending } from "../../redux/user/user.actions";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import {
//   selectCurrentUser,
// } from "../../redux/user/user.selectors";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Alert,
} from "react-native";

function Register({ signUpPending }) {
  const [displayName, setDisplayName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleSubmit = async () => {
    if (!confirmPassword || !email || !password || !confirmPassword) {
      Alert.alert(" input error", " fill out all the register inputs", [], {
        cancelable: true,
      });
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        " password error",
        "passwords must match and contain 6 charaters",
        [],
        {
          cancelable: true,
        }
      );
      return;
    }

    if (password.length && confirmPassword.length < 6) {
      Alert.alert(
        " password error",
        "passwords must match and contain 6 charaters",
        [],
        {
          cancelable: true,
        }
      );
      return;
    }

    signUpPending({ displayName, email, password });

    // if(error !== null){
    //     alert(error)
    // }
  };

  console.log(displayName, email, password);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: "black" ,marginBottom: 10 }}>Register</Text>

        <TextInput
          autoCompleteType="email"
          placeholder="Enter your email"
          onChangeText={setEmail}
          style={styles.inputs}
        />

        <TextInput
          autoCompleteType="email"
          placeholder="Enter your name"
          onChangeText={setDisplayName}
          style={styles.inputs}
        />

        <TextInput
          autoCompleteType="password"
          placeholder="Enter your password"
          onChangeText={setPassword}
          style={styles.inputs}
        />
        <TextInput
          autoCompleteType="password"
          placeholder=" Re-enter your password"
          onChangeText={setConfirmPassword}
          style={styles.inputs}
        />

        <View style={styles.buttons}>
          <Text onPress={handleSubmit} style={styles.buttonText}>
            {" "}
            Register
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "transparent",
    fontSize: 25,
    alignItems: "center",
    marginTop: 0,
    flexDirection: "column",
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonText: {
    color: "white",
    backgroundColor: "black",
    marginRight: 10,
    borderRadius: 30,
    padding: 5,
  },
  inputs: {
    marginBottom: 10,
  }
});

const mapDispatchToProps = (dispatch) => ({
  signUpPending: (signUpData) => dispatch(signUpPending(signUpData)),
});

export default connect(null, mapDispatchToProps)(Register);
