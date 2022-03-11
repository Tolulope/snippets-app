import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as Icon from "react-native-feather";
import { auth } from '../firebase'




const SettingOptions = () => {

    const navigation = useNavigation(); 

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.navigate("Login")
          })
          .catch(error => alert(error.message))
      }
    
    
    return ( 
        <View style={styles.previewWrapper}>

            <TouchableOpacity
                onPress={handleSignOut}
            >
                <View style={styles.signOut}>
                    <Icon.LogOut stroke="red" />

                    <Text>Sign out</Text>
                </View>
            </TouchableOpacity>
           
        </View>
     );
}

const styles = StyleSheet.create({
    previewWrapper: {
        marginTop: 30,
        // padding: 100,
        paddingLeft: 10,
        width: 142, 
        height: 45,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        // flexDirection: 'row',
    },
    signOut: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    item:{
        backgroundColor: '#FFF',
        padding: 9,
        borderRadius: 10,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 20, 
    },
    ngoLogo:{
        // flexDirection: 'row',
        // alignItems: 'center',
        // flexWrap: 'wrap'
    },
    logoAndHeading: {
        flexDirection: 'row',

    },
    square: {
        width: 100,
        height: 100,
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
        fontFamily: "Montserrat_400Regular",
        fontSize: 16,
    },
    lightText: {
        fontFamily: "Montserrat_300Light",
        fontSize: 12,
    },
    ngoInfo: {

    },
    ngoName: {
        fontFamily: "Montserrat_700Bold",
        paddingBottom: 20,
        fontSize: 20,


    },
    timeWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-start',


    },
    estimatedTime: {
        paddingRight: 20,
        justifyContent: 'flex-start',

    },
    allowedTime: {

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

    },
});
 
export default SettingOptions;