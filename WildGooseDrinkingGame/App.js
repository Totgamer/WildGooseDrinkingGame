import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.title}>Wild Goose Drinking</Text>
      <Text style={stylesHome.slogan}>"Drink it up"</Text>
      <Image
        style={stylesHome.logo}
        source={require('./assets/picclo_logo_no_border.png')}
      />
      <Text style={stylesHome.pack}>Choose pack</Text>
      <Text style={stylesHome.play}>Play</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const stylesHome = StyleSheet.create({
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
  color: '#ff8400',
  marginTop: 20,
  fontWeight: 'bold',
  },

});
