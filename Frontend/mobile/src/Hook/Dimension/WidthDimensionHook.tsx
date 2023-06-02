import {useWindowDimensions} from 'react-native';

const WidthDimensionHook = (widthValue: number) => {
  let {width, height} = useWindowDimensions();
  const isMobileLandscape = width > height;

  width = isMobileLandscape ? height : width;

  if (widthValue === 0) {
    const calculatedWidthValue = width;
    return calculatedWidthValue;
  }
  if (widthValue) {
    const calculatedWidthValue = width * widthValue;
    return calculatedWidthValue;
  }
};

export default WidthDimensionHook;
