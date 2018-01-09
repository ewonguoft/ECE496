import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
const util = require('util')

export default class Splash extends Component<{}> {
    static navigationOptions={
        title: 'Splash'
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA7gd1d6FL0rLVC5Ttb2rfNXSsnxcRab2I",
            authDomain: "chat-map-f390a.firebaseapp.com",
            databaseURL: "https://chat-map-f390a.firebaseio.com",
            projectId: "chat-map-f390a",
            storageBucket: "chat-map-f390a.appspot.com",
            messagingSenderId: "340017396713"
        });
    }
    render() {
        console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null))
        var{navigate} = this.props.navigation;
        return (
                <View style={styles.wrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>ECE496 Project</Text>
                    </View>
                    <TouchableOpacity onPress = { ()=>navigate("Third", {})}>
                        <Text style={styles.button1}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { ()=>navigate("Second", {}) }>
                        <Text style={styles.button2}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { ()=>navigate("Map", {}) }>
                        <Text style={styles.button2}>My map</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.subtitle}>Powered by React Native</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#27ae60',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color:'black',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'black',
        fontWeight: '200',
        paddingBottom: 20
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },
    button1: {
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 25
    },
    button2: {
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight: '700',
        paddingBottom: 100,
        fontSize: 25
    }
});