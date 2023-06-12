import React from 'react';
import {
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
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginMainPage = (): React.JSX.Element => {
  const navigation: any = useNavigation();
  const {SafeArea, LoginMainPageSc} = ReusableCompString;
  const {MainSignIn} = PNGImages;
  const {
    backgroundTheme,
    splashText,
    googleBackgroundTheme,
    mailBackgroundTheme,
    phoneBackgroundTheme,
    buttonThemeColor,
  } = ReusableCompColors.lightTheme;
  const {splashText: splashTextBlack} = ReusableCompColors.darkTheme;
  const {GoogleLogo, AppleLogo, MailLogo} = SVGImages;
  const {
    GetYourGroceries,
    ContinuePhone,
    ContinueEmail,
    ContinueGoogle,
    ContinueApple,
    NotAccount,
    SignUp,
  } = LanguageHook(LoginMainPageSc);
  const {Phone} = AppSymbol;
  const {
    container,
    imageContainer,
    appleButtonContainer,
    appleTextContainer,
    googleButtonContainer,
    googleLogoContainer,
    mailButtonContainer,
    phoneButtonContainer,
    phoneTextContainer,
    notAccountContainer,
    notAccountTextContainer,
    notAccountTextSignUpContainer,
    titleTextContainer,
  } = LoginMainPageStyle({
    backgroundTheme,
    splashText,
    splashTextBlack,
    googleBackgroundTheme,
    mailBackgroundTheme,
    phoneBackgroundTheme,
    buttonThemeColor,
  });
  const onPressPhoneHandler = async () => {
    navigation.navigate('LoginPhoneAuthentication');
  };
  const onPressEmailHandler = () => {};
  const onPressGoogleHandler = () => {
    // GoogleSignin.configure({
    //   scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
    //   webClientId:
    //     '528260113137-uod9foj8kmjk78clniqpe06s3ed40did.apps.googleusercontent.com',
    //   iosClientId:
    //     '528260113137-b13hq8d3e6u4gvd5lkiqasvp8r3m34gf.apps.googleusercontent.com',
    //   offlineAccess: true,
    // });
    // GoogleSignin.hasPlayServices()
    //   .then(hasPlayServices => {
    //     if (hasPlayServices) {
    //       GoogleSignin.signIn()
    //         .then(userInfo => {
    //           console.log('SUCCESS SIGN IN: ', JSON.stringify(userInfo));
    //         })
    //         .catch(error =>
    //           console.log('ERROR SIGN IN: ', JSON.stringify(error)),
    //         );
    //     }
    //   })
    //   .catch(error => console.log('ERROR IS: ', JSON.stringify(error)));
  };
  const onPressAppleHandler = async () => {
    // try {
    //   const response = await confirmData.confirm(input);
    //   console.log('SUCCESS VERIFIED: ', JSON.stringify(response));
    // } catch (error) {
    //   console.log('ERROR IS: ', JSON.stringify(error));
    // }
  };
  const onPressSignUpHandler = () => {};
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
        pressableStyle={mailButtonContainer}
        pressableOnPress={onPressEmailHandler}
        pressableTextTitle={ContinueEmail}
        pressableTextStyle={appleTextContainer}
        pressableImage={MailLogo}
        pressableImageWidth={googleLogoContainer}
      />
      <PressableComp
        pressableStyle={googleButtonContainer}
        pressableOnPress={onPressGoogleHandler}
        pressableTextTitle={ContinueGoogle}
        pressableTextStyle={appleTextContainer}
        pressableImage={GoogleLogo}
        pressableImageWidth={googleLogoContainer}
      />
      <PressableComp
        pressableStyle={appleButtonContainer}
        pressableOnPress={onPressAppleHandler}
        pressableTextTitle={ContinueApple}
        pressableTextStyle={appleTextContainer}
        pressableImage={AppleLogo}
        pressableImageWidth={googleLogoContainer}
      />
      <ViewComp viewType={SafeArea} viewStyle={notAccountContainer}>
        <TextComp textTitle={NotAccount} textStyle={notAccountTextContainer} />
        <PressableComp
          pressableTextTitle={SignUp}
          pressableTextStyle={notAccountTextSignUpContainer}
          pressableOnPress={onPressSignUpHandler}
        />
      </ViewComp>
    </ViewComp>
  );
};

export default LoginMainPage;
