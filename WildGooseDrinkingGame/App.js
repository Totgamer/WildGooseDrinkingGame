import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beau en Marco</Text>
      <Text style={styles.slogan}>"Drink it up"</Text>
      <Image
        style={styles.logo}
        source={require('./assets/picclo_logo_no_border.png')}
      />
      <Text style={styles.pack}>Choose pack</Text>
      <Text style={styles.play}>Play</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d1c00',
  },

  title: {
    fontSize: 50,
    color: '#ff8400',
    textAlign: 'center',
  },

  slogan: {
    textAlign: 'center',
    color: '#ffc689',
    fontSize: 25,
    marginTop: 20,
  },

  logo: {
    height: 300,
    width: 300,
    margin: 40,
    
  }, 
  
  pack: {
    color: '#ffc689',
    fontSize: 40,
  },
  play: {
  fontSize: 50,
  color: '#ff8400'
  },

});
