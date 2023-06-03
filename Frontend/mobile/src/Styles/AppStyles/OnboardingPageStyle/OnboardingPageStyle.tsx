import {StyleSheet} from 'react-native';
import {
  ContainerStyle,
  ImageContainerStyle,
  PressableContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const OnboardingPageStyle = ({
  splashText,
  buttonThemeColor,
}: {
  splashText: string;
  buttonThemeColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
    },
    imageContainer: {
      ...ImageContainerStyle.container,
    },
    imageOverlayViewContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomingTextContainer: {
      ...TextContainerStyle.container,
      color: splashText,
      fontSize: FontDimensionHook(25),
    },
    sloganTextContainer: {
      ...TextContainerStyle.container,
      color: splashText,
      marginTop: 20,
      fontSize: FontDimensionHook(14),
      fontFamily: 'Roboto-Regular',
    },
    pressableContainer: {
      ...PressableContainerStyle.container,
      backgroundColor: buttonThemeColor,
      borderColor: buttonThemeColor,
      top: 200,
    },
    pressableTextContainer: {
      ...TextContainerStyle.container,
      color: splashText,
      fontSize: FontDimensionHook(14),
      fontFamily: 'Montserrat-Regular',
    },
  });
};

export default OnboardingPageStyle;
