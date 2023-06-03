import React, {useMemo} from 'react';
import {
  ImageBackgroundComp,
  PressableComp,
  TextComp,
  ViewComp,
} from '../../Components/Common/commonComps.index';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';
import PNGImages from '../../Constants/Images/PNG/PNGImages';
import {OnboardingPageStyle} from '../../Styles/Common/Common';
import OnboardingPageString from '../../Constants/Strings/App/OnboardingPageString';
import {ReusableCompColors} from '../../Constants/Colors/ReusableComp/ReusableCompColor';

const OnboardingScreen = (): React.JSX.Element => {
  const {OnboardingGrocery} = PNGImages;
  const {splashText, buttonThemeColor} = ReusableCompColors.lightTheme;
  const {
    container,
    imageContainer,
    imageOverlayViewContainer,
    welcomingTextContainer,
    sloganTextContainer,
    pressableTextContainer,
    pressableContainer,
  } = useMemo(
    () =>
      OnboardingPageStyle({
        splashText,
        buttonThemeColor,
      }),
    [splashText, buttonThemeColor],
  );
  const {WelcomingStore, GrocerySlogan, GetStartedButton} =
    OnboardingPageString;
  const onPressChangeHandler = () => {};
  return (
    <ViewComp viewType={ReusableCompString.SafeArea} viewStyle={container}>
      <ImageBackgroundComp
        imageBackgroundSource={OnboardingGrocery}
        imageBackgroundStyle={imageContainer}>
        <ViewComp
          viewType={ReusableCompString.SafeArea}
          viewStyle={imageOverlayViewContainer}>
          <TextComp
            textTitle={WelcomingStore}
            textStyle={welcomingTextContainer}
          />
          <TextComp textTitle={GrocerySlogan} textStyle={sloganTextContainer} />
          <PressableComp
            pressableTextTitle={GetStartedButton}
            pressableTextStyle={pressableTextContainer}
            pressableStyle={pressableContainer}
            pressableOnPress={onPressChangeHandler}
          />
        </ViewComp>
      </ImageBackgroundComp>
    </ViewComp>
  );
};

export default OnboardingScreen;
