import React, {useState, useEffect, setState, useRef, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';

import { Feather } from '@expo/vector-icons'; 


// import { initializeApp } from 'firebase/app';
//import {...} from "firebase/firestore";
// import firestore from '@react-native-firebase/firestore';
// import firebase from 'firebase';
// import 'firebase/firestore'


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
  // const db = app.firestore();

  const fake_data = [
    {
      name: "Pets in Need", 
      subtitle1: "Translate",
      subtitle2: "English, Mandarin",
      allowed: 60,
      estimated: 5,
      who: "Pets in Need is a non-profit animal shelter, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations.",
      what: "Your mission, should you choose to accept is, to read and translate a document from English to Mandarin. Full professional proficiency or native / bilingual proficiency would be required.",
      original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
    },
    {
      name: "Old Weather", 
      subtitle1: "Transcribe",
      subtitle2: "English",
      allowed: 65,
      estimated: 12,
      who: "Old Weather volunteers explore, mark, and transcribe historic ship's logs from the 19th and early 20th centuries. We need your help because this task is impossible for computers, due to diverse and idiosyncratic handwriting that only human beings can read and understand effectively.",
      what: "Your mission, should you choose to accept is, to transcribe the historic ship’s logs below. The logs are images of hand-written words in English and we hope you could transcribe them into texts.",
      original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
    },
    {
      name: "Endangered SI", 
      subtitle1: "Summarize",
      subtitle2: "English",
      allowed: 68,
      estimated: 14,
      who: "Endangered Species International is strongly committed to reversing the trend of human-induced species extinction, saving endangered animals, and preserving wild places! We protect more than 225 endangered species, created no fewer than 46 protected areas protecting rainforests, coral reefs, and wetlands, planted thousands of native and rare trees to restore back forest, and empowered tribes and much more.",
      what: "Your mission, should you choose to accept is, to summarize the following paragraphs into one sentence per paragraph.",
      original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
    },
    {
      name: "Japantown NA", 
      subtitle1: "Video",
      subtitle2: "Japanese",
      allowed: 40,
      estimated: 8,
      who: "The Japantown Neighborhood Association's mission is to encourage communication and cooperation between residents and businesses in the Japantown neighborhood; to serve as a voice and representative for the residents with government officials, nongovernment agencies, and business representatives; and to support and encourage the continued diversity of the Japantown neighborhood and surrounding areas.",
      what: "Your mission, should you choose to accept is, to add Japanese subtitles for the following 5-minute video..",
      original: "Esta es una pieza de traducción muy breve que usaremos como marcador de posición por el momento. Sea amable con nosotros, estamos haciendo nuestro mejor esfuerzo y definitivamente trabajando en esto demasiado tarde en la noche."
    },

  ];

  
  const getUser = () => {

    // console.log(userData);

    
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
        {/* {
        userData.map((item, index) => {
              return ( 
                <SnippetPreview key={index} ngoName={item.name}  />
              )
            })
        } */}
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