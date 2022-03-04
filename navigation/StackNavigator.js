
  
import React from "react";
import { createNativeStackNavigator, HeaderBackButton } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './TabNavigator'

import LoginScreen from '../pages/LoginScreen';

import ViewSnippet from '../pages/ViewSnippetPage';
import StartSnippet from '../pages/StartSnippetPage';
import TranslationSnippet from '../pages/TranslationSnippetPage';

import HomePage from "../pages/HomePage";




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
        {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Tab Navigation' }}/>
      </Stack.Navigator>
  );
};

const SnippetStackNavigator = ( {navigation} ) => {
  return (
    <Stack.Navigator
        initialRouteName="Acceuil"
        screenOptions={{
          // headerStyle: { backgroundColor: '#633689' },
          // headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          // headerShown: false,
        }}>
        <Stack.Screen options={{ headerShown: false }} name="Acceuil" component={HomePage} />
        <Stack.Screen options={{ headerShown: false }} name="View Snippet" component={ViewSnippet} />
        <Stack.Screen options={{ headerShown: false }} name="Start Snippet" component={StartSnippet} />
        <Stack.Screen options={{ headerShown: false }} name="Translation Snippet" component={TranslationSnippet} />
        {/* <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Tab Navigation' }}/> */}
      </Stack.Navigator>
  );
};


export { MainStackNavigator, SnippetStackNavigator };