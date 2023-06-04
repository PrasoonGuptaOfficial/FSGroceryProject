import React from 'react';
import {TextComp, ViewComp} from '../../Common/commonComps.index';
import ReusableCompString from '../../../Constants/Strings/ReusableComp/ReusableCompString';
import {FloatingActionModalButtonStyle} from '../../../Styles/Common/Common';
import {ReusableCompColors} from '../../../Constants/Colors/ReusableComp/ReusableCompColor';
import LanguageHook from '../../../Hook/Language/LanguageHook';
import {LanguageIndia} from '../../../Data/LanguageData';
import {AppSymbol} from '../../../Constants/Symbols/App/AppSymbol';

type languageItemData = {
  id: number;
  language: string;
};

const FloatingActionButtonModal = (props: any): React.JSX.Element => {
  const {
    floatingButtonCloseHandler,
    floatingActionButtonLanguageSelected,
    floatingActionLanguage,
  } = props;
  const {SafeArea, FlatListComp, TouchableComp} = ReusableCompString;
  const {splashText, baseColor, buttonThemeColor} =
    ReusableCompColors.lightTheme;
  const {SelectLanguage} = LanguageHook('Floating');
  const {
    container,
    modalContainer,
    languageTextStyle,
    languageRenderContainer,
    languageTextStyleRenderItem,
    symbolTextStyleRenderItem,
  } = FloatingActionModalButtonStyle({
    splashText,
    baseColor,
    buttonThemeColor,
  });
  const {CheckMark} = AppSymbol;
  const onLanguageDropDownSelectedHandler = (langSelected: string) => {
    floatingActionButtonLanguageSelected(langSelected);
    floatingButtonCloseHandler();
  };
  const languageSelectionRenderItem = ({item}: {item: languageItemData}) => {
    return (
      <ViewComp
        viewType={TouchableComp}
        viewStyle={languageRenderContainer}
        viewOnPress={() => {
          onLanguageDropDownSelectedHandler(item.language);
        }}>
        <TextComp
          textTitle={item.language}
          textStyle={languageTextStyleRenderItem}
        />
        {floatingActionLanguage === item.language ? (
          <TextComp
            textTitle={CheckMark}
            textStyle={symbolTextStyleRenderItem}
          />
        ) : null}
      </ViewComp>
    );
  };
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ViewComp viewType={SafeArea} viewStyle={modalContainer}>
        <TextComp textTitle={SelectLanguage} textStyle={languageTextStyle} />
        <ViewComp
          viewType={FlatListComp}
          flatListData={LanguageIndia}
          flatListRenderItem={languageSelectionRenderItem}
        />
      </ViewComp>
    </ViewComp>
  );
};

export default FloatingActionButtonModal;
