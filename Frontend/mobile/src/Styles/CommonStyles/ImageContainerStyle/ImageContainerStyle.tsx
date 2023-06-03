import {StyleSheet} from 'react-native';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const ImageContainerStyle = StyleSheet.create({
  container: {
    width: WidthDimensionHook(0),
    height: HeightDimensionHook(0),
  },
});

export default ImageContainerStyle;
