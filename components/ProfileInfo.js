import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as Icon from "react-native-feather";
import { auth } from '../firebase'




const ProfileInfo = () => {

    const navigation = useNavigation(); 
    
    
    return ( 
        <View style={styles.previewWrapper}>

      
                <View style={styles.signOut}>
                <Text>Volunteer level showcases your experience at microvolunteering. You level up when you finish snippets. 
                    As you level up, NGOs will delegate more significant and impactful snippets to you!</Text>
                </View>
           
        </View>
     );
}

const styles = StyleSheet.create({
    previewWrapper: {
        marginTop: 10,
        // padding: 100,
        // paddingLeft: 10,
        width: 325, 
        height: 148,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        zIndex: 3, // works on ios
        elevation: 3, // works on android
        // flexDirection: 'row',
    },
    signOut: {
        margin: 15,
        // flexDirection: 'row',
        // justifyContent: 'space-around',

    },
});
 
export default ProfileInfo;