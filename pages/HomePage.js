import React, {useState, useEffect, setState, useRef, useMemo } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { db, auth } from '../firebase';


LogBox.ignoreLogs(['Setting a timer']);


const HomePage = ({ navigation }) => {

  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  let userlist = [];
  let userinfo = [];
  // const db = app.firestore();

  
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

        userinfo.push({
          document: documentSnapshot.data().document,
          needtodo: documentSnapshot.data().needtodo,
          whoarewe: documentSnapshot.data().whoarewe,
          level: documentSnapshot.data().level,
          });


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
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <View style={styles.view}>

          <Text style={styles.date}>
            Friday 11 Feb
          </Text>

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
              // onChangeText={updateSearch}
              // value={search}
            />

            <Text style={styles.preferences}>
              Based on your preferences
            </Text>

          </View>

        <ScrollView>
        {
        userData.map((item, index) => {
              return ( 
                <SnippetPreview key={index} ngoName={item.name}  />
              )
            })
        }
        </ScrollView>
        
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
preferencesTop: {
  paddingTop: 200,
},
preferences: {
  fontFamily: "Montserrat_600SemiBold",
  // position: 'absolute',
  // paddingTop: 200,
  padding: 16,
  fontSize: 18,

},
});

export default HomePage;