import React, {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import ViewComp from '../ViewComp/ViewComp';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import ThemeColorHook from '../../../Hook/ThemeColor/ThemeColorHook';

const StatusBarComp = (): React.JSX.Element => {
  const {baseColor} = ThemeColorHook();
  const {container} = useMemo(
    () =>
      styles({
        baseColor,
      }),
    [baseColor],
  );
  return (
    <ViewComp viewType={ReusableCompString.Simple} viewStyle={container}>
      <ViewComp viewType={ReusableCompString.SafeArea}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={baseColor}
          translucent
        />
      </ViewComp>
    </ViewComp>
  );
};

const styles = ({baseColor}: {baseColor: string}) => {
  return StyleSheet.create({
    container: {
      height: StatusBar.currentHeight,
      backgroundColor: baseColor,
    },
  });
};

export default StatusBarComp;
