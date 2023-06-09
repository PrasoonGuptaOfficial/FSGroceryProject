import {StyleSheet} from 'react-native';
import {
  BackContainerStyle,
  ImageContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const PhoneAuthenticationPageStyle = ({
  splashBlackText,
  MobileNumberText,
  placeHolderTheme,
  backgroundTheme,
}: {
  splashBlackText: string;
  MobileNumberText: string;
  placeHolderTheme: string;
  backgroundTheme: string;
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
    mobileNumberHeaderTextStyle: {
      ...TextContainerStyle.container,
      textAlign: 'left',
      marginLeft: WidthDimensionHook(0.05),
      marginTop: HeightDimensionHook(0.02),
      color: placeHolderTheme,
      fontSize: FontDimensionHook(14),
    },
    countryCodeImageStyle: {
      width: WidthDimensionHook(0.1),
      height: HeightDimensionHook(0.04),
    },
  });
};

export default PhoneAuthenticationPageStyle;
