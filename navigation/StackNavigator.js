
  
import React from "react";
import { createNativeStackNavigator, HeaderBackButton } from '@react-navigation/native-stack';
import { BottomTabNavigator } from './TabNavigator'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LoginScreen from '../pages/LoginScreen';

import ViewSnippet from '../pages/ViewSnippetPage';
import StartSnippet from '../pages/StartSnippetPage';
import TranslationSnippet from '../pages/TranslationSnippetPage';
import ReviewPage from "../pages/ReviewPage";
import SkillsPage from '../pages/SkillsPageNew';
import DomainsPage from '../pages/DomainsPage';
const TopTab = createMaterialTopTabNavigator();

import HomePage from "../pages/HomePage";
import OpeningScreen from "../pages/OpeningScreen";
import OurMission from "../pages/OurMission";
import HowItWorks from "../pages/HowItWorks";
import SavingSnippets from "../pages/SavingSnippets";
import FilteringSnippets from "../pages/FilteringSnippets";

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
        <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={OnboardingStackNavigator} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Tab Navigation' }}/>
      </Stack.Navigator>
  );
};

const OnboardingStackNavigator = ( {navigation} ) => {
  return (
    <Stack.Navigator
        initialRouteName="OpeningScreen"
        screenOptions={{
          // headerStyle: { backgroundColor: '#633689' },
          // headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          // headerShown: false,
        }}>
        <Stack.Screen options={{ headerShown: false }} name="OpeningScreen" component={OpeningScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Our Mission" component={OurMission} />
        <Stack.Screen options={{ headerShown: false }} name="How it works" component={HowItWorks} />
        <Stack.Screen options={{ headerShown: false }} name="Saving Snippets" component={SavingSnippets} />
        <Stack.Screen options={{ headerShown: false }} name="Filtering Snippets" component={FilteringSnippets} />
        {/* <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Tab Navigation' }}/> */}
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
        <Stack.Screen options={{ headerShown: false }} name="Review Page" component={ReviewPage} />
        <Stack.Screen options={{ headerShown: false }} name="Filter Page" component={FilterTabs} />
        {/* <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: 'Tab Navigation' }}/> */}
      </Stack.Navigator>
  );
};


export { MainStackNavigator, SnippetStackNavigator, OnboardingStackNavigator };