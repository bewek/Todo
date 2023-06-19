import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import NewFormInput from './NewFormInput';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {userInfo, userSubmit} from '../../../Redux/Slice/user.slice';

const nForm = {
  fullname: '',
  email: '',
  phone: '',
  state: '',
  district: '',
  city: '',
  education: '',
  codingLanguage: '',
};

const NewForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [address, setAddress] = useState(nForm);
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
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            margin: 10,
            textAlign: 'center',
          }}>
          NewForm
        </Text>
        {Object.entries(address).map(([key, value]) => {
          if (typeof value === 'object') {
            return Object.entries(value).map(([key0, value0]) => {
              return (
                <NewFormInput
                  value={value0}
                  onSubmitFocus={submitFocus}
                  setValue={text => onChangeText(`${key}.${key0}`, text)}
                  required
                  label={key0.slice(0, 1).toUpperCase() + key0.slice(1)}
                />
              );
            });
          } else {
            return (
              <NewFormInput
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
            dispatch(userInfo(address));
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default NewForm;

const styles = StyleSheet.create({});
