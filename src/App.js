import {
  // StyleSheet,
  // Text,
  // Vrriew
  Text
 } from 'react-native';
import React, { Component } from 'react';
// import firebase from 'firebase';
// import { StackNavigator } from 'react-navigation';
// import Splash from './components/login/Splash';
// import Login from './components/login/Login';
// import Register from './components/login/Register';
// import Chatroom from './src/components/Chatroom/Chatroom'
import Map from './components/Map';

// const Navigation = StackNavigator({
//     First: { screen: Splash },
//     Second: { screen: Login },
//     Third: { screen: Register },
//     Map: { screen: Map }
//     Chat: {screen: Chatroom}
// });
// export default Navigation;

class App extends Component {
  render() {
    return (
      <Map />
    );
  }
}

export default App;
