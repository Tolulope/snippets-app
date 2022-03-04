
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Modal, Pressable, Image, ScrollView} from 'react-native';
import { useEffect, useState } from 'react'


const TranslationSnippetPage = ({ navigation }) => {

  const [translation, setTranslation] = useState('')
  const [modalVisible, setModalVisible] = useState(false);


  const goToHome = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Acceuil');

  }



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.previewWrapper}>
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
            <Text style={styles.modalText}>CONGRATULATIONS!</Text>
            <Text style={styles.modalText}>You just completed a task for</Text>
            <Image 
              // style={styles.profilePic}
              source={require('../assets/img/pets-in-need.jpeg')}
              />
            <Text style={styles.modalText}>Pets in Need</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={goToHome}
            >
              <Text style={styles.textStyle}>Back to Home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image 
              style={styles.profilePic}
              source={require('../assets/img/pets-in-need.jpeg')}
              />
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
                <View style={styles.logoAndHeading}>
                <View style={styles.ngoInfo}>
                    <Text style={styles.ngoName}>Original Document</Text>
                    <View style={styles.ngoSubtitle}>
                    {/* <View style={styles.circularLogo}></View> */}
                    <Text style={styles.lightText}>Dogs, often hailed as humans’ best friends, have been the topic of many scientific studies looking into how they might boost our well-being. In this Spotlight, well explain how your friendly pup can benefit your health across the board.</Text>
                    </View>
                </View>
                </View>
            </View>
    </View>

    <View style={styles.item}>
            <View style={styles.topOfPreview}>
                <View style={styles.logoAndHeading}>
                <View style={styles.ngoInfo}>
                    <Text style={styles.ngoName}>Your Translation</Text>
                    <View style={styles.ngoSubtitle}>
                    <TextInput
                       placeholder="Type here..."
                       value={translation}
                       onChangeText={text => setTranslation(text)}
                       style={styles.input}
                    />

                    </View>
                </View>
                </View>
            </View>
    </View>


    <View style={styles.previewButtons}>

<TouchableOpacity
style={styles.startNowButton}
// onPress={() => navigation.navigate('SnippetStackNavigator', {screen: 'Start Snippet'})}
onPress={() => setModalVisible(true)}

>
<Text style={styles.startNowText}> Submit</Text>
</TouchableOpacity>


</View>




    </View>
      </ScrollView>
      </SafeAreaView>
 );
}


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
  profilePic: {
    alignItems: 'center',
    width: 50,
    height:50,
    borderRadius: 125, //should be half of the width and height to make it circular
    paddingVertical: 20,
  }, 
});

export default TranslationSnippetPage;