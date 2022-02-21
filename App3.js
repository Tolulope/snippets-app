import * as React from 'react';
// import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from '@expo-google-fonts/montserrat';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>More Text</Text>
    </View>

  );
}

function LibraryScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Library Screen</Text>
    </View>
  );
}


function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>Profile Screen</Text>
      </View>
    );
  }


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function App() {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
      });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}

        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#36B6B6",
            tabBarInactiveTintColor: "#7C7C7C",
            tabBarLabelStyle: {
              fontFamily: "Montserrat_400Regular",
              fontSize: 10,
            },
          })}

        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
            <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}
}

const styles = StyleSheet.create({

    text: {
        fontFamily: "Montserrat_400Regular",
    }


});