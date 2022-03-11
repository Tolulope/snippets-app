import React, {useState, useEffect, setState, useRef, useMemo, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { LogBox } from 'react-native';
// When we decide we are good to go, we can ignore all notifications by uncommenting these two lines
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


LogBox.ignoreLogs(['Setting a timer']);


const OurMission = ({ navigation }) => {

  return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.pop()} style={{ top: 63, left: 18, position: "absolute"}}>
                <Feather name="chevron-left" size={32} color="#2D3142" />
            </TouchableOpacity>
            <View style={styles.elements}>
                <Text style={styles.title}>Snippets</Text>

                <Image 
                style={styles.logo}
                source={require('../assets/img/logo.png')}
                />

                <View style={styles.item}>
                    <Text style={styles.ngoName}>Our Mission</Text>
                    <View style={styles.ngoSubtitle}>
                    <Text style={styles.lightText}>To empower people to microvolunteer in their spare time.</Text>
                    </View>
                </View>

                <View style={styles.progress}>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.whiteProgress}></View>
                    <View style={styles.whiteProgress}></View>
                    <View style={styles.whiteProgress}></View>
                </View>

                <TouchableOpacity
                    style={styles.nextButton}
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
    fontSize: 32,
    color: '#234099',
  },
  logo: {
    width: 500,
    height:500,
    flex: 0.6,
    marginTop: 40
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: '#36B6B6',
    padding: 10,
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
},
startNowText: {
    fontFamily: "Montserrat_400Regular",
    color: '#FFFFFF',
},
item:{
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 100, 
    marginTop: 40,
    width: 320,
    height: 120,
},
ngoSubtitle: {
    flexDirection: 'row',
},

ngoName: {
    fontFamily: "Montserrat_700Bold",
    paddingBottom: 10,
    fontSize: 20,
},
lightText: {
    fontFamily: "Montserrat_300Light",
    fontSize: 14,
},
elements:{
    marginTop: 0,
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