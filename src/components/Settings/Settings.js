import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { List, ListItem, SearchBar, CheckBox } from "react-native-elements";

const util = require('util')

export default class Settings extends Component {
    static navigationOptions={
        title: 'Settings'
    }
    constructor(props) {
        super(props);
    
        this.state = {
            checked: false
        }
    }

    toggle() {
        this.setState({checked: !this.state.checked});
    }

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
      };

    render(){
        return (
            <View>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => 
                        <TouchableOpacity style = {styles.buttonContainer}>
                            <Text> 
                                {item.key}
                            </Text>
                        </TouchableOpacity>
                    }
                    ListHeaderComponent={this.renderHeader}
                />
                <CheckBox
                    title='c'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                    onPress={this.toggle.bind(this)}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000'
    }

});