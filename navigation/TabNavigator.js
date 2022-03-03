
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import ProfilePage from "../pages/ProfilePage";

import * as Icon from "react-native-feather";

import { SnippetStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#36B6B6",
        tabBarInactiveTintColor: "#7C7C7C",
        tabBarLabelStyle: {
          fontFamily: "Montserrat_400Regular",
          fontSize: 10,
        },
      })}>
      <Tab.Screen
        name="Acceuil1"
        component={SnippetStackNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Home name="home" color={color} size={size} />
          ),
        }}  />
        <Tab.Screen
        name="Biblioteque"
        component={LibraryPage}
        options={{
          tabBarLabel: 'Library',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Book name="settings" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Profil"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.User name="settings" color={color} size={size} />
          ),
        }} />
        </Tab.Navigator>
  );
}

export { BottomTabNavigator }