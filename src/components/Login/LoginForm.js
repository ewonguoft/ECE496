import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import firebase from 'firebase';
import Settings from '../Settings/Settings';
export default class LoginForm extends Component {

    state = {email: '', password: '', error: ''};

    onLoginPress() {
        const { email, password } = this.state;

        this.setState({ error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ()=>navigate("Settings", {}) )
            .catch( () => {
                this.setError.bind(this);
        });

    }

    setError() {
        this.setState({ error: 'hi im stuck'});
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <Text style={styles.errorTextStyle}>
                
                    {this.state.error}
                    
                </Text>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapatalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                 />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={password => this.setState({ password })}
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
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        height: 20,
        width: 50,
        padding: -10
      }
});