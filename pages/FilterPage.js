
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';

const LibraryPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View style={styles.view}>
          <Text style={styles.text}>
            Library{'\n'}(You are on LibraryPage)
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Acceuil')}>
            <Text>Go to Home Tab</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default LibraryPage;