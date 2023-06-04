import {StyleSheet} from 'react-native';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const ModalContainerStyle = StyleSheet.create({
  container: {
    width: WidthDimensionHook(0.7),
    marginVertical: HeightDimensionHook(0.2),
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
});

export default ModalContainerStyle;
