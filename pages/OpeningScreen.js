import React, {useState, useEffect, setState, useRef, useMemo, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';
// When we decide we are good to go, we can ignore all notifications by uncommenting these two lines
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


LogBox.ignoreLogs(['Setting a timer']);


const OpeningScreen = ({ navigation }) => {

  return (
        <View style={styles.view}>

            <Text style={styles.title}>Snippets</Text>

            <Image 
              style={styles.logo}
              source={require('../assets/img/logo.png')}
            />

                <TouchableOpacity
                    style={styles.startNowButton}
                    onPress={() => navigation.navigate('Our Mission')}
                >
                    <Text style={styles.startNowText}> Get started</Text>
                </TouchableOpacity>


    
      </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#36B6B6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 40,
    color: '#FFFFFF',
  },
  logo: {
    width: 500,
    height:500,
  },
  startNowButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
},
startNowText: {
    fontFamily: "Montserrat_600SemiBold",
    color: '#36B6B6',
},
  
});

export default OpeningScreen;