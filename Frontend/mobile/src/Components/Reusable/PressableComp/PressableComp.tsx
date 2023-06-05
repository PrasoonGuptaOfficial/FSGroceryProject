import React from 'react';
import {Pressable} from 'react-native';
import TextComp from '../TextComp/TextComp';
import SVGImageComp from '../SVGImageComp/SVGImageComp';

const PressableComp = (props: any): React.JSX.Element => {
  const {
    pressableTextTitle,
    pressableTextStyle,
    pressableStyle,
    pressableOnPress,
    pressableTextSubTitle,
    pressableSubTextStyle,
    pressableImage,
    pressableImageWidth,
  } = props;
  return (
    <Pressable style={pressableStyle} onPress={pressableOnPress}>
      {pressableTextSubTitle && (
        <TextComp
          textTitle={pressableTextSubTitle}
          textStyle={pressableSubTextStyle}
        />
      )}
      {pressableImage && pressableImageWidth && (
        <SVGImageComp
          SvgImage={pressableImage}
          SvgImageWidth={pressableImageWidth.width}
          SvgImageHeight={pressableImageWidth.width}
        />
      )}
      {pressableTextTitle && (
        <TextComp
          textTitle={pressableTextTitle}
          textStyle={pressableTextStyle}
        />
      )}
    </Pressable>
  );
};

export default PressableComp;
