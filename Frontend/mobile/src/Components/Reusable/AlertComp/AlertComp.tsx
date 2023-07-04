import React from 'react';
import {} from 'react-native';
import ViewComp from '../ViewComp/ViewComp';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {AlertCompStyle} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import TextComp from '../TextComp/TextComp';
import PressableComp from '../PressableComp/PressableComp';

const AlertComp = (props: any): React.JSX.Element => {
  const {
    alertText,
    alertOption,
    alertSecOption,
    alertOptionPress,
    alertOptionSecPress,
  } = props;
  const {splashText, buttonThemeColor, baseColor} =
    ReusableCompColors.lightTheme;
  const {
    container,
    modalContainer,
    modalQuestionTextStyle,
    modalButtonStyle,
    modalOkButtonStyle,
    modalButtonTextStyle,
  } = AlertCompStyle({
    splashText,
    buttonThemeColor,
    baseColor,
  });
  const {SafeArea} = ReusableCompString;
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ViewComp viewType={SafeArea} viewStyle={modalContainer}>
        <TextComp textTitle={alertText} textStyle={modalQuestionTextStyle} />
        <ViewComp viewType={SafeArea} viewStyle={modalButtonStyle}>
          <PressableComp
            pressableTextTitle={alertOption}
            pressableStyle={modalOkButtonStyle}
            pressableOnPress={alertOptionPress}
            pressableTextStyle={modalButtonTextStyle}
          />
          <PressableComp
            pressableTextTitle={alertSecOption}
            pressableStyle={modalOkButtonStyle}
            pressableOnPress={alertOptionSecPress}
            pressableTextStyle={modalButtonTextStyle}
          />
        </ViewComp>
      </ViewComp>
    </ViewComp>
  );
};

export default AlertComp;
