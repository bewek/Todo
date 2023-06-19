import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {deleteImage} from '../../../Assets/Images';

const HomeCardComponent = ({msg, title, date, task, onDelete}) => {
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {title}
      </Text>
      <Text style={{fontSize: 18, color: 'grey'}}>{date}</Text>
      <Text style={{fontSize: 18, color: 'black'}}>{task}</Text>

      <TouchableOpacity
        onPress={onDelete}
        style={{height: 25, width: 25, alignSelf: 'center'}}>
        <Image source={deleteImage} style={{height: 25, width: 25}} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeCardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#aed581',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: 'grey',
    maxWidth: '90%',
  },
});
