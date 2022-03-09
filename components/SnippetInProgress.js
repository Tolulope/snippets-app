import { useNavigation } from '@react-navigation/core'

import React, { useContext, useState } from 'react';
import { Context } from '../context/UserContext';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import * as Progress from 'react-native-progress';

const SnippetInProgress = (props) => {

    const navigation = useNavigation()

    const ngo = props.ngo;
    const { state, addToLiked, removeFromLiked, removeFromInProgress } = useContext(Context);
    const [modalVisible, setModalVisible] = useState(false);
    const goToHome = () => {
        setModalVisible(!modalVisible);
        navigation.navigate('Acceuil');
      }
    return ( 
        <View style={styles.item}>
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
                <Text style={styles.modalText}>Are you sure you want to drop this Snippet?</Text>
                <Image 
                    style={styles.modalImage}
                    source={ngo.url}
                />
                <View style={styles.previewButtons}>
                    <TouchableOpacity style={styles.viewSnippetButton} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.viewSnippetText}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startNowButton} onPress={() => {
                        setModalVisible(!modalVisible);
                        removeFromInProgress({snippet: ngo});
                    }}>
                        <Text style={styles.startNowText}>Drop Snippet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>


            <View style={styles.topOfPreview}>
                <View style={styles.logoAndHeading}>
                    <Image style={styles.square} source={ngo.url}/>
                    <View style={styles.ngoInfo}>
                        <Text style={styles.ngoName}>{ngo.name}</Text>
                        <View style={styles.ngoSubtitle}>
                            <Feather name="tag" size={16} color="#36B6B6" style={{marginRight: 4}}/>  
                            <Text style={styles.lightText}>{ngo.subtitle1}</Text>
                        </View>
                        <View style={styles.ngoSubtitle}>
                            <Feather name="tag" size={16} color="#36B6B6" style={{marginRight: 4}}/>  
                            <Text style={styles.lightText}>{ngo.subtitle2}</Text>
                        </View>
                    </View>
                </View>
                {
                    state.liked.includes(ngo) ?
                    <TouchableOpacity onPress={() => removeFromLiked({snippet: ngo})}><AntDesign name="heart" size={24} color="#36B6B6" /></TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => addToLiked({snippet: ngo})}><AntDesign name="hearto" size={24} color="#CDCDCD" /></TouchableOpacity>
                }
            </View>
            <View style={styles.timeWrapper}>
                <View style={styles.estimatedTime}>
                    <Text style={styles.lightText}>Estimated Time</Text>
                    <Text style={styles.text}>{ngo.estimated} minutes</Text>
                </View>

                <View >
                    <Text style={styles.lightText}> Remaining Time</Text>
                    <Text style={styles.text}>{ngo.allowed} minutes</Text>
                </View>         
            </View>
            <View style={styles.previewButtons}>

                <TouchableOpacity
                    style={styles.startNowButton}
                    onPress={() => navigation.navigate('Translation Snippet', {ngo: ngo})}
                >
                    <Text style={styles.startNowText}>Resume</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.viewSnippetButton}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.viewSnippetText}>Drop Snippet</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    topOfPreview: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    item:{
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 10, 
    },
    logoAndHeading: {
        flexDirection: 'row',
    },
    square: {
        width: 100,
        height: 100,
        //backgroundColor: '#55bcf6',
        //opacity: 0.4,
        borderRadius: 50,
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
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 18,
        color: '#7c7c7c'
    },
    lightText: {
        fontFamily: "Montserrat_300Light",
        fontSize: 14,
    },
    ngoInfo: {
        marginLeft: 15
    },
    ngoName: {
        fontFamily: "Montserrat_700Bold",
        color: '#39B0B0',
        paddingBottom: 10,
        fontSize: 20,
    },
    timeWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    estimatedTime: {
        paddingRight: 20,
        justifyContent: 'flex-start',

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
        marginHorizontal: 10

    },
    viewSnippetText: {
        fontFamily: "Montserrat_400Regular",
        color:  '#36B6B6',
    },
    ngoSubtitle: {
        flexDirection: 'row',
        marginBottom: 4

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
    modalImage: {
        width: 200,
        height: 200,
    },
    modalText: {
        marginBottom: 35,
        fontSize: 20,
        fontFamily: "Montserrat_500Medium",
        textAlign: "center"
      }, 
});
 
export default SnippetInProgress;