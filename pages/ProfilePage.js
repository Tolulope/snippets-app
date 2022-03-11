// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import { useState } from 'react';
import * as Progress from 'react-native-progress';



import * as Icon from "react-native-feather";
import SettingOptions from '../components/SettingOptions';
import ProfileInfo from '../components/ProfileInfo';


const ProfilePage = ({ navigation }) => {

  const [tempKey, setTempKey] = useState(false);
  const [showInfo, setInfo] = useState(false);

  // const onPress = () => {
  //     //return component
  //     console.log("pressed");
  //     setTempKey(true);
  //   };
  


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D3E5E5' }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={styles.view}>
          <View style={styles.topRow}>
          
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => setTempKey(!tempKey)}
            >
              <Icon.Settings stroke="black" style={styles.settingsIcon} />
            </TouchableOpacity>

            { tempKey ? <SettingOptions style={styles.settingsoptions} /> : <Text></Text>}

            {/* <Text style={styles.profileText}>Profile</Text> */}

          </View>

          <View style={styles.userData}>

              <Image 
              
              style={styles.profilePic}

              source={require('../assets/img/alejo.jpg')}
              
              
              />

              <Text style={styles.name}>Alejo Navarro</Text>

              <View style={styles.locationWrapper}>

                  <Icon.MapPin stroke="#36B6B6" style={styles.locationIcon} />

                  <Text style={styles.locationText}>Palo Alto, California</Text>


              </View>


          </View>

          <View style={styles.progress}>
            <Text style={styles.levelText}>Level 3</Text>
            <Progress.Bar progress={0.3} width={300} unfilledColor={'#ffffff'} color={'#36B6B6'} height={10}/>

            <View style={styles.belowLevelText}>
              <Text style={styles.twoMore}>2 more snippets to level 4  </Text>
              <TouchableOpacity
              onPress={() => setInfo(!showInfo)}
              >
              <Icon.Info stroke="black" />
              </TouchableOpacity>              
            </View>
            { showInfo ? <ProfileInfo  /> : <Text></Text>}
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
    // flex: 1,
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
    // position: 'absolute',
    flex: 1,

  },
  profileText: {
    fontFamily: "Montserrat_700Bold",
    alignItems: 'center',
    textAlign: 'center',
    // display: 'flex',
    justifyContent: 'center',
    fontSize: 24,
    paddingTop: 50,
    position: 'absolute',
    // flex:1,

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
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  userData: {
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 200,
    height:200,
    borderRadius: 100, //should be half of the width and height to make it circular
  }, 

  locationWrapper: {
    flexDirection: 'row',
    paddingTop: 5,

  },
  locationIcon: {
  },
  name: {
    paddingTop: 15,
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
  },
  locationText: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",

  },

  settingsoptions: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // flexWrap: 'wrap',

  },
  progress: {
    paddingTop: 20,
    alignItems: 'center',


  },
  levelText: {
    fontSize: 24,
    fontFamily: 'Montserrat_600SemiBold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color:'#36B6B6',
  },
  belowLevelText: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
    // flex: 1,
  },
  twoMore: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
  }

});
export default ProfilePage;