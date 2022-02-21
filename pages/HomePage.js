// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import React, {useState, useEffect, setState, useRef, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';


// import { initializeApp } from 'firebase/app';
//import {...} from "firebase/firestore";
// import firestore from '@react-native-firebase/firestore';
// import firebase from 'firebase';
// import 'firebase/firestore'


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const firebaseConfig = {
  apiKey: "AIzaSyCxOmS9UMjPUwjr2Vj_-SXy6ScZt1C9XMA",
  authDomain: "snippets-47f15.firebaseapp.com",
  projectId: "snippets-47f15",
  storageBucket: "snippets-47f15.appspot.com",
  messagingSenderId: "653699261105",
  appId: "1:653699261105:web:cd3e94c5fe958011357890"
};

// initializeApp(firebaseConfig);
// app = firebase.initializeApp(firebaseConfig)

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

LogBox.ignoreLogs(['Setting a timer']);


const HomePage = ({ navigation }) => {

  const _isMounted = useRef(true); // Initial value _isMounted = true


  const [userData, setUserData] = useState([]);
  let userlist = [];
  const db = app.firestore();

  
  const getUser = () => {

    db.collection('snippets').get().then(querySnapshot => {
      // if (_isMounted.current) { 
    // console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {

      // console.log('User ID: ', documentSnapshot.data().name, documentSnapshot.data());


      userlist.push({name: documentSnapshot.data().name, 
                     subtitle1: documentSnapshot.data().subtitle1,
                     subtitle2: documentSnapshot.data().subtitle2,
                     allowed: documentSnapshot.data().allowedTime,
                     estimated: documentSnapshot.data().estimatedTime,
                    });
                  // });


    
                // } // if is mounted 

                // console.log({name: documentSnapshot.data().name, 
                //   subtitle1: documentSnapshot.data().subtitle1,
                //   subtitle2: documentSnapshot.data().subtitle2,
                //   allowed: documentSnapshot.data().allowedTime,
                //   estimated: documentSnapshot.data().estimatedTime,
                //  });
        

  }); //getUser();
  // console.log(userlist);
  setUserData(userlist); 
}); //db.collection.get.then
  }

useEffect(() => {
  getUser();



  // console.log(userData);
  // console.log(userlist);

  // setUserData(userlist)

  // return () => {
  //   _isMounted.current = false;
  //   setState({}); // This worked for me
  // };
}, [userData]);
// }, []);
// 

// console.log(userData);



  // console.log("Hello");
  // console.log(typeof(userData));

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {/* <View style={{ flex: 1, padding: 16 }}> */}
        <View
         style={styles.view}>
           <Text style={styles.date}>
            Friday 11 Feb
          </Text>
          <Text style={styles.name}>
            Hi, Alejo Navarro
          </Text>
          {/* </View> */}

        <View style={styles.search}>
          <SearchBar
            placeholder="Search"
            lightTheme
            inputStyle={styles.searchInput}
            containerStyle={styles.searchConatiner}
            inputContainerStyle={styles.searchInputContainer}
            // onChangeText={updateSearch}
            // value={search}
         />
        </View>

        <Text style={styles.preferences}>
           Based on your preferences
        </Text>

        <ScrollView>

        {
        userData.map((item, index) => {
              return ( 
                <SnippetPreview key={index} ngoName={item.name}  />
              )
            })
        }
        </ScrollView>
        {/* <SnippetPreview ngoName={'Pets in Need'} /> */}



        
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
  date: {
    position: 'absolute',
    fontFamily: "Montserrat_400Regular",
    color: '#36B6B6',
    fontSize: 14,
    paddingTop: 40,

  },
  name: {
    fontFamily: "Montserrat_700Bold",
    position: 'absolute',
    paddingTop: 70,
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
  paddingTop: 120,

},
searchInput: {
  backgroundColor: '#FFFFFF',

},
searchConatiner: {
  backgroundColor: '#FFFFFF',
  borderRadius: 24,


},
searchInputContainer: {
  backgroundColor: '#FFFFFF',


},
preferences: {
  fontFamily: "Montserrat_600SemiBold",
  position: 'absolute',
  paddingTop: 200,
  fontSize: 18,

},
});

export default HomePage;