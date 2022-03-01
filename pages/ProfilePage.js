// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import { useState } from 'react';


import * as Icon from "react-native-feather";
import SettingOptions from '../components/SettingOptions';


const ProfilePage = ({ navigation }) => {

  const [tempKey, setTempKey] = useState(false);
  // const onPress = () => {
  //     //return component
  //     console.log("pressed");
  //     setTempKey(true);
  //   };
  


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '4F4F4F' }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={styles.view}>
          {/* <Text
            style={styles.text}>
            Profile{'\n'}(You are on ProfilePage)
          </Text> */}
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Acceuil')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity> */}

          <View style={styles.topRow}>
          
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => setTempKey(!tempKey)}
            >
              <Icon.Settings stroke="black" style={styles.settingsIcon} />
            </TouchableOpacity>

            {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Acceuil')}>
            <Text>Go to Home Tab</Text>
           </TouchableOpacity> */}

          { tempKey ? <SettingOptions  /> : <Text></Text>}

            <Text style={styles.profileText}>Profile</Text>

            <Icon.Edit stroke="black" style={styles.editIcon} />

          </View>

          <View style={styles.userData}>

              <Image 
              
              style={styles.profilePic}

              source={{uri: 'https://source.unsplash.com/C6oPXOatFD8'}}
              
              
              />

              <Text style={styles.name}>User's name</Text>

              <View style={styles.locationWrapper}>

              <Icon.MapPin stroke="#36B6B6" style={styles.locationIcon} />

              <Text style={styles.locationText}>User's Location</Text>


              </View>


          </View>




        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },

  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },
  view: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
  settingsButton:{
    // alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    // padding: 10,
    width: 30,
    height:30,
    marginTop: 40,
  },
  settingsIcon: {
    width: 24,
    height:24,
    // padding: 10,
    // paddingTop:128,
    paddingLeft: 32,
    position: 'absolute',

  },
  profileText: {
    fontFamily: "Montserrat_700Bold",
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    // justifyContent: 'center',
    fontSize: 24,
    paddingTop: 50,

  },

  editIcon: {
    width:24,
    height: 24,
    paddingTop: 128,
    position: 'absolute',
    right: 0,
    paddingRight: 60,

  },
  topRow: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  userData: {
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 250,
    height:250,
    borderRadius: 125, //should be half of the width and height to make it circular
  }, 

  locationWrapper: {
    flexDirection: 'row',
  },
  locationIcon: {},
  name: {
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
  },
  locationText: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",

  },


});
export default ProfilePage;