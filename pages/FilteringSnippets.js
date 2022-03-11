import React, {useState, useEffect, setState, useRef, useMemo, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { LogBox } from 'react-native';
// When we decide we are good to go, we can ignore all notifications by uncommenting these two lines
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Context } from '../context/UserContext';


LogBox.ignoreLogs(['Setting a timer']);


const FilteringSnippets = ({ navigation }) => {
    const {state} = useContext(Context);

  return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.pop()} style={{ marginTop: 10, marginLeft: -300}}>
                <Feather name="chevron-left" size={32} color="#2D3142" />
            </TouchableOpacity>
            <View style={styles.elements}>
                <Text style={styles.title}>Snippets</Text>

                <View style={styles.item}>
                    <Text style={styles.ngoName}>Filtering 'Snippets'</Text>
                    <View style={styles.ngoSubtitle}>
                    <Text style={styles.lightText}>You can filter your ‘Snippets’ directly from the home page based on your skills or prefered domain</Text>
                    </View>
                </View>

                <Text style={styles.ngoName}>Example Filtering Categories</Text>

                </View>

                {
                state.skills.map((item, index) => {
                    return ( 
                        <TouchableOpacity 
                        style={styles.listItem} 
                        key={index}>
                        <Feather name={item.icon} size={24} color='#36B6B6' style={styles.icon}/>
                        <Text style={styles.listText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                    })
                }

                <View style={styles.elements}>
                <View style={styles.progress}>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.blueProgress}></View>

                </View>


                <TouchableOpacity
                    style={styles.startNowButton}
                    onPress={() => navigation.navigate('BottomTabNavigator', {screen: 'Acceuil'})}
                >
                    <Text style={styles.startNowText}>Let's go!</Text>
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
    marginTop: -20
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 25,
    color: '#234099',
    paddingBottom: 10,
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
// ngoSubtitle: {
//     flexDirection: 'row',
// },

// ngoName: {
//     fontFamily: "Montserrat_700Bold",
//     paddingBottom: 10,
//     fontSize: 16,
// },
listItem: {
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 320,
    borderRadius: 25,
    alignItems: 'center'
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

topOfPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',

},
snip:{
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 10, 
},
logoAndHeading: {
    flexDirection: 'row',
},
square: {
    width: 100,
    height: 100,
    //backgroundColor: '#55bcf6',
    //opacity: 0.4,
    borderRadius: 50,
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
    // justifyContent: 'flex-end',
},
circularLogo: {
    width:12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    // justifyContent: 'flex-end',
},
text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    color: '#7c7c7c'
},
lightText: {
    fontFamily: "Montserrat_300Light",
    fontSize: 14,
},
ngoInfo: {
    marginLeft: 15
},
ngoName: {
    fontFamily: "Montserrat_700Bold",
    color: 'black',
    paddingBottom: 10,
    fontSize: 20,
},
timeWrapper:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10
},
estimatedTime: {
    paddingRight: 20,
    justifyContent: 'flex-start',

},
previewButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
},
startNowButton: {
    alignItems: 'center',
    backgroundColor: '#36B6B6',
    padding: 10,
    width: 150,
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
},
startNowText: {
    fontFamily: "Montserrat_400Regular",
    color: '#FFFFFF',
},
viewSnippetButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#CDCDCD',
    borderWidth: 2,
    padding: 10,
    width: 150,
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 20,

},
viewSnippetText: {
    fontFamily: "Montserrat_400Regular",
    color:  '#36B6B6',
},
ngoSubtitle: {
    flexDirection: 'row',
    marginBottom: 4

},

subheading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    marginBottom: 20,
},
itemFilter:{
    // backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, 
},
itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
},
icon: {
    marginHorizontal: 15,
},
itemText: {
    maxWidth: '80%',
}, 
listText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
},
pressStyle: {
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    width: 300,
},
  
});

export default FilteringSnippets;