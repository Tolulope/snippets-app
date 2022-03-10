
import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView, Pressable, Modal } from 'react-native';
import { Context } from '../context/UserContext';
import { useEffect, useState } from 'react';


import { Feather } from '@expo/vector-icons'; 
import { Shuffle } from 'react-native-feather';


const SkillsPage = ({ navigation }) => {

  const { state } = useContext(Context);

    const [modalVisible, setModalVisible] = useState(false);

    const [englishSelected, setEnglish] = useState(false);
    const [frenchSelected, setFrench] = useState(false);
    const [spanishSelected, setSpanish] = useState(false);
    const [mandarinSelected, setMandarin] = useState(false);
    const [koreanSelected, setKorean] = useState(false);
    const [italianSelected, setItalian] = useState(false);
    const [russianSelected, setRussian] = useState(false);
    const [signSelected, setSign] = useState(false);
    const [germanSelected, setGerman] = useState(false);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.subheading}>Select Skills</Text>
      </View>

      {
        state.skills.map((item, index) => {
              return ( 
                <TouchableOpacity style={styles.listItem} key={index}>
                  <Feather name={item.icon} size={24} color='#36B6B6' style={styles.icon}/>
                  <Text style={styles.listText}>{item.name}</Text>
                </TouchableOpacity>
              )
            })
        }


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
    listItem: {
      marginBottom: 10,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      height: 50,
      borderRadius: 25,
      alignItems: 'center'
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
        marginHorizontal: 15,
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
      langRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      langBox: {
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#808080',
        // backgroundColor: '#808080',
        justifyContent: 'center',
        width: 100,
        height: 100,
        overflow: 'hidden',
        borderWidth: 2,
        margin: 2,
      },


});
export default SkillsPage;