
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image, ScrollView, Modal, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import { Feather } from '@expo/vector-icons';


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
              <View style={{marginBottom: 16}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 5}}>
                <Text style={{alignSelf: 'center', fontFamily: "Montserrat_600SemiBold", fontSize: 16}}>Current Progress: </Text>
                <Text style={{alignSelf: 'center', fontFamily: "Montserrat_600SemiBold", fontSize: 16, color: '#EE2E2E'}}>0%</Text>
                </View>
                
              <Progress.Bar progress={0.01} width={null} unfilledColor={'#ffffff'} color={'#36B6B6'} height={8}/>
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
    // onPress={() => navigation.navigate('SnippetStackNavigator', {screen: 'Start Snippet'})}
    onPress={() => navigation.navigate('Translation Snippet')}

>
    <Text style={styles.startNowText}>Resume</Text>
</TouchableOpacity>

<TouchableOpacity
    style={styles.viewSnippetButton}
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
    previewButtons: {
        justifyContent: 'space-between',
        flexDirection: 'column',
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
        marginTop: 10,
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
