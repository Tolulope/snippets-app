
import React, {useContext, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Context } from '../context/UserContext';
import SnippetCompleted from '../components/SnippetCompleted';
import { AntDesign } from '@expo/vector-icons';

const CompletedPage = ({ navigation }) => {
  const { state } = useContext(Context);
  
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      { state.completed.length > 0 ? 
      state.completed.map((item, index) => {
            return ( 
              <SnippetCompleted key={index} ngo={item}  />
            )
          })
      : 
      <View style={{alignItems: 'center'}}>
        <AntDesign name="barschart" size={80} color="#7c7c7c" style={{marginVertical: 40}}/>
        <Text style={{ fontSize: 24, color: '#7c7c7c' }}>You have no completed snippets</Text>
      </View>
      }
    </ScrollView>
);
}

const styles = StyleSheet.create({
});
export default CompletedPage;