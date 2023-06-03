import React from 'react';
import {Image} from 'react-native';

const PNGImageComp = (props: any): React.JSX.Element => {
  const {PngImage, PngImageStyle} = props;
  return <Image source={PngImage} style={PngImageStyle} resizeMode="stretch" />;
};

export default PNGImageComp;
