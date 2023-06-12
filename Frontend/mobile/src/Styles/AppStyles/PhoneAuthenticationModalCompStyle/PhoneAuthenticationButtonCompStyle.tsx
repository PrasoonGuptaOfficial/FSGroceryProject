import {StyleSheet} from 'react-native';
import WidthDimensionHook from '../../../Hook/Dimension/WidthDimensionHook';
import HeightDimensionHook from '../../../Hook/Dimension/HeightDimensionHook';
import {TextContainerStyle} from '../../Common/Common';
import FontDimensionHook from '../../../Hook/Dimension/FontDimensionHook';

const PhoneAuthenticationButtonCompStyle = ({
  baseColor,
  splashText,
  isAndroid,
}: {
  baseColor: string;
  splashText: string;
  isAndroid: boolean | undefined;
}) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: WidthDimensionHook(0.12),
      height: isAndroid ? HeightDimensionHook(0.06) : HeightDimensionHook(0.07),
      alignItems: 'center',
      justifyContent: 'center',
      right: WidthDimensionHook(0.06),
      bottom: HeightDimensionHook(0.04),
      borderWidth: 1,
      borderColor: baseColor,
      borderRadius: WidthDimensionHook(0.12),
      backgroundColor: baseColor,
      padding: 3,
    },
    textActionButtonContainer: {
      ...TextContainerStyle.container,
      flex: isAndroid ? 1 : 0,
      color: splashText,
      fontSize: isAndroid ? FontDimensionHook(24) : FontDimensionHook(20),
      width: WidthDimensionHook(0.15),
      fontFamily: 'Quicksand-Bold',
    },
  });
};

export default PhoneAuthenticationButtonCompStyle;
