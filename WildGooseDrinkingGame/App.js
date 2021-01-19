import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  Image, Text, View, Pressable, TouchableOpacity } from 'react-native';
// nav imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home',
          headerStyle: {
            backgroundColor: '#2d1c00',
          },
          headerTintColor: '#2d1c00',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
           }}
        />
        <Stack.Screen 
          name="Play" 
          component={PlayScreen} 
          options={{ title: 'Play Game',
          headerStyle: {
            backgroundColor: '#2d1c00',
          },
          headerTintColor: '#2d1c00',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wild Goose Drinking</Text>
      <Text style={styles.slogan}>"Drink it up"</Text>
      <Image
        style={styles.logo}
        source={require('./assets/picclo_logo_no_border.png')}
      />
      <Text style={styles.pack}>Choose pack</Text>
      <Pressable onPress={() => navigation.navigate('Play')}>
        <Text style={styles.play}>Play</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

function PlayScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.innerBorder}>
          <Image
            style={styles.logoSmall}
            source={require('./assets/picclo_logo_no_border.png')}
          />
          <Text style={styles.title}>Play Game</Text>
          <Text style={styles.slogan}>"Drink it up"</Text>
          <AppButton title="Volgende"/>
        </View>
      </View>
    </View>
  );
};

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d1c00',
  },

  border: {
    height: '90%',
    width: '90%',
    backgroundColor: '#ff8400',
    borderRadius: 20,
  },

  innerBorder: {
    height: '94%',
    backgroundColor: '#2d1c00',
    margin: 20,
    borderRadius: 10,
    
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

  logoSmall: {
    height: 60,
    width: 60,
    marginTop: 15,
    marginLeft: 15,
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

  appButtonContainer: {
    width: 250,
    elevation: 8,
    backgroundColor: "#ff8400",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 25,
    margin: 'auto',
  },

  appButtonText: {
    fontSize: 18,
    color: "#2d1c00",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

});
