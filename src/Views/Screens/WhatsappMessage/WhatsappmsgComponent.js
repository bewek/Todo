import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {crossImage} from '../../../Assets/Images';

const WhatsappmsgComponent = ({wamsg, onDelete, image, sender}) => {
  return wamsg?.messager?.name == 'me' ? (
    <View style={{flexDirection: 'row-reverse'}}>
      <Image
        source={wamsg?.messager?.image}
        style={{height: 40, width: 40, alignSelf: 'center'}}
      />

      <View style={styles.greencard}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
          {wamsg?.wamsg}
        </Text>
      </View>
      <Text style={{alignSelf: 'center', marginRight: 10}}>
        {wamsg?.sentAt}
      </Text>
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
        source={wamsg?.messager?.image}
        style={{height: 40, width: 40, alignSelf: 'center'}}
      />
      <View style={styles.greycard}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#03a9f4'}}>
          {wamsg?.messager?.name}
        </Text>
        <Text style={{fontSize: 15, color: 'black'}}>{wamsg?.wamsg}</Text>
      </View>
      <Text style={{alignSelf: 'center', marginLeft: 10}}>{wamsg?.sentAt}</Text>
      <TouchableOpacity onPress={onDelete} style={{alignSelf: 'center'}}>
        <Image
          source={crossImage}
          style={{height: 10, width: 10, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WhatsappmsgComponent;

const styles = StyleSheet.create({
  greencard: {
    backgroundColor: '#0ef719',
    padding: 15,
    borderRadius: 20,
    margin: 10,
    maxWidth: '70%',
    alignSelf: 'flex-end',
  },
  greycard: {
    backgroundColor: '#d9d9d9',
    padding: 15,
    borderRadius: 25,
    maxWidth: '70%',
    margin: 10,
  },
});
