import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

import { MainStackNavigator } from './navigation/StackNavigator';  

import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/montserrat';
import {  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic  } from '@expo-google-fonts/montserrat';


import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LibraryPage from './pages/LibraryPage';
import CompletedPage from './pages/CompletedPage';
import LikedPage from './pages/LikedPage';
import InProgressPage from './pages/InProgressPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
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

function TabStack() {
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
        name="Acceuil"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  />
        <Tab.Screen
        name="Biblioteque"
        component={TopTabs}
        options={{
          tabBarLabel: 'Library',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }} />
      <Tab.Screen
        name="Profil"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
let [fontsLoaded] = useFonts({
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic
    });

if (!fontsLoaded) {
    return <AppLoading />;
} else {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
}
}

export default App;