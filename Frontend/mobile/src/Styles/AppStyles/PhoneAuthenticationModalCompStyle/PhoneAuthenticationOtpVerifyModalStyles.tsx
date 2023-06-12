import {StyleSheet} from 'react-native';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';
import {
  ContainerStyle,
  PressableContainerStyle,
  TextContainerStyle,
  TextInputContainerStyle,
} from '../../Common/Common';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const PhoneAuthenticationOtpVerifyModalStyles = ({
  splashText,
  baseColor,
  splashBlackText,
  buttonThemeColor,
  errorThemeColor,
}: {
  splashText: string;
  baseColor: string;
  splashBlackText: string;
  buttonThemeColor: string;
  errorThemeColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      width: WidthDimensionHook(0),
      height: HeightDimensionHook(0),
    },
    modalContainer: {
      borderWidth: 1,
      borderColor: splashText,
      backgroundColor: splashText,
      width: WidthDimensionHook(0.6),
      height: HeightDimensionHook(0.25),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    enterOtpTitleTextStyle: {
      ...TextContainerStyle.container,
      textAlign: 'center',
      color: baseColor,
      marginTop: HeightDimensionHook(0.01),
    },
    otpInputTextStyle: {
      ...TextInputContainerStyle.container,
      color: splashBlackText,
      borderBottomWidth: 1,
      borderColor: baseColor,
    },
    ContinueButtonTextContainer: {
      ...TextContainerStyle.container,
      color: splashText,
      fontSize: FontDimensionHook(14),
      fontFamily: 'Roboto-Regular',
    },
    ContinueButtonContainer: {
      ...PressableContainerStyle.container,
      width: WidthDimensionHook(0.4),
      height: HeightDimensionHook(0.05),
      backgroundColor: buttonThemeColor,
      borderColor: buttonThemeColor,
      marginTop: HeightDimensionHook(0.02),
    },
    errorTextStyle: {
      ...TextContainerStyle.container,
      color: errorThemeColor,
      fontSize: FontDimensionHook(13),
    },
  });
};

export default PhoneAuthenticationOtpVerifyModalStyles;
