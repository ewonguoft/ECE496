import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

const Button = ({ onPress }) => {
  const { ButtonStyle } = styles

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={ButtonStyle}
      >
        <Text>Explore your surrounding</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    padding: 10
  }

})

export { Button };
