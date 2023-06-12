import React from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import PlatformHook from '../../../Hook/Platform/PlatformHook';

const ViewComp = (props: any): React.JSX.Element => {
  const {
    children,
    viewType,
    viewStyle,
    viewOnPress,
    flatListData,
    flatListRenderItem,
  } = props;
  const {isIOS} = PlatformHook();
  switch (viewType) {
    case ReusableCompString.Simple:
      return <View style={viewStyle}>{children}</View>;
    case ReusableCompString.SafeArea:
      return <SafeAreaView style={viewStyle}>{children}</SafeAreaView>;
    case ReusableCompString.TouchableComp:
      return (
        <TouchableOpacity style={viewStyle} onPress={viewOnPress}>
          {children}
        </TouchableOpacity>
      );
    case ReusableCompString.FlatListComp:
      return (
        <FlatList
          initialNumToRender={flatListData.length}
          data={flatListData}
          renderItem={flatListRenderItem}
          keyExtractor={item => item.id.toString()}
        />
      );
    case ReusableCompString.KeyboardAvoiding:
      return (
        <KeyboardAvoidingView
          behavior={isIOS ? 'padding' : 'height'}
          style={viewStyle}>
          {children}
        </KeyboardAvoidingView>
      );
    default:
      return <View style={viewStyle}>{children}</View>;
  }
};

export default ViewComp;
