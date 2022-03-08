
import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ScrollView } from 'react-native';
import { Context } from '../context/UserContext';
import SnippetPreview from '../components/SnippetPreview';

const InProgressPage = ({ navigation }) => {
  const { state } = useContext(Context)
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#D3E5E5' }} showsVerticalScrollIndicator={false}>
      { state.inProgress.length > 0 ? 
      state.inProgress.map((item, index) => {
            return ( 
              <SnippetPreview key={index} ngo={item}  />
            )
          })
      : 
      <View>
        <Text>You have no snippets in progress</Text>
      </View>
      }
    </ScrollView>
);
}

const styles = StyleSheet.create({
});
export default InProgressPage;