import React from 'react';
import {Pressable} from 'react-native';
import TextComp from '../TextComp/TextComp';

const PressableComp = (props: any): React.JSX.Element => {
  const {
    pressableTextTitle,
    pressableTextStyle,
    pressableStyle,
    pressableOnPress,
  } = props;
  return (
    <Pressable style={pressableStyle} onPress={pressableOnPress}>
      <TextComp textTitle={pressableTextTitle} textStyle={pressableTextStyle} />
    </Pressable>
  );
};

export default PressableComp;
