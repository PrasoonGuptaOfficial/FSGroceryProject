import React from 'react';
import {} from 'react-native';
import TextComp from '../TextComp/TextComp';

const ErrorComp = (props: any): React.JSX.Element => {
  const {errorTitle, errorStyle} = props;
  return <TextComp textTitle={errorTitle} textStyle={errorStyle} />;
};

export default ErrorComp;
