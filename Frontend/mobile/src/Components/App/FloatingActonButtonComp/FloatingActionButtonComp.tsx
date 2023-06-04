import React from 'react';
import {} from 'react-native';
import {TextComp, ViewComp} from '../../Common/commonComps.index';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {FloatingActionButtonCompStyle} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import PlatformHook from '../../../Hook/Platform/PlatformHook';

const FloatingActionButtonComp = (props: any): React.JSX.Element => {
  const {onActionButtonPress, onActionButtonText} = props;
  const {baseColor, splashText} = ReusableCompColors.lightTheme;
  const {isAndroid} = PlatformHook();
  const {container, textActionButtonContainer} = FloatingActionButtonCompStyle({
    baseColor,
    splashText,
    isAndroid,
  });
  return (
    <ViewComp
      viewType={ReusableCompString.TouchableComp}
      viewStyle={container}
      viewOnPress={onActionButtonPress}>
      <TextComp
        textStyle={textActionButtonContainer}
        textTitle={onActionButtonText}
      />
    </ViewComp>
  );
};

export default FloatingActionButtonComp;
