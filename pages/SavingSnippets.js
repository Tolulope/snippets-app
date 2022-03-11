import React, {useState, useEffect, setState, useRef, useMemo, useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SnippetPreview from '../components/SnippetPreview';
import { LogBox } from 'react-native';
// When we decide we are good to go, we can ignore all notifications by uncommenting these two lines
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 


LogBox.ignoreLogs(['Setting a timer']);


const SavingSnippets = ({ navigation }) => {

  return (
        <View style={styles.view}>

            <View style={styles.elements}>
                <Text style={styles.title}>Snippets</Text>

                <View style={styles.item}>
                    <Text style={styles.ngoName}>Saving 'Snippets'</Text>
                    <View style={styles.ngoSubtitle}>
                    <Text style={styles.lightText}>You can like a ‘Snippet’ to add it to your library and complete it later. Also, any progress on a ‘Snippet’ will be automatically saved</Text>
                    </View>
                </View>

                <Text style={styles.ngoName}>Example 'Snippet'</Text>

                <View style={styles.snip}>
                    <View style={styles.topOfPreview}>
                        <View style={styles.logoAndHeading}>
                            <Image style={styles.square} source={require('../assets/img/pets-in-need.jpeg')}/>
                            <View style={styles.ngoInfo}>
                                <Text style={styles.ngoName}>Pets in Need</Text>
                                <View style={styles.ngoSubtitle}>
                                    <Feather name="tag" size={16} color="#36B6B6" style={{marginRight: 4}}/>  
                                    <Text style={styles.lightText}>Translate</Text>
                                </View>
                                <View style={styles.ngoSubtitle}>
                                    <Feather name="tag" size={16} color="#36B6B6" style={{marginRight: 4}}/>  
                                    <Text style={styles.lightText}>English, Mandarin</Text>
                                </View>
                            </View>
                        </View>
                            <TouchableOpacity ><AntDesign name="heart" size={24} color="#36B6B6" /></TouchableOpacity>
                    </View>
                    <View style={styles.timeWrapper}>
                        <View style={styles.estimatedTime}>
                            <Text style={styles.lightText}>Estimated Time</Text>
                            <Text style={styles.text}>10 minutes</Text>
                        </View>

                        <View >
                            <Text style={styles.lightText}> Allowed Time</Text>
                            <Text style={styles.text}>60 minutes</Text>
                        </View>         
                    </View>
                    <View style={styles.previewButtons}>

                        <TouchableOpacity
                            style={styles.startNowButton}
                        >
                            <Text style={styles.startNowText}> Start Now</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.viewSnippetButton}
                        >
                            <Text style={styles.viewSnippetText}> View Snippet </Text>
                        </TouchableOpacity>
                    </View>
        </View>

                <View style={styles.progress}>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.blueProgress}></View>
                    <View style={styles.whiteProgress}></View>

                </View>

                <TouchableOpacity
                    style={styles.startNowButton}
                    onPress={() => navigation.navigate('Filtering Snippets')}
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
    listText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 16,
    },
  
});

export default SavingSnippets;