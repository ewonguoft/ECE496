import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
const util = require('util')

export default class Register extends Component {
    static navigationOptions={
        title: 'Register'
    }
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapatalize="none"
                    autoCorrect={false}
                    style={styles.input}
                 />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                 />
                 <TextInput
                     placeholder="Password Confirm"
                     placeholderTextColor="rgba(255,255,255,0.7)"
                     secureTextEntry
                     style={styles.input}
                     ref={(input) => this.passwordInput = input}
                  />
                   <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Sign up</Text>
                   </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    input: {
            height: 40,
            backgroundColor: 'rgba(255,255,255,0.2)',
            marginBottom: 10,
            color: '#FFF',
            paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    buttonText: {
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }

});