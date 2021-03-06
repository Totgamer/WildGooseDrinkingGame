import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { StyleSheet,  Image, Text, View, TouchableOpacity, TextInput} from 'react-native';
// nav imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import opdrachten from './data/opdrachten.json';
import { color } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
// responsive
// import "@expo/match-media";
// import { useMediaQuery } from "react-responsive";

const Stack = createStackNavigator();
var turnCount = 0;

var users = [];


// render pages into main app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={{ title: '',
            headerStyle: {
              backgroundColor: '#2d1c00',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#2d1c00',
            },
            },
            {headerShown: false}
          }
        />
        <Stack.Screen
          name="Names"
          component={nameScreen}
          options={{ title: '',
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
          options={{ title: '',
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
function homeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wild Goose Drinking</Text>
      <Text style={styles.slogan}>"Drink it up"</Text>
      <Image
        style={styles.logo}
        source={require('./assets/logo_no_border.png')}
      />
      <Text style={styles.pack}>Choose pack</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Names')}>
        <Text style={styles.play}>Play</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

//Home page page
class nameScreen extends Component {
  state = {
    usersList: [{
      username: "Delete names by clicking"
    }]
  }

  

  removeUser(value) {
    // this.state.myArray.push('new value')
    this.state.usersList.splice(value,1)
    this.forceUpdate()
  }

  addUser(value) {
    this.state.usersList.push({
      username: value
    })
    this.setState({
      text: ''
    })
    this.forceUpdate()
    users = this.state.usersList
  }

  startGame() {
    if(users.length >= 3) {
      this.props.navigation.navigate('Play');
    } else {
      alert("Minimum amout of users is 3");
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoSmallFixed}
          source={require('./assets/logo_no_border.png')}
        />
        <Text style={styles.nameAddTitle}>Players</Text>
        <View style={styles.nameList}>
          {this.state.usersList.map((user, index) => (
            <Text style={styles.names} onPress={() => {this.removeUser(index)}} key={index}>{user.username} <Text style={styles.delete}>X </Text></Text>
          ))}
        </View>
        <TextInput 
          onChangeText={(text) => this.setState({text} )}
          value={this.state.text}
          placeholder="Enter Name" 
          style={styles.inputField}/>
        <AppButton onPress={() => {this.addUser(this.state.text)}} title="Gebruiker toevoegen"/>
        <AppButtonVolgende onPress={() => this.startGame()} title="Volgende"/>
      </View>
    );
  }
};

class StatefullPlayScreen extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Druk Volgende om het spel te starten!'
    }
  }

  updateText() {

    var RandomNumber = Math.floor(Math.random() * opdrachten.length);
    var u1 = Math.floor(Math.random() * users.length);
    var u2 = Math.floor(Math.random() * users.length);
    var u3 = Math.floor(Math.random() * users.length);
    var SampleText = opdrachten[RandomNumber].name;

    while(u1 == u2 || u1 == u3 || u2 == u3){
      u1 = Math.floor(Math.random() * users.length);
      u2 = Math.floor(Math.random() * users.length);
      u3 = Math.floor(Math.random() * users.length);
      console.log('Same user!'); //later verwijderen
    }

    if(users[u1].username != users[u2].username && users[u1].username != users[u3].username && users[u2].username != users[u3].username) { 
      var NewText = SampleText.replace("USERNAME_1", users[u1].username);
      var NewText2 = NewText.replace("USERNAME_2", users[u2].username);
      var FinalText = NewText2.replace("USERNAME_3", users[u3].username);

      turnCount++;
      console.log(turnCount); //later verwijderen
      this.setState({title: FinalText});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <View style={styles.innerBorder}> 
            <Image
              style={styles.logoSmallFixed}
              source={require('./assets/logo_no_border.png')}
            />
            <Text style={styles.mainText}>{this.state.title}</Text>
            <AppButtonNextCard 
              onPress={() => {
                this.updateText()
              }} 
              title="Volgende"
            />
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
    style={styles.appButtonContainer2}>
    <Text style={styles.appButtonText2}>{title}</Text>
  </TouchableOpacity>
);

const AppButtonVolgende = ({ onPress, title }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const AppButtonNextCard = ({ onPress, title }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={styles.appButtonContainer3}>
    <Text style={styles.appButtonText3}>{title}</Text>
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

  nameAddTitle: {
    fontSize: 40,
    color: '#ffc689',
    position: 'absolute',
    top: 16
  },

  slogan: {
    textAlign: 'center',
    color: '#ffc689',
    fontSize: 25,
    marginTop: '5%',
  },

  mainText: {
    textAlign: 'center',
    marginTop: '40%',
    marginBottom: '40%',
    color: '#ffc689',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
  },

  highlight: {
    color: '#ff8400'
  },

  logo: {
    height: 300,
    width: 300,
    marginTop: '10%',
    marginBottom: '10%'
  }, 

  logoSmall: {
    height: 60,
    width: 60,
    marginTop: 15,
    marginLeft: 15,
  },

  logoSmallFixed: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: 15,
    left: 15
  },
  
  pack: {
    color: '#ffc689',
    fontSize: 40,
  },

  play: {
  fontSize: 50,
  color: '#ff8400',
  marginTop: '2%',
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
  },

  appButtonText: {
    fontSize: 18,
    color: "#2d1c00",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  appButtonContainer2: {
    width: '80%',
    elevation: 8,
    backgroundColor: "#ff8400",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 85,
  },

  appButtonText2: {
    fontSize: 18,
    color: "#2d1c00",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  appButtonContainer3: {
    width: '80%',
    elevation: 8,
    backgroundColor: "#ff8400",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 25,
    marginLeft: '10%'
  },

  appButtonText3: {
    fontSize: 18,
    color: "#2d1c00",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  inputField: {
    height: 50,
    width: '80%',
    fontSize: 20,
    backgroundColor: '#ffc689',
    borderColor: '#ff8400',
    borderWidth: 5,
    borderRadius: 20,
    fontWeight: 'bold',
    color: '#2d1c00',
    textAlign: 'center',
    marginBottom: 15
  },

  names: {
    color: '#ac5c00',
    fontSize: 15,
    borderRadius: 15,
    fontWeight: 'bold',
    padding: 5,
    margin: 5,
    backgroundColor: '#ffc689',
    borderColor: '#ff8400',
    borderWidth: 5,
    textAlign: 'center'
  },

  delete: {
    color: '#ff8400'
  },

  nameList: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
