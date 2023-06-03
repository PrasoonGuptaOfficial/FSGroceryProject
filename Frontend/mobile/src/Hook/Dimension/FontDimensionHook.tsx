import {Dimensions} from 'react-native';

const FontDimensionHook = (fontValue: number) => {
  const screenWidth = Dimensions.get('screen').width;
  const windowWidth = Dimensions.get('window').width;
  if (fontValue) {
    const calculatedFontValue = (windowWidth / screenWidth) * fontValue;
    return calculatedFontValue;
  }
};

export default FontDimensionHook;
