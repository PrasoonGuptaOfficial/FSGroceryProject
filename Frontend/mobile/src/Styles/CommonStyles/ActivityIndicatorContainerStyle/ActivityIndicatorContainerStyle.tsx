import {StyleSheet} from 'react-native';
import ContainerStyle from '../ContainerStyle/ContainerStyle';

const ActivityIndicatorContainerStyle = () => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
    },
  });
};

export default ActivityIndicatorContainerStyle;
