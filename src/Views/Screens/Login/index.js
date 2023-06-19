import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../css';
import Button from '../../Components/Button';
import {useDispatch} from 'react-redux';
import {login} from '../../../Redux/Slice/user.slice';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [submitFocus, setSubmitFocus] = useState(false);

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          margin: 15,
          textAlign: 'center',
        }}>
        Login Form
      </Text>
      <TextInput
        placeholder="Email or mobile number"
        style={commonStyles.input}
      />
      <TextInput placeholder="Password" style={commonStyles.input} />
      {/* onSubmitFocus={submitFocus} */}
      <Button
        name={'Login'}
        onPress={() => {
          setSubmitFocus(true);
          dispatch(login());
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
