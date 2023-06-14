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
  phoneBackgroundTheme,
  errorThemeColor,
}: {
  backgroundTheme: string;
  splashText: string;
  splashTextBlack: string;
  googleBackgroundTheme: string;
  phoneBackgroundTheme: string;
  errorThemeColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
      justifyContent: 'flex-start',
      backgroundColor: backgroundTheme,
    },
    imageContainer: {
      ...ImageContainerStyle.container,
      height: HeightDimensionHook(0.55),
    },
    titleTextContainer: {
      ...TextContainerStyle.container,
      color: splashTextBlack,
      fontSize: FontDimensionHook(24),
      fontFamily: 'RobotoCondensed-Bold',
      marginTop: HeightDimensionHook(0.05),
      marginBottom: HeightDimensionHook(0.02),
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
    errorTextStyle: {
      ...TextContainerStyle.container,
      color: errorThemeColor,
      fontSize: FontDimensionHook(13),
    },
  });
};

export default LoginMainPageStyle;
