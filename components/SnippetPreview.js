import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SnippetPreview = (props) => {
    return ( 
        <View style={styles.previewWrapper}>
            <View style={styles.item}>
                <View style={styles.topOfPreview}>
                    <View style={styles.logoAndHeading}>
                    <View style={styles.ngoLogo}>
                        <TouchableOpacity style={styles.square}></TouchableOpacity>
                    </View>
                    <View style={styles.ngoInfo}>
                        <Text style={styles.ngoName}>{props.ngoName}</Text>
                        <View style={styles.ngoSubtitle}>
                        <View style={styles.circularLogo}></View>
                        <Text style={styles.lightText}>{props.ngoName}</Text>
                        </View>
                        <View style={styles.ngoSubtitle}>
                        <View style={styles.circularLogo}></View>
                        <Text style={styles.lightText}>{props.ngoName}</Text>
                        </View>
                    </View>
                    </View>
                    <View style={styles.circular}></View>
                </View>
            
                <View style={styles.timeWrapper}>
                    <View style={styles.estimatedTime}>
                        <Text style={styles.lightText}>Estimated Time</Text>
                        <Text style={styles.text}>10 minutes</Text>
                    </View>

                    <View style={styles.allowedTime}>
                        <Text style={styles.lightText}> Allowed Time</Text>
                        <Text style={styles.text}>60 minutes</Text>

                    </View>         
                </View>
                <View style={styles.previewButtons}>

                    <TouchableOpacity
                        style={styles.startNowButton}
                        // onPress={() => navigation.navigate('Acceuil')}
                    >
                        <Text style={styles.startNowText}> Start Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.viewSnippetButton}
                        // onPress={() => navigation.navigate('Acceuil')}
                    >
                        <Text style={styles.viewSnippetText}> View Snippet </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    previewWrapper: {
        // paddingVertical: 50,
    },
    topOfPreview: {
        flexDirection: 'row',
        justifyContent: 'space-between',

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
 
export default SnippetPreview;