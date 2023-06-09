import {StyleSheet} from 'react-native';
import TextContainerStyle from '../TextContainerStyle/TextContainerStyle';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const BackContainerStyle = StyleSheet.create({
  container: {
    ...TextContainerStyle.container,
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
    fontSize: FontDimensionHook(20),
    marginLeft: WidthDimensionHook(0.05),
    marginTop: HeightDimensionHook(0.02),
  },
});

export default BackContainerStyle;
