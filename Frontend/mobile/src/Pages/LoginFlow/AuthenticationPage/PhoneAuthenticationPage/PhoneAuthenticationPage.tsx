import React from 'react';
import {
  ImageBackgroundComp,
  PressableComp,
  TextComp,
  ViewComp,
} from '../../../../Components/Common/commonComps.index';
import ReusableCompString from '../../../../Constants/Strings/ReusableComp/ReusableCompString';
import {PhoneAuthenticationPageStyle} from '../../../../Styles/Common/Common';
import PNGImages from '../../../../Constants/Images/PNG/PNGImages';
import {ReusableSymbol} from '../../../../Constants/Symbols/Reusable/ReusableSymbol';
import {ReusableCompColors} from '../../../../Constants/Colors/ReusableComp/ReusableCompColor';
import {useNavigation} from '@react-navigation/native';
import LanguageHook from '../../../../Hook/Language/LanguageHook';

const PhoneAuthenticationPage = (): React.JSX.Element => {
  const navigation: any = useNavigation();
  const {SafeArea, PhoneAuthenticate} = ReusableCompString;
  const {MainSignIn} = PNGImages;
  const {Back} = ReusableSymbol;
  const {
    splashText: splashBlackText,
    MobileNumberText,
    placeHolderTheme,
    backgroundTheme,
  } = ReusableCompColors.darkTheme;
  const {EnterMobileNumber, MobileNumber} = LanguageHook(PhoneAuthenticate);
  const {
    container,
    imageContainer,
    backTextStyle,
    mobileNumberTextStyle,
    mobileNumberHeaderTextStyle,
  } = PhoneAuthenticationPageStyle({
    splashBlackText,
    MobileNumberText,
    placeHolderTheme,
    backgroundTheme,
  });
  const onPressBackHandler = () => {
    navigation.goBack();
  };
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ImageBackgroundComp
        imageBackgroundSource={MainSignIn}
        imageBackgroundStyle={imageContainer}>
        <PressableComp
          pressableTextTitle={Back}
          pressableTextStyle={backTextStyle}
          pressableOnPress={onPressBackHandler}
        />
      </ImageBackgroundComp>
      <TextComp
        textTitle={EnterMobileNumber}
        textStyle={mobileNumberTextStyle}
      />
      <TextComp
        textTitle={MobileNumber}
        textStyle={mobileNumberHeaderTextStyle}
      />
    </ViewComp>
  );
};

export default PhoneAuthenticationPage;
