import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FormInput from './FormInput';
import Button from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {login} from '../../../Redux/Slice/auth.slice';
import {userInfo} from '../../../Redux/Slice/auth.slice';
import {useNavigation} from '@react-navigation/native';

const initForm = {
  name: '',
  email: '',
  phone: '',
  address: {
    state: '',
    district: '',
    city: '',
    street: '',
  },
};

const Form = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      <Text>Form</Text>
      {Object.entries(address).map(([key, value]) => {
        if (typeof value === 'object') {
          return (
            <View>
              <Text
                style={{
                  color: 'green',
                  fontWeight: '700',
                  borderBottomWidth: 2,
                  borderBottomColor: 'green',
                  paddingHorizontal: 10,
                  fontSize: 18,
                }}>
                {key.slice(0, 1).toUpperCase() + key.slice(1)}
              </Text>
              {Object.entries(value).map(([key0, value0]) => {
                return (
                  <FormInput
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
            <FormInput
              value={value}
              required
              onSubmitFocus={submitFocus}
              setValue={text => onChangeText(key, text)}
              label={key.slice(0, 1).toUpperCase() + key.slice(1)}
            />
          );
        }
      })}
      <Button
        name="Register"
        onPress={() => {
          setSubmitFocus(true);
          dispatch(userInfo(address));
          navigation.goBack();
          console.log(address);
        }}
      />
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({});
