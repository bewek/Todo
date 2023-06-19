import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import NextFormInput from './NextFormInput';

const initForm = {
  personalDetail: {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    birthDate: '',
    fatherName: '',
  },
  address: {
    country: '',
    state: '',
    district: '',
    city: '',
    street: '',
  },
  detail: {
    education: '',
    codingLanguage: '',
  },
};
const dataForm = {
  personalDetail: {
    firstName: 'first',
    middleName: 'middle',
    lastName: 'last',
    gender: 'male',
    email: 'email@gmail.com',
    phone: '1111111111',
    birthDate: '123123',
    fatherName: 'father',
  },
  address: {
    country: 'country',
    state: 'state',
    district: 'district',
    city: 'city',
    street: 'street',
  },
  detail: {
    education: 'education',
    codingLanguage: 'language',
  },
};

const NextForm = () => {
  const [address, setAddress] = useState(initForm);
  const [submitFocus, setSubmitFocus] = useState(false);
  const onChangeText = (key, value) => {
    let data = {...address};
    if (key.includes('.')) {
      let split = key.split('.');
      data[split[0]][split[1]] = value;
    } else {
      data[key] = value;
    }
    setAddress(data);
  };
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#e91e63',
          margin: 10,
          textAlign: 'center',
        }}>
        NextForm
      </Text>
      {Object.entries(address).map(([key, value]) => {
        if (typeof value === 'object') {
          return (
            <View>
              <Text
                style={{
                  color: '#e91e63',
                  fontWeight: '700',
                  borderBottomWidth: 2,
                  borderBottomColor: '#f06292',
                  paddingHorizontal: 15,
                  fontSize: 18,
                }}>
                {key.slice(0, 1).toUpperCase() + key.slice(1)}
              </Text>
              {Object.entries(value).map(([key0, value0]) => {
                return (
                  <NextFormInput
                    value={value0}
                    onSubmitFocus={submitFocus}
                    setValue={text => onChangeText(`${key}.${key0}`, text)}
                    required
                    label={key0.slice(0, 1).toUpperCase() + key0.slice(1)}
                  />
                );
              })}
            </View>
          );
        } else {
          return (
            <NextFormInput
              value={value}
              onSubmitFocus={submitFocus}
              setValue={text => onChangeText(key, text)}
              required
              label={key.slice(0, 1).toUpperCase() + key.slice(1)}
            />
          );
        }
      })}
      <Button
        name="Register"
        onPress={() => {
          setSubmitFocus(true);
          setAddress(dataForm);
          console.log('registered data', address);
        }}
      />
    </ScrollView>
  );
};

export default NextForm;

const styles = StyleSheet.create({});
