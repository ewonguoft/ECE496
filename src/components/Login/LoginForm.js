import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

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

                 <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                 </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
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