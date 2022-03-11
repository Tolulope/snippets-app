import React, {useState, useEffect, setState, useRef, useMemo, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';
// When we decide we are good to go, we can ignore all notifications by uncommenting these two lines
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications


LogBox.ignoreLogs(['Setting a timer']);


const OurMission = ({ navigation }) => {

  return (
        <View style={styles.view}>

            <View style={styles.elements}>
                <Text style={styles.title}>Snippets</Text>

                <Image 
                style={styles.logo}
                source={require('../assets/img/logo.png')}
                />

                <View style={styles.item}>
                    <Text style={styles.ngoName}>Our Mission</Text>
                    <View style={styles.ngoSubtitle}>
                    <Text style={styles.lightText}>To empower microvolunteering in your free time by giving you a platform to connect with and help NGOs at any time</Text>
                    </View>
                </View>

                <View style={styles.progress}>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.whiteProgress}></View>
                    <View style={styles.whiteProgress}></View>
                    <View style={styles.whiteProgress}></View>

                </View>

                <TouchableOpacity
                    style={styles.startNowButton}
                    onPress={() => navigation.navigate('How it works')}
                >
                    <Text style={styles.startNowText}>Next</Text>
                </TouchableOpacity>

            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#D3E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 25,
    color: '#234099',
  },
  logo: {
    width: 500,
    height:500,
    flex: 0.6,
  },
  startNowButton: {
    alignItems: 'center',
    backgroundColor: '#36B6B6',
    padding: 10,
    width: 300,
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
},
startNowText: {
    fontFamily: "Montserrat_600SemiBold",
    color: '#FFFFFF',
},
item:{
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15, 
    width: 320,
    height: 140,
},
ngoSubtitle: {
    flexDirection: 'row',
},

ngoName: {
    fontFamily: "Montserrat_700Bold",
    paddingBottom: 10,
    fontSize: 16,
},
lightText: {
    fontFamily: "Montserrat_300Light",
    fontSize: 14,
},
elements:{
    // flex: 1,
    // flexDirection: 'column',
    // paddingTop: 150,
    // paddingBottom: 200,
    alignItems: 'center',
    justifyContent: 'center',
},

blueProgress: {
    alignItems: 'center',
    backgroundColor: '#36B6B6',
    padding: 2,
    width: 60,
    // height: 20,
    margin: 16,
    borderRadius: 10,
    // paddingHorizontal: 5,
    marginHorizontal: 6,
},


whiteProgress: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 2,
    width: 60,
    // height: 20,
    margin: 16,
    borderRadius: 10,
    // paddingHorizontal: 5,
    marginHorizontal: 6,
},
progress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
  
});

export default OurMission;