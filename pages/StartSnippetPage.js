
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView, Modal, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';



const StartSnippetPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    
    const goToHome = () => {
        setConfirmModalVisible(!confirmModalVisible);
        navigation.navigate('Acceuil');
    
      }

    const switchModals = () => {
        setModalVisible(!modalVisible);
        setConfirmModalVisible(true);

    }


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Drop the Snippet</Text>
            <Text style={styles.modalText}>Are you sure you want to drop this snippet? That means you no longer want to complete the task and will give it up completely. All work will be tossed. </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={switchModals}
            >
              <Text style={styles.textStyle}>Drop</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setConfirmModalVisible(!confirmModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirmation</Text>
            <Text style={styles.modalText}>You have dropped the snippet. </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={goToHome}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    <View style={styles.previewWrapper}>
           <Image 
              style={styles.profilePic}
              source={require('../assets/img/pets-in-need.jpeg')}
              />
            <Progress.Bar progress={0.3} width={200} />
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
    onPress={() => navigation.navigate('Translation Snippet')}

>
    <Text style={styles.startNowText}>Resume</Text>
</TouchableOpacity>

<TouchableOpacity
    style={styles.viewSnippetButton}
    // onPress={() => navigation.navigate('SnippetStackNavigator', {screen: 'Start Snippet'})}
    onPress={() => setModalVisible(true)}

>
    <Text style={styles.viewSnippetText}> Drop the Snippet</Text>
</TouchableOpacity>

</View>




        </View>
        </ScrollView>
    </SafeAreaView>
     );
}

export default StartSnippetPage;

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
        flexDirection: 'column',


    },
    startNowButton: {
        alignItems: 'center',
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
    threecolumn: {
        // alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 5,
    },
    profilePic: {
        alignItems: 'center',
        width: 50,
        height:50,
        borderRadius: 125, //should be half of the width and height to make it circular
        paddingVertical: 20,
      }, 
});
