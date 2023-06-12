import {StyleSheet} from 'react-native';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';
import TextContainerStyle from '../TextContainerStyle/TextContainerStyle';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const TextInputContainerStyle = StyleSheet.create({
  container: {
    ...TextContainerStyle.container,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
    fontSize: FontDimensionHook(18),
    width: WidthDimensionHook(0.3),
    height: HeightDimensionHook(0.07),
    paddingLeft: WidthDimensionHook(0.01),
    marginTop: HeightDimensionHook(0.001),
  },
});

export default TextInputContainerStyle;
