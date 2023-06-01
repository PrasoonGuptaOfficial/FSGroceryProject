import React, {useMemo} from 'react';
import {TextComp, ViewComp} from '../../Components/Common/commonComps.index';
import SplashPageString from '../../Constants/Strings/App/SplashPageString';
import {SplashPageStyle} from '../../Styles/Common/Common';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';
import ThemeColorHook from '../../Hook/ThemeColor/ThemeColorHook';

const SplashScreen = (): React.JSX.Element => {
  const {splashText, baseColor} = ThemeColorHook();
  const {container, rowContainerView, textContainer} = useMemo(
    () =>
      SplashPageStyle({
        splashText,
        baseColor,
      }),
    [splashText, baseColor],
  );
  return (
    <ViewComp viewType={ReusableCompString.SafeArea} viewStyle={container}>
      <ViewComp
        viewType={ReusableCompString.Simple}
        viewStyle={rowContainerView}>
        <TextComp textTitle="SplashScreen" />
        <TextComp
          textTitle={SplashPageString.Nectar}
          textStyle={textContainer}
        />
      </ViewComp>
    </ViewComp>
  );
};

export default SplashScreen;
