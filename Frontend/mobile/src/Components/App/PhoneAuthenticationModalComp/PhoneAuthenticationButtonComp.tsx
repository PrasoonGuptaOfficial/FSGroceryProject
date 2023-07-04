import React from 'react';
import {TextComp, ViewComp} from '../../Common/commonComps.index';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {PhoneAuthenticationButtonCompStyle} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import PlatformHook from '../../../Hook/Platform/PlatformHook';

const PhoneAuthenticationButtonComp = (props: any): React.JSX.Element => {
  const {onActionButtonPress, onActionButtonText} = props;
  const {baseColor, splashText} = ReusableCompColors.lightTheme;
  const {isAndroid} = PlatformHook();
  const {container, textActionButtonContainer} =
    PhoneAuthenticationButtonCompStyle({
      baseColor,
      splashText,
      isAndroid,
    });
  const {TouchableComp} = ReusableCompString;
  return (
    <ViewComp
      viewType={TouchableComp}
      viewStyle={container}
      viewOnPress={onActionButtonPress}>
      <TextComp
        textStyle={textActionButtonContainer}
        textTitle={onActionButtonText}
      />
    </ViewComp>
  );
};

export default PhoneAuthenticationButtonComp;
