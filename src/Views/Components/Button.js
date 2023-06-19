import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import commonStyles from '../Screens/css';

const text = {
  color: 'black',
};

const Button = ({
  onPress,
  onDelete,
  name,
  width = 90,
  style,
  textStyle = text,
  source,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[commonStyles.button, {width: width}, style]}>
        {source && (
          <Image
            source={source}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
        )}
        <Text style={[commonStyles.buttonText, textStyle]}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
