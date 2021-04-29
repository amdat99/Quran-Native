import React, { useEffect } from "react";
import SignIn from "./signin";
import Register from "./register";
// import SignUp from "../../components/signin&signup/Signup";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect"
import {selectCurrentUser} from "../../redux/user/user.selectors"

function SignOn( {currentUser}) {
  return (
    <View style={styles.container}>
      {currentUser
     
     ? <View style={styles.salamText}><Text  > salam {currentUser.displayName}</Text></View>
     :<>
     <SignIn  />
       
      <Register/>
      </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  salamText:{
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30
  }
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)( SignOn);
