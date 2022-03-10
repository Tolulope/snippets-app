
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, TextInput, Modal, Pressable, Image, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/UserContext';


const TranslationSnippetPage = ({ navigation, route }) => {

  const [translation, setTranslation] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [discardModalVisible, setDiscardModalVisible] = useState(false);
  const { ngo } = route.params;
  const { state, addToCompleted, addToInProgress, removeFromInProgress, addToLiked, removeFromLiked } = useContext(Context);


  const goToHome = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Acceuil');
  }

  useEffect(() => {
    addToInProgress({ snippet: ngo });
  }, []);



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    <View >
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
              style={styles.modalImage}
              source={ngo.url}
              />
            <Text style={styles.modalText}>{ngo.name}</Text>
            <View style={styles.levels}>
            <Text style={styles.modalText}>Level 3</Text>
            <Text style={styles.modalText}>Level 4</Text>
            </View>
            <View style={{marginBottom: 16}}>
            <Progress.Bar progress={0.3} width={200} unfilledColor={'#ffffff'} color={'#36B6B6'} height={8}/>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                addToCompleted({ snippet: ngo });
                removeFromInProgress({ snippet: ngo });
                goToHome();
              }
              }
            >
              <Text style={styles.textStyle}>Back to Home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
            animationType="slide"
            transparent={true}
            visible={discardModalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!discardModalVisible);
            }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Are you sure you want to drop this Snippet?</Text>
                <Image 
                    style={styles.modalImage}
                    source={ngo.url}
                />
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.viewSnippetButton} onPress={() => setDiscardModalVisible(!discardModalVisible)}>
                        <Text style={styles.viewSnippetText}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startNowButton} onPress={() => {
                        setDiscardModalVisible(!discardModalVisible);
                        removeFromInProgress({snippet: ngo});
                        goToHome();
                    }}>
                        <Text style={styles.startNowText}>Drop Snippet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>
            <View style={styles.icon} >
                <TouchableOpacity onPress={() => navigation.pop()}>
                <Feather name="chevron-left" size={32} color="#2D3142" />
                </TouchableOpacity>
                {
                    state.liked.includes(ngo) ?
                    <TouchableOpacity onPress={() => removeFromLiked({snippet: ngo})}><AntDesign name="heart" size={32} color="#36B6B6" /></TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => addToLiked({snippet: ngo})}><AntDesign name="hearto" size={32} color="#2D3142" /></TouchableOpacity>
                }
            </View>
            <Image 
              style={styles.profilePic}
              source={ngo.url}
              />

              <View style={{marginBottom: 16}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 5}}>
                <Text style={{alignSelf: 'center', fontFamily: "Montserrat_600SemiBold", fontSize: 16}}>Current Progress: </Text>
                <Text style={{alignSelf: 'center', fontFamily: "Montserrat_600SemiBold", fontSize: 16, color: '#EE2E2E'}}>0%</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 5}}>
                <Text style={{alignSelf: 'center', fontFamily: "Montserrat_600SemiBold", fontSize: 16}}>Time Left: </Text>
                <Text style={{alignSelf: 'center', fontFamily: "Montserrat_600SemiBold", fontSize: 16, color: '#EE2E2E'}}>{ngo.allowed} minutes</Text>
                </View>
                
              <Progress.Bar progress={0.01} width={null} unfilledColor={'#ffffff'} color={'#36B6B6'} height={8}/>
              </View>

              <View style={styles.item}>
                <Text style={styles.ngoName}>What you need to do</Text>
                <View style={styles.ngoSubtitle}>
                <Text style={styles.lightText}>{ngo.what}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.ngoName}>Original Document</Text>
                <View style={styles.ngoSubtitle}>
                <Text style={styles.lightText}>{ngo.original}</Text>
                </View>
            </View>
            <View style={styles.item}>
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
    <View style={styles.previewButtons}>
    <TouchableOpacity style={styles.viewSnippetButton} onPress={() => setDiscardModalVisible(true)}>
    <Text style={styles.viewSnippetText}>Drop Snippet</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.startNowButton} onPress={() => setModalVisible(true)}>
    <Text style={styles.startNowText}> Submit</Text>
    </TouchableOpacity>


    </View>




    </View>
      </ScrollView>
      </SafeAreaView>
 );
}


const styles = StyleSheet.create({
  levels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200
  },
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
    paddingHorizontal: 20,
    paddingVertical: 35,
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
    marginTop: 5,
    width: 200
  },
  buttonClose: {
    backgroundColor: "#36B6B6",
    width: 250
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 35,
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
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
    backgroundColor: '#36B6B6',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1
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
  marginVertical: 10,
  borderRadius: 10,
  marginHorizontal: 5,
  paddingHorizontal: 20,
  flex: 1
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
  modalImage: {
    width: 200,
    height: 200,
  }, 
});

export default TranslationSnippetPage;