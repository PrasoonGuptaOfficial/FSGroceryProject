import {StyleSheet} from 'react-native';
import {
  ContainerStyle,
  ModalContainerStyle,
  RowContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const FloatingActionModalButtonStyle = ({
  splashText,
  baseColor,
  buttonThemeColor,
}: {
  splashText: string;
  baseColor: string;
  buttonThemeColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: WidthDimensionHook(0),
      height: HeightDimensionHook(0),
    },
    modalContainer: {
      ...ModalContainerStyle.container,
      backgroundColor: splashText,
    },
    languageTextStyle: {
      ...TextContainerStyle.container,
      color: baseColor,
      marginVertical: HeightDimensionHook(0.015),
    },
    languageRenderContainer: {
      ...ContainerStyle.container,
      ...RowContainerStyle.container,
      marginBottom: HeightDimensionHook(0.002),
      borderBottomWidth: 1,
      borderColor: baseColor,
      width: WidthDimensionHook(0.65),
      height: HeightDimensionHook(0.05),
      borderRadius: 10,
      paddingHorizontal: WidthDimensionHook(0.05),
    },
    languageTextStyleRenderItem: {
      ...TextContainerStyle.container,
      color: baseColor,
    },
    symbolTextStyleRenderItem: {
      ...TextContainerStyle.container,
      color: buttonThemeColor,
    },
  });
};

export default FloatingActionModalButtonStyle;
