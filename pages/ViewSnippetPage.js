
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/core'


const ViewSnippetPage = (props) => {

const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <View >
            <Image 
              style={styles.profilePic}
              source={require('../assets/img/pets-in-need.jpeg')}
            />
            <View style={styles.item}>
                <Text style={styles.ngoName}>Who are we?</Text>
                <View style={styles.ngoSubtitle}>
                <Text style={styles.lightText}>Pets in Need is a non-profit animal shelter, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations.</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.ngoName}>What you need to do</Text>
                <View style={styles.ngoSubtitle}>
                <Text style={styles.lightText}>Your mission, should you choose to accept is, to read and translate a document from English to Mandarin. Full professional proficiency or native / bilingual proficiency would be required.</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View >
                    <View style={styles.logoAndHeading3col}>
                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Level </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.timeBox}> 3</Text>
                        </View>
                    </View>

                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Time </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.timeBox}> 10 minutes</Text>
                        </View>
                    </View>

                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Allowed Time </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.timeBox}> 60 minutes </Text>
                        </View>
                    </View>

                    </View>
                </View>
        </View>

        <View style={styles.previewButtons}>

<TouchableOpacity
    style={styles.startNowButton}
    onPress={() => navigation.navigate('Translation Snippet')}
    // onPress={() => navigation.pop()}

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
        backgroundColor: '#D3E5E5'
      },
      scrollView: {
        marginHorizontal: 20,
      },
    item:{
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15, 
    },
    logoAndHeading3col: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    text: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 16,
    },
    lightText: {
        fontFamily: "Montserrat_300Light",
        fontSize: 14,
    },
    ngoName: {
        fontFamily: "Montserrat_700Bold",
        paddingBottom: 10,
        fontSize: 16,
    },
    timeBox: {
        fontFamily: "Montserrat_700Bold",
        paddingTop: 5,
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
    startNowButton: {
        alignItems: 'center',
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
        paddingHorizontal: 8,
    },
    profilePic: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20
      }, 
});
