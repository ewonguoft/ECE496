/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import{ StackNavigator, } from 'react-navigation';
import Splash from './src/components/Login/Splash';
import Login from './src/components/Login/Login'
import Register from './src/components/Login/Register'
import Map from './src/components/Map/Map'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const Navigation = StackNavigator({
    First: {screen: Splash},
    Second: {screen: Login},
    Third: {screen: Register},
    Map: {screen: Map}
});
export default Navigation;
/*export default class App extends Component<{}> {

  render() {
    return (
      <Splash />

    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
