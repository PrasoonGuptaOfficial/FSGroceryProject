import {StyleSheet} from 'react-native';
import {
  ContainerStyle,
  RowContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';

const SplashPageStyle = ({
  splashText,
  baseColor,
}: {
  splashText: string;
  baseColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
      backgroundColor: baseColor,
    },
    rowContainerView: {
      ...RowContainerStyle.container,
      justifyContent: 'center',
    },
    textContainer: {
      ...TextContainerStyle.container,
      color: splashText,
      fontFamily: 'Roboto-Bold',
    },
  });
};

export default SplashPageStyle;
