import {StyleSheet} from 'react-native';
import {
  BackContainerStyle,
  ImageContainerStyle,
  RowContainerStyle,
  TextContainerStyle,
  TextInputContainerStyle,
} from '../../Common/Common';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const PhoneAuthenticationPageStyle = ({
  splashBlackText,
  MobileNumberText,
  backgroundTheme,
  baseColor,
  errorThemeColor,
}: {
  splashBlackText: string;
  MobileNumberText: string;
  backgroundTheme: string;
  baseColor: string;
  errorThemeColor: string;
}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: backgroundTheme,
    },
    imageContainer: {
      ...ImageContainerStyle.container,
      height: HeightDimensionHook(0.4),
    },
    backTextStyle: {
      ...BackContainerStyle.container,
      color: splashBlackText,
    },
    mobileNumberTextStyle: {
      ...TextContainerStyle.container,
      textAlign: 'left',
      color: MobileNumberText,
      marginLeft: WidthDimensionHook(0.05),
      marginTop: HeightDimensionHook(0.05),
    },
    countryCodeImageStyle: {
      width: WidthDimensionHook(0.1),
      height: HeightDimensionHook(0.04),
    },
    mobileInputViewStyle: {
      ...RowContainerStyle.container,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: HeightDimensionHook(0.03),
      marginHorizontal: WidthDimensionHook(0.15),
      borderBottomWidth: 1,
      borderColor: baseColor,
      borderRadius: 10,
    },
    countrySelectionImageStyle: {
      width: WidthDimensionHook(0.08),
      height: HeightDimensionHook(0.035),
      marginTop: HeightDimensionHook(0.019),
    },
    countryCodeSelectedTextStyle: {
      ...TextContainerStyle.container,
      color: splashBlackText,
      fontSize: FontDimensionHook(18),
      marginLeft: WidthDimensionHook(0.01),
      marginTop: HeightDimensionHook(0.019),
    },
    textInputContainerStyle: {
      ...TextInputContainerStyle.container,
      color: splashBlackText,
    },
    errorTextStyle: {
      ...TextContainerStyle.container,
      color: errorThemeColor,
      fontSize: FontDimensionHook(13),
    },
  });
};

export default PhoneAuthenticationPageStyle;
