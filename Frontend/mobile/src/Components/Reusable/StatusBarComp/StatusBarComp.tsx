import React, {useMemo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import ViewComp from '../ViewComp/ViewComp';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import ThemeColorHook from '../../../Hook/ThemeColor/ThemeColorHook';
import PlatformHook from '../../../Hook/Platform/PlatformHook';

const StatusBarComp = (): React.JSX.Element => {
  const {baseColor} = ThemeColorHook();
  const {isAndroid} = PlatformHook();
  const {container} = useMemo(
    () =>
      styles({
        baseColor,
        isAndroid,
      }),
    [baseColor, isAndroid],
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

const styles = ({
  baseColor,
  isAndroid,
}: {
  baseColor: string;
  isAndroid: boolean | undefined;
}) => {
  return StyleSheet.create({
    container: {
      height: isAndroid ? 20 : StatusBar.currentHeight,
      backgroundColor: baseColor,
    },
  });
};

export default StatusBarComp;
