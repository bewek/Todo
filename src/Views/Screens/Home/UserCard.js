import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {cameraboyImage, deleteImage} from '../../../Assets/Images';

const UserCard = ({
  fullname,
  email,
  phone,
  education,
  codingLanguage,
  state,
  district,
  city,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={cameraboyImage}
            style={{width: 70, height: 70, borderRadius: 40}}
          />
        </TouchableOpacity>
        <View style={{paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '700',
            }}>
            {fullname}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
            }}>
            {email}
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}>
            {phone}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 15,
              }}>
              {state},
            </Text>
            <Text
              style={{
                fontSize: 15,
              }}>
              {district},
            </Text>
            <Text
              style={{
                fontSize: 15,
              }}>
              {city}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', margin: 5}}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: '#48ff00',
            borderRadius: 30,
            alignSelf: 'center',
          }}></View>
        <Text style={{fontSize: 17, paddingHorizontal: 15}}>
          Recently Active
        </Text>
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 40}}>
        <Text
          style={{
            fontSize: 17,
            color: 'black',
          }}>
          {education},
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: 'black',
          }}>
          {codingLanguage}
        </Text>
      </View>
      {/* <TouchableOpacity
        onPress={onDelete}
        style={{height: 15, width: 15, alignSelf: 'center'}}>
        <Image source={deleteImage} style={{height: 15, width: 15}} />
      </TouchableOpacity> */}
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    margin: 10,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: '#d9d9d9',
    maxWidth: '90%',
  },
});
