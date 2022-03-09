
import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Pressable, Modal } from 'react-native';
import { Context } from '../context/UserContext';
import { useEffect, useState } from 'react';


import { Feather } from '@expo/vector-icons'; 


const SkillsPage = ({ navigation }) => {

    const [graphicDesignSelected, setGraphicDesign] = useState(false);
    const [programmingSelected, setProgramming] = useState(false);
    const [photographySelected, setPhotography] = useState(false);
    const [financeSelected, setFinance] = useState(false);
    const [translationSelected, setTransaltion] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const goToHome = () => {
      setModalVisible(!modalVisible);
      navigation.navigate('Acceuil');
    }




  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.subheading}>Select Skills</Text>
      </View>
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
            <Text style={styles.modalText}>Because you chose "Language Translation"</Text>
            <Text style={styles.modalText}>Select your languages</Text>
    
            <Pressable
            onPress={() => setPhotography(!photographySelected)}
            style={({ pressed }) => [{ backgroundColor: photographySelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
            >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Text style={styles.listText}>English</Text>
                </View>
            </View>
       </Pressable>
       
        <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);              
            }}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);              
            }}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
        </View>

          </View>
        </View>
      </Modal>

       <Pressable
       onPress={() => setGraphicDesign(!graphicDesignSelected)}
       style={({ pressed }) => [{ backgroundColor: graphicDesignSelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
       >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Feather name="pen-tool" size={24} color='#36B6B6' style={styles.icon}/>
                <Text style={styles.listText}>Graphic Design</Text>
                </View>
            </View>
       </Pressable>


       <Pressable
       onPress={() => setProgramming(!programmingSelected)}
       style={({ pressed }) => [{ backgroundColor: programmingSelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
       >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Feather name="terminal" size={24} color='#36B6B6' style={styles.icon}/>
                <Text style={styles.listText}>Computer Programming</Text>
                </View>
            </View>
       </Pressable>

       <Pressable
       onPress={() => setPhotography(!photographySelected)}
       style={({ pressed }) => [{ backgroundColor: photographySelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
       >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Feather name="camera" size={24} color='#36B6B6' style={styles.icon}/>
                <Text style={styles.listText}>Photography</Text>
                </View>
            </View>
       </Pressable>


       <Pressable
       onPress={() => setFinance(!financeSelected)}
       style={({ pressed }) => [{ backgroundColor: financeSelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
       >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Feather name="dollar-sign" size={24} color='#36B6B6' style={styles.icon}/>
                <Text style={styles.listText}>Finance</Text>
                </View>
            </View>
       </Pressable>


       {/* <Pressable
       onPress={() => setTransaltion(!translationSelected)}
       style={({ pressed }) => [{ backgroundColor: translationSelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
       >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Feather name="repeat" size={24} color='#36B6B6' style={styles.icon}/>
                <Text style={styles.listText}> Language Translation</Text>
                </View>
            </View>
       </Pressable> */}

       <Pressable
       onPress={() => setModalVisible(true)}
       style={({ pressed }) => [{ backgroundColor: translationSelected ? '#36B6B6' : '#FFFFFF' }, styles.pressStyle ]}
       >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                <Feather name="repeat" size={24} color='#36B6B6' style={styles.icon}/>
                <Text style={styles.listText}> Language Translation</Text>
                </View>
            </View>
       </Pressable>

       <TouchableOpacity
            style={styles.startNowButton}
            // onPress={() => navigation.navigate('Translation Snippet', {ngo: ngo})}
        >
            <Text style={styles.startNowText}> Apply Changes</Text>
        </TouchableOpacity>


    </ScrollView>
);
}

const styles = StyleSheet.create({
    subheading: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        marginBottom: 20,
    },
    item:{
        // backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10, 
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    icon: {
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
    },
    listText: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 16,
    },
    pressStyle: {
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
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
        fontSize: 24,
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
        


});
export default SkillsPage;