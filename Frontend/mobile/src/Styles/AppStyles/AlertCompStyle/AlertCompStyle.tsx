import {StyleSheet} from 'react-native';
import {
  ContainerStyle,
  RowContainerStyle,
  TextContainerStyle,
} from '../../Common/Common';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const AlertCompStyle = ({
  splashText,
  buttonThemeColor,
  baseColor,
}: {
  splashText: string;
  buttonThemeColor: string;
  baseColor: string;
}) => {
  return StyleSheet.create({
    container: {
      ...ContainerStyle.container,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      width: WidthDimensionHook(0),
      height: HeightDimensionHook(0),
    },
    modalContainer: {
      ...ContainerStyle.container,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      borderWidth: 1,
      borderColor: splashText,
      backgroundColor: splashText,
      borderRadius: 10,
      width: WidthDimensionHook(0.8),
      marginVertical: HeightDimensionHook(0.4),
    },
    modalQuestionTextStyle: {
      ...TextContainerStyle.container,
      textAlign: 'left',
      marginHorizontal: WidthDimensionHook(0.05),
      marginVertical: HeightDimensionHook(0.02),
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
      color: baseColor,
    },
    modalButtonStyle: {
      ...ContainerStyle.container,
      ...RowContainerStyle.container,
    },
    modalOkButtonStyle: {
      ...ContainerStyle.container,
    },
    modalButtonTextStyle: {
      ...TextContainerStyle.container,
      fontSize: FontDimensionHook(14),
      fontWeight: 'normal',
      fontFamily: 'Roboto-Regular',
      color: buttonThemeColor,
    },
  });
};

export default AlertCompStyle;
