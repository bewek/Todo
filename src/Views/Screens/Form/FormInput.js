import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const FormInput = ({
  setValue,
  value,
  inputProps,
  label = 'Label',
  labelStyle,
  required,
  validateMsg = 'required',
  onSubmitFocus,
}) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <View style={styles.inputConatiner}>
      <Text style={[styles.label, labelStyle]}>
        {label}
        {required && <Text style={{color: 'red'}}> * </Text>}
        {(onSubmitFocus || onFocus) && !value && validateMsg && (
          <Text style={{color: 'red'}}> {validateMsg} </Text>
        )}
      </Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter Text"
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

export default FormInput;

const styles = StyleSheet.create({
  inputConatiner: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(128,128,128,.2)',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#555',
  },
});
