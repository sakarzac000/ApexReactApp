import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import PlatformSelect from './components/platformSelect'
import 'react-native-gesture-handler'
import AppNavigation from './components/appNavigator'


export default function App() {
  return (

      <View style={styles.container}>
        <View>
          <Image
          style={{
            resizeMode: "center",
            height: 100,
            width: Dimensions.get('window').width
          }}
          source={require('./assets/Apex-Legends_Header.png')}
          />
        </View>

        <PlatformSelect />


        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848'
  },
  whiteText: {
    color: 'white'
  },
});
