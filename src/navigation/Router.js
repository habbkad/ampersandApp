import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GettingStarted from "../screen/GettingStarted";
import WelcomeScreen from "../screen/WelcomeScreen";
import LoginScreen from "../screen/LoginScreen";

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="gettingStarted">
        <Stack.Screen name="gettingStarted" component={GettingStarted} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Router;
