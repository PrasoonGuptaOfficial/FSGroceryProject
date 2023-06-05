import {StyleSheet} from 'react-native';
import {
  ContainerStyle,
  ImageContainerStyle,
  PressableContainerStyle,
  RowContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const LoginMainPageStyle = ({
  backgroundTheme,
  splashText,
  splashTextBlack,
  googleBackgroundTheme,
  mailBackgroundTheme,
  phoneBackgroundTheme,
  buttonThemeColor,
}: {
  backgroundTheme: string;
  splashText: string;
  splashTextBlack: string;
  googleBackgroundTheme: string;
  mailBackgroundTheme: string;
  phoneBackgroundTheme: string;
  buttonThemeColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
      justifyContent: 'flex-start',
      backgroundColor: backgroundTheme,
    },
    imageContainer: {
      ...ImageContainerStyle.container,
      height: HeightDimensionHook(0.4),
    },
    titleTextContainer: {
      ...TextContainerStyle.container,
      color: splashTextBlack,
      fontSize: FontDimensionHook(24),
      fontFamily: 'RobotoCondensed-Bold',
      marginVertical: HeightDimensionHook(0.01),
    },
    appleButtonContainer: {
      ...PressableContainerStyle.container,
      ...RowContainerStyle.container,
      justifyContent: 'space-evenly',
      backgroundColor: splashTextBlack,
      borderColor: splashTextBlack,
      padding: 5,
    },
    appleTextContainer: {
      ...TextContainerStyle.container,
      color: splashText,
      fontFamily: 'Roboto-Bold',
    },
    googleButtonContainer: {
      ...PressableContainerStyle.container,
      ...RowContainerStyle.container,
      justifyContent: 'space-evenly',
      backgroundColor: googleBackgroundTheme,
      borderColor: googleBackgroundTheme,
      padding: 5,
      marginVertical: HeightDimensionHook(0.02),
    },
    googleLogoContainer: {
      width: WidthDimensionHook(0.07),
    },
    mailButtonContainer: {
      ...PressableContainerStyle.container,
      ...RowContainerStyle.container,
      justifyContent: 'space-evenly',
      backgroundColor: mailBackgroundTheme,
      borderColor: mailBackgroundTheme,
      padding: 5,
      marginVertical: HeightDimensionHook(0.02),
    },
    phoneButtonContainer: {
      ...PressableContainerStyle.container,
      ...RowContainerStyle.container,
      justifyContent: 'space-evenly',
      backgroundColor: phoneBackgroundTheme,
      borderColor: phoneBackgroundTheme,
      padding: 5,
      marginVertical: HeightDimensionHook(0.02),
    },
    phoneTextContainer: {
      ...TextContainerStyle.container,
      color: splashText,
    },
    notAccountContainer: {
      ...RowContainerStyle.container,
      marginVertical: HeightDimensionHook(0.04),
    },
    notAccountTextContainer: {
      ...TextContainerStyle.container,
      fontSize: FontDimensionHook(14),
      color: splashTextBlack,
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    notAccountTextSignUpContainer: {
      ...TextContainerStyle.container,
      fontSize: FontDimensionHook(14),
      color: buttonThemeColor,
      fontFamily: 'Roboto-Regular',
    },
  });
};

export default LoginMainPageStyle;
