// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CommentScreen,
  Form,
  Home,
  Login,
  Message,
  NewForm,
  NextForm,
  WhatsappMessage,
} from '../../Screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function AuthStack() {
  const {isLoggedIn} = useSelector(state => state.user);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={isLoggedIn ? 'Home' : 'Form'}
    >
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="CommentScreen" component={CommentScreen} />
          <Stack.Screen name="WhatsappMessage" component={WhatsappMessage} />
          <Stack.Screen name="NewForm" component={NewForm} />
          <Stack.Screen name="NextForm" component={NextForm} />
          <Stack.Screen name="Form" component={Form} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}

export default AuthStack;
