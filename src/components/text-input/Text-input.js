
import React from 'react'
import {

    TextInput,

    
  } from "react-native";

const CustomTextInput = ({ value, name, type, onChange }) => {
    return (
      <TextInput
        value={value}
        onChangeText={text => onChange({ name, type, text })}
        placeholder={name}
      />
    );
  };

  export default CustomTextInput