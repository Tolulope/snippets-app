
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/core'


const ViewSnippetPage = (props) => {

    const navigation = useNavigation()



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <View style={styles.previewWrapper}>
               <Image 
              style={styles.profilePic}
              source={require('../assets/img/pets-in-need.jpeg')}
              />
            <View style={styles.item}>
                <View style={styles.topOfPreview}>
                    <View style={styles.logoAndHeading}>
                    <View style={styles.ngoInfo}>
                        <Text style={styles.ngoName}>Who are we?</Text>
                        <View style={styles.ngoSubtitle}>
                        {/* <View style={styles.circularLogo}></View> */}
                        <Text style={styles.lightText}>Pets in Need is a non-profit animal shelter, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations.</Text>
                        </View>
                    </View>
                    </View>
                </View>
            
                {/* <View style={styles.timeWrapper}>
                    <View style={styles.estimatedTime}>
                        <Text style={styles.lightText}>Estimated Time</Text>
                        <Text style={styles.text}>10 minutes</Text>
                    </View>

                    <View style={styles.allowedTime}>
                        <Text style={styles.lightText}> Allowed Time</Text>
                        <Text style={styles.text}>60 minutes</Text>

                    </View>     */}     
                {/* </View> */}
            </View>

            <View style={styles.item}>
                <View style={styles.topOfPreview}>
                    <View style={styles.logoAndHeading}>
                    <View style={styles.ngoInfo}>
                        <Text style={styles.ngoName}>What you need to do</Text>
                        <View style={styles.ngoSubtitle}>
                        {/* <View style={styles.circularLogo}></View> */}
                        <Text style={styles.lightText}>Your mission, should you choose to accept is, to read and translate a document from English to Mandarin. Full professional proficiency or native / bilingual proficiency would be required.</Text>
                        </View>
                    </View>
                    </View>
                </View>
        </View>

        <View style={styles.item}>
                <View style={styles.topOfPreview}>
                    <View style={styles.logoAndHeading3col}>
                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Level </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.ngoName}> 3</Text>
                        </View>
                    </View>

                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Time </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.ngoName}> 10 minutes</Text>
                        </View>
                    </View>

                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Allowed Time </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.ngoName}> 60 minutes </Text>
                        </View>
                    </View>

                    </View>
                </View>
        </View>

        <View style={styles.previewButtons}>

<TouchableOpacity
    style={styles.startNowButton}
    // onPress={() => navigation.navigate('SnippetStackNavigator', {screen: 'Start Snippet'})}
    onPress={() => navigation.navigate('Start Snippet')}

>
    <Text style={styles.startNowText}> Start Now</Text>
</TouchableOpacity>


</View>




        </View>
        </ScrollView>
    </SafeAreaView>
     );
}

export default ViewSnippetPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
      },
      scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
      },
    previewWrapper: {
        paddingVertical: 150,
        paddingHorizontal: 20,
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

    logoAndHeading3col: {
        flexDirection: 'row',
        alignItems: 'center',
        // maxWidth: '33%',

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
        fontSize: 16,


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
        // justifyContent: 'space-between',
        // flexDirection: 'row',


    },
    startNowButton: {
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',

        backgroundColor: '#36B6B6',
        padding: 10,
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

    threecolumn: {
        // alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 5,
    },
    profilePic: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height:50,
        borderRadius: 125, //should be half of the width and height to make it circular
        paddingVertical: 20,
      }, 
});
