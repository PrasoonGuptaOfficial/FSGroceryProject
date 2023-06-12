import React, {useState} from 'react';
import {} from 'react-native';
import {
  ActivityIndicatorComp,
  ErrorComp,
  PressableComp,
  TextComp,
  TextInputComp,
  ViewComp,
} from '../../Common/commonComps.index';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {PhoneAuthenticationOtpVerifyModalStyles} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import LanguageHook from '../../../Hook/Language/LanguageHook';
import {GetOtpVerified} from '../../../Helper/GetOtpVerified';

const PhoneAuthenticationOtpVerifyModal = (props: any): React.JSX.Element => {
  const {PhoneAuthenticateOtpCloseHandler, PhoneAuthenticationOtpVerify} =
    props;
  const [enterOtpText, setEnterOtpText] = useState('');
  const [otpButtonVisibleHandler, onOtpButtonVisibleHandler] = useState(false);
  const [isActivityIndicatorVisible, setIsActivityIndicatorVisible] =
    useState(false);
  const [isOtpErrorVisible, setIsOtpErrorVisible] = useState(false);
  const {SafeArea, PhoneAuthenticate} = ReusableCompString;
  const {splashText, baseColor, placeHolderTheme, buttonThemeColor} =
    ReusableCompColors.lightTheme;
  const {splashText: splashBlackText, errorThemeColor} =
    ReusableCompColors.darkTheme;
  const {enterOtp, otpPlaceholder, Continue, ErrorOtpVerifiedText} =
    LanguageHook(PhoneAuthenticate);
  const {
    container,
    modalContainer,
    enterOtpTitleTextStyle,
    otpInputTextStyle,
    ContinueButtonTextContainer,
    ContinueButtonContainer,
    errorTextStyle,
  } = PhoneAuthenticationOtpVerifyModalStyles({
    splashText,
    baseColor,
    splashBlackText,
    buttonThemeColor,
    errorThemeColor,
  });
  const onEnterOtpHandler = (otp: string) => {
    if (otp.length === 6) {
      onOtpButtonVisibleHandler(true);
    } else {
      onOtpButtonVisibleHandler(false);
    }
    setEnterOtpText(otp);
  };
  const onSubmitOtpVerifyHandler = async () => {
    setIsActivityIndicatorVisible(true);
    const PhoneOtpVerification = await GetOtpVerified(
      enterOtpText,
      PhoneAuthenticationOtpVerify,
    );
    if (PhoneOtpVerification?.errorFlag) {
      setIsActivityIndicatorVisible(false);
      setIsOtpErrorVisible(true);
    } else {
      setIsActivityIndicatorVisible(false);
      setIsOtpErrorVisible(false);
      PhoneAuthenticateOtpCloseHandler();
      setEnterOtpText('');
    }
  };
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ViewComp viewType={SafeArea} viewStyle={modalContainer}>
        <TextComp textTitle={enterOtp} textStyle={enterOtpTitleTextStyle} />
        <TextInputComp
          textInputValue={enterOtpText}
          textInputOnChangeTextHandler={onEnterOtpHandler}
          textInputAutoCompleteMode={'tel'}
          textInputModeSelected={'tel'}
          textInputKeyboardType={'number-pad'}
          textInputMaxLength={6}
          textInputPlaceHolder={otpPlaceholder}
          textInputPlaceHolderColor={placeHolderTheme}
          textInputStyle={otpInputTextStyle}
          textInputAlignment={'center'}
        />
        {isOtpErrorVisible && (
          <ErrorComp
            errorTitle={ErrorOtpVerifiedText}
            errorStyle={errorTextStyle}
          />
        )}
        {otpButtonVisibleHandler && (
          <PressableComp
            pressableTextTitle={Continue}
            pressableTextStyle={ContinueButtonTextContainer}
            pressableStyle={ContinueButtonContainer}
            pressableOnPress={onSubmitOtpVerifyHandler}
          />
        )}
        {isActivityIndicatorVisible && <ActivityIndicatorComp />}
      </ViewComp>
    </ViewComp>
  );
};

export default PhoneAuthenticationOtpVerifyModal;
