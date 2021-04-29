import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
const isAndroid = Platform.OS === "android";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";
import LandingPage from "./src/pages/landing-page/Landing-page";
import SignOn from "./src/pages/signon/signon-page";
import Library from "./src/pages/library/Library"
import Mushaf from "./src/pages/mushaf/Mushaf"

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="home" component = {Library} />
            <Stack.Screen name="Quran" component = {Mushaf} />
            <Stack.Screen name="signon" component = {SignOn} />          
           
         
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
