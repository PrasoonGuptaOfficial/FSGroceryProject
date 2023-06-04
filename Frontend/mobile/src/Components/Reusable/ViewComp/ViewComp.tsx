import React from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';

const ViewComp = (props: any): React.JSX.Element => {
  const {
    children,
    viewType,
    viewStyle,
    viewOnPress,
    flatListData,
    flatListRenderItem,
  } = props;
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
    default:
      return <View style={viewStyle}>{children}</View>;
  }
};

export default ViewComp;
