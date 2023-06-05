import {useContext} from 'react';
import LanguageContext from '../../Context/Language/LanguageContext';
import OnboardingPageString from '../../Constants/Strings/App/OnboardingPageString';
import FloatingActionModalString from '../../Constants/Strings/App/FloatingActionModalString';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';
import LoginMainPageString from '../../Constants/Strings/App/LoginMainPageString';
import AlertCompString from '../../Constants/Strings/App/AlertCompString';

const LanguageHook = (screen: string): any => {
  const Language = useContext(LanguageContext);
  const {defaultLanguage} = Language;
  const {Onboarding, Floating, LoginMainPageSc, Alert} = ReusableCompString;
  switch (screen) {
    case Onboarding:
      return OnboardingPageString[
        defaultLanguage as keyof typeof OnboardingPageString
      ];
    case Floating:
      return FloatingActionModalString[
        defaultLanguage as keyof typeof FloatingActionModalString
      ];
    case LoginMainPageSc:
      return LoginMainPageString[
        defaultLanguage as keyof typeof LoginMainPageString
      ];
    case Alert:
      return AlertCompString[defaultLanguage as keyof typeof AlertCompString];
    default:
      return '';
  }
};

export default LanguageHook;
