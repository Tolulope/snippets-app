
  
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './TabNavigator'
import LoginScreen from '../pages/LoginScreen';


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerShown: false,
        }}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Tab Navigation' }}/>
      </Stack.Navigator>
  );
};


export { MainStackNavigator };