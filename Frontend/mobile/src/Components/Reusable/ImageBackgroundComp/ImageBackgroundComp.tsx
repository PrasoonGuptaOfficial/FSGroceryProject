import React from 'react';
import {ImageBackground} from 'react-native';

const ImageBackgroundComp = (props: any): React.JSX.Element => {
  const {children, imageBackgroundSource, imageBackgroundStyle} = props;
  return (
    <ImageBackground
      source={imageBackgroundSource}
      style={imageBackgroundStyle}>
      {children}
    </ImageBackground>
  );
};

export default ImageBackgroundComp;
