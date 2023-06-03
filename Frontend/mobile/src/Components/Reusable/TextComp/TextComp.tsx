import React from 'react';
import {Text} from 'react-native';

const TextComp = (props: any): React.JSX.Element => {
  const {textTitle = '', textStyle} = props;
  return (
    <>
      <Text style={textStyle}>{textTitle}</Text>
    </>
  );
};

export default TextComp;
