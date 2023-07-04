import React from 'react';
import {Pressable} from 'react-native';
import TextComp from '../TextComp/TextComp';
import SVGImageComp from '../SVGImageComp/SVGImageComp';
import PNGImageComp from '../PNGImageComp/PNGImageComp';

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
    pressableImagePng,
    pressableImagePngStyle,
  } = props;
  return (
    <Pressable style={pressableStyle} onPress={pressableOnPress}>
      {pressableTextSubTitle && (
        <TextComp
          textTitle={pressableTextSubTitle}
          textStyle={pressableSubTextStyle}
        />
      )}
      {pressableImagePng && (
        <PNGImageComp
          PngImage={pressableImagePng}
          PngImageStyle={pressableImagePngStyle}
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
