
import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import SnippetPreview from '../components/SnippetPreview';
import { Context } from '../context/UserContext';
import { AntDesign } from '@expo/vector-icons';

const LikedPage = ({ navigation }) => {
  const { state } = useContext(Context)
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      { state.liked.length > 0 ?
      state.liked.map((item, index) => {
            return ( 
              <SnippetPreview key={index} ngo={item}  />
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
export default LikedPage;