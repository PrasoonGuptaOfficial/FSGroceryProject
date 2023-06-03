import {StyleSheet} from 'react-native';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const TextContainerStyle = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: FontDimensionHook(16),
    fontStyle: 'normal',
    fontWeight: '500',
  },
});

export default TextContainerStyle;
