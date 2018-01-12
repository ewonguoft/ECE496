import {
  // StyleSheet,
  // Text,
  // Vrriew
  Component
 } from 'react-native';
import React from 'react';
import firebase from 'firebase';
// import { StackNavigator } from 'react-navigation';
// import Splash from './components/login/Splash';
// import Login from './components/login/Login';
// import Register from './components/login/Register';
import Map from './components/map/Map';

// const Navigation = StackNavigator({
//     First: { screen: Splash },
//     Second: { screen: Login },
//     Third: { screen: Register },
//     Map: { screen: Map }
// });
// export default Navigation;

class App extends Component {
  ComponentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA52-sP4cp8E4GGabmrirZtGjdoNRRyW_Q',
      authDomain: 'ece496-186905.firebaseapp.com',
      databaseURL: 'https://ece496-186905.firebaseio.com',
      projectId: 'ece496-186905',
      storageBucket: 'ece496-186905.appspot.com',
      messagingSenderId: '432334888042'
    });
  }

  render() {
    return (
      <Map />
    );
  }
}


export default App;
