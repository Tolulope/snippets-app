import React, {useState, useEffect, setState, useRef, useMemo, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';
// When we decide we are good to go, we can ignore all notifications by uncommenting these two lines
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications
import { Context } from '../context/UserContext';
import { Feather } from '@expo/vector-icons'; 


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { db, auth } from '../firebase';


LogBox.ignoreLogs(['Setting a timer']);


const HomePage = ({ navigation }) => {

  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  let userlist = [];
  let userinfo = [];
  const { state } = useContext(Context);
  // const db = app.firestore();

  const fake_data = state.data;

  
  const getUser = () => {
    
    if (userData.length ==0) {
    db.collection('snippets').get().then(querySnapshot => {

      querySnapshot.forEach(documentSnapshot => {

        userlist.push({name: documentSnapshot.data().name, 
                      subtitle1: documentSnapshot.data().subtitle1,
                      subtitle2: documentSnapshot.data().subtitle2,
                      allowed: documentSnapshot.data().allowedTime,
                      estimated: documentSnapshot.data().estimatedTime,
                      });

        // userinfo.push({
        //   document: documentSnapshot.data().document,
        //   needtodo: documentSnapshot.data().needtodo,
        //   whoarewe: documentSnapshot.data().whoarewe,
        //   level: documentSnapshot.data().level,
        //   });


      });
      
      

      // console.log(userlist)

      setUserData(userlist);
      // setUserInfo(userinfo);

    }); //db.collection.get.then


  }//if statement


  } //getUser();



useEffect(() => {
  getUser();
}, []);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 40, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <View style={styles.dateContainer}>
          <Feather name="sun" size={16} color='#36B6B6' />
          <Text style={styles.date}>
            Friday 11 Feb
          </Text>
          </View>
          

          <Text style={styles.name}>
            Hi, Alejo Navarro
          </Text>

          <View style={styles.search}>
            
            <SearchBar
              placeholder="Search"
              lightTheme
              inputStyle={styles.searchInput}
              containerStyle={styles.searchConatiner}
              inputContainerStyle={styles.searchInputContainer}
            />
            <Text style={styles.preferences}>
              Based on your skills and interests
            </Text>

          </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        {
        fake_data.map((item, index) => {
              return ( 
                <SnippetPreview key={index} ngo={item}  />
              )
            })
        }
        </ScrollView>
        
      </View>
    </ScrollView>
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
  date: {
    fontFamily: "Montserrat_600SemiBold",
    color: '#36B6B6',
    fontSize: 14,
    marginLeft: 5

  },
  dateContainer: {
    position: 'absolute',
    paddingTop: 40,
    flexDirection: 'row'

  },
  name: {
    fontFamily: "Montserrat_700Bold",
    position: 'absolute',
    paddingTop: 65,
    fontSize: 24,
  },
  item:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, 
},
itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
},
itemText: {
    maxWidth: '80%',
}, 
circular: {
  width:12,
  height: 12,
  borderColor: '#55BCF6',
  borderWidth: 2,
  borderRadius: 5,
},
search: {
  marginTop: 110,

},
searchConatiner: {
  backgroundColor: '#FFFFFF',
  height: 48,
  borderRadius: 24

},
searchInputContainer: {
  backgroundColor: 'transparent',
  borderRadius: 24,
  marginTop: -10
},
preferencesTop: {
  paddingTop: 200,
},
preferences: {
  fontFamily: "Montserrat_600SemiBold",
  position: 'relative',
  paddingVertical: 20,
  fontSize: 18,

},
});

export default HomePage;