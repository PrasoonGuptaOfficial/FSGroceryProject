import React, {useContext, useState} from 'react';
import {
  ActivityIndicatorComp,
  ErrorComp,
  ImageBackgroundComp,
  ModalComp,
  PhoneAuthenticationButtonComp,
  PhoneAuthenticationOtpVerifyModal,
  PressableComp,
  TextComp,
  TextInputComp,
  ViewComp,
} from '../../../../Components/Common/commonComps.index';
import ReusableCompString from '../../../../Constants/Strings/ReusableComp/ReusableCompString';
import {PhoneAuthenticationPageStyle} from '../../../../Styles/Common/Common';
import PNGImages from '../../../../Constants/Images/PNG/PNGImages';
import {ReusableSymbol} from '../../../../Constants/Symbols/Reusable/ReusableSymbol';
import {ReusableCompColors} from '../../../../Constants/Colors/ReusableComp/ReusableCompColor';
import {useNavigation} from '@react-navigation/native';
import LanguageHook from '../../../../Hook/Language/LanguageHook';
import PhoneAuthenticationModalComp from '../../../../Components/App/PhoneAuthenticationModalComp/PhoneAuthenticationModalComp';
import CountryContext from '../../../../Context/Country/CountryContext';
import {GetPhoneNumberOtp} from '../../../../Helper/GetPhoneNumberOtp';

type CountryCodeData = {
  id: number;
  countryName: string;
  countryKey: string;
  countryImage: string;
  countryCode: number;
};

const PhoneAuthenticationPage = (): React.JSX.Element => {
  const navigation: any = useNavigation();
  const CountryData = useContext(CountryContext);
  const {defaultCountry, onCountryChangeHandler} = CountryData;
  const [countryFlags, setCountryFlags] = useState(defaultCountry);
  const [onModalCountryFlagVisible, setOnModalCountryFlagVisible] =
    useState(false);
  const [phoneNumberInput, setPhoneNumberInput] = useState('');
  const [isErrorVisibleFlag, setIsErrorVisibleFlag] = useState(true);
  const [isActivityHandlerVisible, setIsActivityHandler] = useState(false);
  const [
    isErrorVisiblePhoneNumberResponse,
    setIsErrorVisiblePhoneNumberResponse,
  ] = useState(false);
  const [onModalVerifyOtpVisible, setOnModalVerifyOtpVisible] = useState(false);
  const [phoneNumberOtpResponseChosen, setPhoneNumberOtpResponseChosen] =
    useState({});
  const {SafeArea, PhoneAuthenticate} = ReusableCompString;
  const {MainSignIn} = PNGImages;
  const {Back, Right} = ReusableSymbol;
  const {
    splashText: splashBlackText,
    MobileNumberText,
    backgroundTheme,
    baseColor,
    placeHolderTheme,
    errorThemeColor,
  } = ReusableCompColors.darkTheme;
  const {
    EnterMobileNumber,
    phonePlaceholder,
    errorPhoneNumber,
    errorPhoneNumberResponse,
  } = LanguageHook(PhoneAuthenticate);
  const {
    container,
    imageContainer,
    backTextStyle,
    mobileNumberTextStyle,
    mobileInputViewStyle,
    countrySelectionImageStyle,
    countryCodeSelectedTextStyle,
    textInputContainerStyle,
    errorTextStyle,
  } = PhoneAuthenticationPageStyle({
    splashBlackText,
    MobileNumberText,
    backgroundTheme,
    baseColor,
    errorThemeColor,
  });
  const onPressBackHandler = () => {
    navigation.goBack();
  };
  const onCountryImageSelectionHandler = () => {
    setOnModalCountryFlagVisible(true);
  };
  const onModalCountryFlagHandler = () => {
    setOnModalCountryFlagVisible(false);
  };
  const onAuthenticatePhoneFlagSelectedHandler = (
    countryFlagObject: CountryCodeData,
  ) => {
    onCountryChangeHandler(countryFlagObject);
    setCountryFlags(countryFlagObject);
  };
  const onInputChangeHandler = (phoneNumber: string) => {
    if (phoneNumber.length >= 4 && phoneNumber.length <= 10) {
      setIsErrorVisibleFlag(false);
    } else if (phoneNumber.length < 4) {
      setIsErrorVisibleFlag(true);
    }
    setPhoneNumberInput(phoneNumber);
  };
  const onModalVerifyOtpCloseHandler = () => {
    setOnModalVerifyOtpVisible(false);
  };
  const onSubmitButtonHandler = async () => {
    let finalPhoneNumber: string = `+${countryFlags.countryCode}${phoneNumberInput}`;
    setIsActivityHandler(true);
    const phoneNumberResponse = await GetPhoneNumberOtp(finalPhoneNumber);
    if (phoneNumberResponse) {
      setIsActivityHandler(false);
      if (phoneNumberResponse.errorFlag) {
        setIsErrorVisiblePhoneNumberResponse(true);
      } else {
        setIsErrorVisiblePhoneNumberResponse(false);
        setPhoneNumberOtpResponseChosen(
          phoneNumberResponse.phoneNumberOtpResponse,
        );
        setOnModalVerifyOtpVisible(true);
      }
    }
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
      <ViewComp viewType={SafeArea} viewStyle={mobileInputViewStyle}>
        <PressableComp
          pressableImagePng={countryFlags.countryImage}
          pressableImagePngStyle={countrySelectionImageStyle}
          pressableOnPress={onCountryImageSelectionHandler}
        />
        <TextComp
          textTitle={`+${countryFlags.countryCode}`}
          textStyle={countryCodeSelectedTextStyle}
        />
        <TextInputComp
          textInputValue={phoneNumberInput}
          textInputOnChangeTextHandler={onInputChangeHandler}
          textInputPlaceHolder={phonePlaceholder}
          textInputAutoCompleteMode={'tel'}
          textInputModeSelected={'tel'}
          textInputKeyboardType={'number-pad'}
          textInputMaxLength={10}
          textInputStyle={textInputContainerStyle}
          textInputPlaceHolderColor={placeHolderTheme}
          textInputAlignment={'left'}
        />
      </ViewComp>
      {isErrorVisibleFlag && (
        <ErrorComp errorTitle={errorPhoneNumber} errorStyle={errorTextStyle} />
      )}
      {!isErrorVisibleFlag && (
        <PhoneAuthenticationButtonComp
          onActionButtonPress={onSubmitButtonHandler}
          onActionButtonText={Right}
        />
      )}
      {isErrorVisiblePhoneNumberResponse && (
        <ErrorComp
          errorTitle={errorPhoneNumberResponse}
          errorStyle={errorTextStyle}
        />
      )}
      {isActivityHandlerVisible && <ActivityIndicatorComp />}
      <ModalComp
        modalVisibleFlag={onModalCountryFlagVisible}
        modalVisibleClose={onModalCountryFlagHandler}>
        <PhoneAuthenticationModalComp
          PhoneAuthenticateCloseHandler={onModalCountryFlagHandler}
          PhoneAuthenticateCountryFlagSelected={countryFlags}
          PhoneAuthenticateCountryFlagSelectedHandler={
            onAuthenticatePhoneFlagSelectedHandler
          }
        />
      </ModalComp>
      <ModalComp
        modalVisibleFlag={onModalVerifyOtpVisible}
        modalVisibleClose={onModalVerifyOtpCloseHandler}>
        <PhoneAuthenticationOtpVerifyModal
          PhoneAuthenticateOtpCloseHandler={onModalVerifyOtpCloseHandler}
          PhoneAuthenticationOtpVerify={phoneNumberOtpResponseChosen}
          PhoneNumberInputValue={phoneNumberInput}
        />
      </ModalComp>
    </ViewComp>
  );
};

export default PhoneAuthenticationPage;
