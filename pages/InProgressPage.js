
import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Context } from '../context/UserContext';
import SnippetInProgress from '../components/SnippetInProgress';
import { AntDesign } from '@expo/vector-icons';

const InProgressPage = ({ navigation }) => {
  const { state } = useContext(Context)
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      { state.inProgress.length > 0 ? 
      state.inProgress.map((item, index) => {
            return ( 
              <SnippetInProgress key={index} ngo={item}  />
            )
          })
      : 
      <View style={{alignItems: 'center'}}>
        <AntDesign name="barschart" size={80} color="#7c7c7c" style={{marginVertical: 40}}/>
        <Text style={{ fontSize: 24, color: '#7c7c7c' }}>You have no in-progress snippets</Text>
      </View>
      }
    </ScrollView>
);
}

const styles = StyleSheet.create({
});
export default InProgressPage;