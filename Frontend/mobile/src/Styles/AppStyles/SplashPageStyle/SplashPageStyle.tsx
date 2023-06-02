import {StyleSheet} from 'react-native';
import {ContainerStyle, ImageContainerStyle} from '../../Common/Common';

const SplashPageStyle = () => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
    },
    imageContainer: {
      ...ImageContainerStyle.container,
    },
  });
};

export default SplashPageStyle;
