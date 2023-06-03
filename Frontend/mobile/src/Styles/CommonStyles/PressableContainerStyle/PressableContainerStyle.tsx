import {StyleSheet} from 'react-native';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const PressableContainerStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    width: WidthDimensionHook(0.8),
    height: HeightDimensionHook(0.06),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PressableContainerStyle;
