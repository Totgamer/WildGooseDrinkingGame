import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet,  Image, Text, View, Pressable, TouchableOpacity, FlatList } from 'react-native';
// nav imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import opdrachten from './data/opdrachten.json';

const Stack = createStackNavigator();

// render pages into main app
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
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#2d1c00',
          },
           }}
        />
        <Stack.Screen 
          name="Play" 
          component={StatefullPlayScreen} 
          options={{ title: 'Play Game',
          headerStyle: {
            backgroundColor: '#2d1c00',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#2d1c00',
          },
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Home page page
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
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Text style={styles.play}>Play</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

class StatefullPlayScreen extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Druk Volgende om het spel te starten!'
    }
  }

  updateText() {
    var RandomNumber = Math.floor(Math.random() * 5) ;
    this.setState({title: opdrachten[RandomNumber].name});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <View style={styles.innerBorder}> 
            <Image
              style={styles.logoSmall}
              source={require('./assets/picclo_logo_no_border.png')}
            />
            <Text style={styles.mainText}>{this.state.title}</Text>
            <AppButton onPress={() => {this.updateText()}} title="Volgende"/>
          </View>
        </View>
      </View>
    );
  }
}

// custom button
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);



//style sheet
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
    height: '93.5%',
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

  mainText: {
    textAlign: 'center',
    marginTop: '40%',
    marginBottom: '50%',
    color: '#ffc689',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
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
  marginTop: 15,
  fontWeight: 'bold',
  },

  appButtonContainer: {
    width: '80%',
    elevation: 8,
    backgroundColor: "#ff8400",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 25,
    marginLeft: '10%',
  },

  appButtonText: {
    fontSize: 18,
    color: "#2d1c00",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

});
