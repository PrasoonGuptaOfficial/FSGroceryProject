import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';

const ViewComp = (props: any): React.JSX.Element => {
  const {children, viewType = 1, viewStyle} = props;
  switch (viewType) {
    case ReusableCompString.Simple:
      return <View style={viewStyle}>{children}</View>;
    case ReusableCompString.SafeArea:
      return <SafeAreaView style={viewStyle}>{children}</SafeAreaView>;
    default:
      return <View style={viewStyle}>{children}</View>;
  }
};

export default ViewComp;
