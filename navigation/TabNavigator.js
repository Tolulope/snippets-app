
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomePage from "../pages/HomePage";
import LibraryPage from "../pages/LibraryPage";
import ProfilePage from "../pages/ProfilePage";
import CompletedPage from '../pages/CompletedPage';
import LikedPage from '../pages/LikedPage';
import InProgressPage from '../pages/InProgressPage';

import SkillsPage from '../pages/SkillsPage';
import DomainsPage from '../pages/DomainsPage';

import * as Icon from "react-native-feather";

import { SnippetStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();


const TopTabs = () => {
  return (
    <TopTab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#36B6B6',
        tabBarInactiveTintColor: '#2D3142',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: '#36B6B6' },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
      style={{ marginTop: 40}}
      title='Library'
    >
      <TopTab.Screen name="InProgress" component={InProgressPage} />
      <TopTab.Screen name="Liked" component={LikedPage} />
      <TopTab.Screen name="Completed" component={CompletedPage} />
    </TopTab.Navigator>
  );
}

const FilterTabs = () => {
  return (
    <TopTab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#36B6B6',
        tabBarInactiveTintColor: '#2D3142',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: '#36B6B6' },
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
      style={{ marginTop: 40}}
      title='Filter'
    >
      <TopTab.Screen name="Skills" component={SkillsPage} />
      <TopTab.Screen name="Domains" component={DomainsPage} />
    </TopTab.Navigator>
  );
}

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
        component={TopTabs}
        options={{
          tabBarLabel: 'Library',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Book name="settings" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Profil"
        component={FilterTabs}
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


export { BottomTabNavigator, TopTabs, FilterTabs }