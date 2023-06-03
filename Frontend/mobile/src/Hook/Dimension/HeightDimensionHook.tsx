import {useWindowDimensions} from 'react-native';

const HeightDimensionHook = (heightValue: number) => {
  let {width, height} = useWindowDimensions();
  const isMobileLandscape = width > height;

  height = isMobileLandscape ? width : height;

  if (heightValue === 0) {
    const calculatedHeightValue = height;
    return calculatedHeightValue;
  }
  if (heightValue) {
    const calculatedHeightValue = height * heightValue;
    return calculatedHeightValue;
  }
};

export default HeightDimensionHook;
