import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const NewFormInput = ({
  setValue,
  value,
  inputProps,
  label = 'Label',
  labelStyle,
  required,
  validateMsg = 'field is required',
  onSubmitFocus,
}) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>
        {label}
        {required && <Text style={{color: 'red'}}> * </Text>}
        {(onSubmitFocus || onFocus) && !value && validateMsg && (
          <Text style={{color: 'red'}}> {validateMsg} </Text>
        )}
      </Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Please Enter"
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          onChangeText={setValue}
          value={value}
          {...inputProps}
        />
      </View>
    </View>
  );
};

export default NewFormInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(0,242,0,.2)',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});
