import React, {useContext, useState} from 'react';
import {
  FloatingActionButtonComp,
  ImageBackgroundComp,
  ModalComp,
  PressableComp,
  TextComp,
  ViewComp,
} from '../../Components/Common/commonComps.index';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';
import PNGImages from '../../Constants/Images/PNG/PNGImages';
import {OnboardingPageStyle} from '../../Styles/Common/Common';
import {ReusableCompColors} from '../../Constants/Colors/ReusableComp/ReusableCompColor';
import LanguageContext from '../../Context/Language/LanguageContext';
import {AppSymbol} from '../../Constants/Symbols/App/AppSymbol';
import FloatingActionButtonModal from '../../Components/App/FloatingActonButtonComp/FloatingActionButtonModal';
import LanguageHook from '../../Hook/Language/LanguageHook';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = (): React.JSX.Element => {
  const navigation: any = useNavigation();
  const [isFloatingButtonModalVisible, setIsFloatingButtonModalVisible] =
    useState(false);
  const Language = useContext(LanguageContext);
  const {onLanguageChangeHandler, defaultLanguage} = Language;
  const [languageSelected, setLanguageSelected] = useState(defaultLanguage);
  const {OnboardingGrocery} = PNGImages;
  const {splashText, buttonThemeColor} = ReusableCompColors.lightTheme;
  const {
    container,
    imageContainer,
    imageOverlayViewContainer,
    welcomingTextContainer,
    sloganTextContainer,
    pressableContainer,
    pressableTextContainer,
  } = OnboardingPageStyle({splashText, buttonThemeColor});
  const {SafeArea, Onboarding} = ReusableCompString;
  const {WelcomingStore, GrocerySlogan, GetStartedButton} =
    LanguageHook(Onboarding);
  const {Plus} = AppSymbol;
  const onPressChangeHandler = () => {
    navigation.navigate('LoginStack', {screen: 'LoginMainPage'});
  };
  const onFloatingActionButtonPressedHandler = () => {
    setIsFloatingButtonModalVisible(true);
  };
  const onFloatingActionButtonCloseHandler = () => {
    setIsFloatingButtonModalVisible(false);
  };
  const onLanguageSelectedHandler = (languageChosen: string) => {
    setLanguageSelected(languageChosen);
    onLanguageChangeHandler(languageChosen);
  };
  return (
    <ViewComp viewType={SafeArea} viewStyle={container}>
      <ImageBackgroundComp
        imageBackgroundSource={OnboardingGrocery}
        imageBackgroundStyle={imageContainer}>
        <ViewComp viewType={SafeArea} viewStyle={imageOverlayViewContainer}>
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
        <FloatingActionButtonComp
          onActionButtonPress={onFloatingActionButtonPressedHandler}
          onActionButtonText={Plus}
        />
        <ModalComp
          modalVisibleFlag={isFloatingButtonModalVisible}
          modalVisibleClose={onFloatingActionButtonCloseHandler}>
          <FloatingActionButtonModal
            floatingButtonCloseHandler={onFloatingActionButtonCloseHandler}
            floatingActionButtonLanguageSelected={onLanguageSelectedHandler}
            floatingActionLanguage={languageSelected}
          />
        </ModalComp>
      </ImageBackgroundComp>
    </ViewComp>
  );
};

export default OnboardingScreen;
