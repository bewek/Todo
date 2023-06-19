import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {crossImage} from '../../../Assets/Images';

const MessageComponent = ({name, msg, onDelete, onPress}) => {
  return msg?.sender?.name == 'me' ? (
    <View style={{flexDirection: 'row-reverse'}}>
      <Image
        source={msg?.sender?.image}
        style={{height: 40, width: 40, alignSelf: 'center'}}
      />
      <View style={styles.card}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
          {msg?.msg}
        </Text>
      </View>
      <Text style={{alignSelf: 'center', marginRight: 10}}>{msg?.sentAt}</Text>
      <TouchableOpacity onPress={onDelete} style={{alignSelf: 'center'}}>
        <Image
          source={crossImage}
          style={{height: 10, width: 10, marginRight: 10}}
        />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={msg?.sender?.image}
        style={{height: 40, width: 40, alignSelf: 'center'}}
      />
      <View style={styles.whitecard}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#03a9f4'}}>
          {msg?.sender?.name}
        </Text>
        <Text style={{fontSize: 15, color: 'black'}}>{msg?.msg}</Text>
      </View>
      <Text style={{alignSelf: 'center', marginLeft: 10}}>{msg?.sentAt}</Text>
      <TouchableOpacity onPress={onDelete} style={{alignSelf: 'center'}}>
        <Image
          source={crossImage}
          style={{height: 10, width: 10, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#03a9f4',
    padding: 15,
    borderRadius: 20,
    margin: 10,
    maxWidth: '70%',
    alignSelf: 'flex-end',
  },
  whitecard: {
    backgroundColor: '#d9d9d9',
    padding: 15,
    borderRadius: 25,
    maxWidth: '70%',
    margin: 10,
  },
});
