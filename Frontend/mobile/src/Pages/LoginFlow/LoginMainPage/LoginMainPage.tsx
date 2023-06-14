import React, {useState} from 'react';
import {
  ActivityIndicatorComp,
  ErrorComp,
  PNGImageComp,
  PressableComp,
  TextComp,
  ViewComp,
} from '../../../Components/Common/commonComps.index';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {LoginMainPageStyle} from '../../../Styles/Common/Common';
import PNGImages from '../../../Constants/Images/PNG/PNGImages';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import SVGImages from '../../../Constants/Images/SVG/SVGImages';
import {AppSymbol} from '../../../Constants/Symbols/App/AppSymbol';
import LanguageHook from '../../../Hook/Language/LanguageHook';
import {useNavigation} from '@react-navigation/native';
import {GetGoogleSignInVerified} from '../../../Helper/GetGoogleSignInVerified';

const LoginMainPage = (): React.JSX.Element => {
  const navigation: any = useNavigation();
  const [isGoogleActivityIndicatorVisible, setIsActivityIndicatorVisible] =
    useState(false);
  const [errorVerifyGoogleAccount, setErrorVerifyGoogleAccount] =
    useState(false);
  const [errorProgressGoogleAccount, setErrorProgressGoogleAccount] =
    useState(false);
  const [errorPlayServicesGoogleAccount, setErrorPlayServicesGoogleAccount] =
    useState(false);
  const [errorCancelledGoogleAccount, setErrorCancelledGoogleAccount] =
    useState(false);
  const [googleAccountDetails, setGoogleAccountDetails] = useState({});
  const {SafeArea, LoginMainPageSc} = ReusableCompString;
  const {MainSignIn} = PNGImages;
  const {
    backgroundTheme,
    splashText,
    googleBackgroundTheme,
    phoneBackgroundTheme,
    errorThemeColor,
  } = ReusableCompColors.lightTheme;
  const {splashText: splashTextBlack} = ReusableCompColors.darkTheme;
  const {GoogleLogo, AppleLogo} = SVGImages;
  const {
    GetYourGroceries,
    ContinuePhone,
    ContinueGoogle,
    ContinueApple,
    ErrorGoogleVerifyAccount,
    ErrorSignInProgress,
    ErrorGooglePlayServices,
    ErrorCancelledSignInFlow,
  } = LanguageHook(LoginMainPageSc);
  const {Phone} = AppSymbol;
  const {
    container,
    imageContainer,
    appleButtonContainer,
    appleTextContainer,
    googleButtonContainer,
    googleLogoContainer,
    phoneButtonContainer,
    phoneTextContainer,
    titleTextContainer,
    errorTextStyle,
  } = LoginMainPageStyle({
    backgroundTheme,
    splashText,
    splashTextBlack,
    googleBackgroundTheme,
    phoneBackgroundTheme,
    errorThemeColor,
  });
  const onPressPhoneHandler = async () => {
    navigation.navigate('LoginPhoneAuthentication');
  };
  const onPressGoogleHandler = async () => {
    setIsActivityIndicatorVisible(true);
    const googleUserDetails = await GetGoogleSignInVerified();
    const {
      userDetails,
      errorFlag,
      errorInProgressFlag,
      errorPlayServicesFlag,
      errorSignInFlag,
    } = googleUserDetails;
    if (errorFlag) {
      setErrorVerifyGoogleAccount(true);
      setErrorProgressGoogleAccount(false);
      setErrorPlayServicesGoogleAccount(false);
      setErrorCancelledGoogleAccount(false);
      setIsActivityIndicatorVisible(false);
      setGoogleAccountDetails({});
    } else if (errorInProgressFlag) {
      setErrorVerifyGoogleAccount(false);
      setErrorProgressGoogleAccount(true);
      setErrorPlayServicesGoogleAccount(false);
      setErrorCancelledGoogleAccount(false);
      setIsActivityIndicatorVisible(false);
      setGoogleAccountDetails({});
    } else if (errorPlayServicesFlag) {
      setErrorVerifyGoogleAccount(false);
      setErrorProgressGoogleAccount(false);
      setErrorPlayServicesGoogleAccount(true);
      setErrorCancelledGoogleAccount(false);
      setIsActivityIndicatorVisible(false);
      setGoogleAccountDetails({});
    } else if (errorSignInFlag) {
      setErrorVerifyGoogleAccount(false);
      setErrorProgressGoogleAccount(false);
      setErrorPlayServicesGoogleAccount(false);
      setErrorCancelledGoogleAccount(true);
      setIsActivityIndicatorVisible(false);
      setGoogleAccountDetails({});
    } else {
      setErrorVerifyGoogleAccount(false);
      setErrorProgressGoogleAccount(false);
      setErrorPlayServicesGoogleAccount(false);
      setErrorCancelledGoogleAccount(false);
      setIsActivityIndicatorVisible(false);
      setGoogleAccountDetails(userDetails);
    }
  };
  const onPressAppleHandler = async () => {};
  const onVerifiedGoogleHandler = () => {};
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <PNGImageComp PngImage={MainSignIn} PngImageStyle={imageContainer} />
      <TextComp textTitle={GetYourGroceries} textStyle={titleTextContainer} />
      <PressableComp
        pressableStyle={phoneButtonContainer}
        pressableOnPress={onPressPhoneHandler}
        pressableTextTitle={ContinuePhone}
        pressableTextStyle={appleTextContainer}
        pressableTextSubTitle={Phone}
        pressableSubTextStyle={phoneTextContainer}
      />
      <PressableComp
        pressableStyle={googleButtonContainer}
        pressableOnPress={onPressGoogleHandler}
        pressableTextTitle={ContinueGoogle}
        pressableTextStyle={appleTextContainer}
        pressableImage={GoogleLogo}
        pressableImageWidth={googleLogoContainer}
      />
      {errorVerifyGoogleAccount && (
        <ErrorComp
          errorTitle={ErrorGoogleVerifyAccount}
          errorStyle={errorTextStyle}
        />
      )}
      {errorProgressGoogleAccount && (
        <ErrorComp
          errorTitle={ErrorSignInProgress}
          errorStyle={errorTextStyle}
        />
      )}
      {errorPlayServicesGoogleAccount && (
        <ErrorComp
          errorTitle={ErrorGooglePlayServices}
          errorStyle={errorTextStyle}
        />
      )}
      {errorCancelledGoogleAccount && (
        <ErrorComp
          errorTitle={ErrorCancelledSignInFlow}
          errorStyle={errorTextStyle}
        />
      )}
      {googleAccountDetails && onVerifiedGoogleHandler()}
      <PressableComp
        pressableStyle={appleButtonContainer}
        pressableOnPress={onPressAppleHandler}
        pressableTextTitle={ContinueApple}
        pressableTextStyle={appleTextContainer}
        pressableImage={AppleLogo}
        pressableImageWidth={googleLogoContainer}
      />
      {isGoogleActivityIndicatorVisible && <ActivityIndicatorComp />}
    </ViewComp>
  );
};

export default LoginMainPage;
