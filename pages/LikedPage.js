
import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import SnippetPreview from '../components/SnippetPreview';
import { Context } from '../context/UserContext';

const LikedPage = ({ navigation }) => {
  const { state } = useContext(Context)
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      {
      state.liked.map((item, index) => {
            return ( 
              <SnippetPreview key={index} ngo={item}  />
            )
          })
      }
    </ScrollView>
);
}

const styles = StyleSheet.create({
});
export default LikedPage;