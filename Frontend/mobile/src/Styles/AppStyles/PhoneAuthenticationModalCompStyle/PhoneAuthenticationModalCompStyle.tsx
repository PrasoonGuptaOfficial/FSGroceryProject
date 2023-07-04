import {StyleSheet} from 'react-native';
import {
  ContainerStyle,
  ModalContainerStyle,
  RowContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';

const PhoneAuthenticationModalCompStyle = ({
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
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      width: WidthDimensionHook(0),
      height: HeightDimensionHook(0),
    },
    modalContainer: {
      ...ModalContainerStyle.container,
      width: WidthDimensionHook(0.8),
      backgroundColor: splashText,
    },
    countryTextStyle: {
      ...TextContainerStyle.container,
      color: baseColor,
      marginVertical: HeightDimensionHook(0.015),
    },
    countryFlagRenderContainer: {
      ...ContainerStyle.container,
      ...RowContainerStyle.container,
      marginBottom: HeightDimensionHook(0.002),
      borderBottomWidth: 1,
      borderColor: baseColor,
      width: WidthDimensionHook(0.7),
      height: HeightDimensionHook(0.05),
      borderRadius: 10,
      paddingHorizontal: WidthDimensionHook(0.05),
    },
    symbolTextStyleRenderItem: {
      ...TextContainerStyle.container,
      color: buttonThemeColor,
    },
    countryNameViewStyle: {
      borderWidth: 1,
      borderColor: 'black',
    },
    countrySelectionImageStyle: {
      width: WidthDimensionHook(0.08),
      height: HeightDimensionHook(0.04),
    },
    countryImageSelectionTextStyle: {
      ...TextContainerStyle.container,
      textAlign: 'center',
      alignSelf: 'center',
      color: baseColor,
    },
  });
};

export default PhoneAuthenticationModalCompStyle;
