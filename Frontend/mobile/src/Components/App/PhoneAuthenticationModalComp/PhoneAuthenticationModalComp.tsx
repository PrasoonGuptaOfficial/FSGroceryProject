import React from 'react';
import {PNGImageComp, TextComp, ViewComp} from '../../Common/commonComps.index';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {PhoneAuthenticationModalCompStyle} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import LanguageHook from '../../../Hook/Language/LanguageHook';
import {CountryCode} from '../../../Data/CountryCodesData';
import {AppSymbol} from '../../../Constants/Symbols/App/AppSymbol';

type CountryCodeData = {
  id: number;
  countryName: string;
  countryKey: string;
  countryImage: string;
  countryCode: number;
};

const PhoneAuthenticationModalComp = (props: any): React.JSX.Element => {
  const {
    PhoneAuthenticateCloseHandler,
    PhoneAuthenticateCountryFlagSelected,
    PhoneAuthenticateCountryFlagSelectedHandler,
  } = props;
  const {SafeArea, PhoneAuthenticate, FlatListComp, TouchableComp} =
    ReusableCompString;
  const {CheckMark} = AppSymbol;
  const {splashText, baseColor, buttonThemeColor} =
    ReusableCompColors.lightTheme;
  const {SelectCountry} = LanguageHook(PhoneAuthenticate);
  const {
    container,
    modalContainer,
    countryTextStyle,
    countryFlagRenderContainer,
    symbolTextStyleRenderItem,
    countrySelectionImageStyle,
    countryImageSelectionTextStyle,
  } = PhoneAuthenticationModalCompStyle({
    splashText,
    baseColor,
    buttonThemeColor,
  });
  const onCountryItemSelectedHandler = (countryDataObject: CountryCodeData) => {
    PhoneAuthenticateCountryFlagSelectedHandler(countryDataObject);
    PhoneAuthenticateCloseHandler();
  };
  const countrySelectionRenderItem = ({item}: {item: CountryCodeData}) => {
    return (
      <ViewComp
        viewType={TouchableComp}
        viewStyle={countryFlagRenderContainer}
        viewOnPress={() => {
          onCountryItemSelectedHandler(item);
        }}>
        <PNGImageComp
          PngImage={item.countryImage}
          PngImageStyle={countrySelectionImageStyle}
        />
        <TextComp
          textTitle={item.countryName}
          textStyle={countryImageSelectionTextStyle}
        />
        {PhoneAuthenticateCountryFlagSelected.countryKey === item.countryKey ? (
          <TextComp
            textTitle={CheckMark}
            textStyle={symbolTextStyleRenderItem}
          />
        ) : (
          <ViewComp />
        )}
      </ViewComp>
    );
  };
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ViewComp viewType={SafeArea} viewStyle={modalContainer}>
        <TextComp textTitle={SelectCountry} textStyle={countryTextStyle} />
        <ViewComp
          viewType={FlatListComp}
          flatListData={CountryCode}
          flatListRenderItem={countrySelectionRenderItem}
        />
      </ViewComp>
    </ViewComp>
  );
};

export default PhoneAuthenticationModalComp;
