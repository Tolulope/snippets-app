
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';


const ViewSnippetPage = ({ route }) => {

const navigation = useNavigation();
const { ngo } = route.params;
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <View >
            <View style={styles.icon} >
                <TouchableOpacity onPress={() => navigation.pop()}>
                <Feather name="chevron-left" size={32} color="#2D3142" />
                </TouchableOpacity>
                <TouchableOpacity>
                <Feather name="heart" size={32} color="#2D3142" />
                </TouchableOpacity>
            </View>
            <Image 
              style={styles.profilePic}
              source={require('../assets/img/pets-in-need.jpeg')}
            />
            <View style={styles.item}>
                <Text style={styles.ngoName}>Who are we?</Text>
                <View style={styles.ngoSubtitle}>
                <Text style={styles.lightText}>{ngo.who}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.ngoName}>What you need to do</Text>
                <View style={styles.ngoSubtitle}>
                <Text style={styles.lightText}>{ngo.what}</Text>
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
                        <Text style={styles.timeBox}>{ngo.estimated} minutes</Text>
                        </View>
                    </View>

                    <View style={styles.threecolumn}>
                        <Text style={styles.lightText}> Allowed Time </Text>
                        <View style={styles.ngoSubtitle}>
                        <Text style={styles.timeBox}>{ngo.allowed} minutes </Text>
                        </View>
                    </View>

                    </View>
                </View>
        </View>

        <View style={styles.previewButtons}>

<TouchableOpacity
    style={styles.startNowButton}
    onPress={() => navigation.navigate('Start Snippet', {ngo: ngo})}


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
    icon: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
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
        marginBottom: 20,
        marginTop: -20,
      }, 
});
