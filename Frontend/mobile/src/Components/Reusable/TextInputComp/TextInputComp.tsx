import React from 'react';
import {TextInput} from 'react-native';

const TextInputComp = (props: any): React.JSX.Element => {
  const {
    textInputValue,
    textInputOnChangeTextHandler,
    textInputPlaceHolder,
    textInputAutoCompleteMode,
    textInputModeSelected,
    textInputKeyboardType,
    textInputMaxLength,
    textInputStyle,
    textInputPlaceHolderColor,
    textInputAlignment,
  } = props;
  return (
    <TextInput
      value={textInputValue}
      onChangeText={textInputOnChangeTextHandler}
      placeholder={textInputPlaceHolder}
      autoComplete={textInputAutoCompleteMode}
      inputMode={textInputModeSelected}
      keyboardType={textInputKeyboardType}
      maxLength={textInputMaxLength}
      textAlign={textInputAlignment}
      style={textInputStyle}
      placeholderTextColor={textInputPlaceHolderColor}
    />
  );
};

export default TextInputComp;
