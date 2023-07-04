import React from 'react';
import {ActivityIndicator} from 'react-native';
import ViewComp from '../ViewComp/ViewComp';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {ActivityIndicatorContainerStyle} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';

const ActivityIndicatorComp = (): React.JSX.Element => {
  const {SafeArea} = ReusableCompString;
  const {container} = ActivityIndicatorContainerStyle();
  const {buttonThemeColor} = ReusableCompColors.lightTheme;
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ActivityIndicator size="large" color={buttonThemeColor} />
    </ViewComp>
  );
};

export default ActivityIndicatorComp;
