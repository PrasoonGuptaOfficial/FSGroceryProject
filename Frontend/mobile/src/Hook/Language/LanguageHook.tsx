import {useContext} from 'react';
import LanguageContext from '../../Context/Language/LanguageContext';
import OnboardingPageString from '../../Constants/Strings/App/OnboardingPageString';
import FloatingActionModalString from '../../Constants/Strings/App/FloatingActionModalString';
import ReusableCompString from '../../Constants/Strings/ReusableComp/ReusableCompString';

const LanguageHook = (screen: string): any => {
  const Language = useContext(LanguageContext);
  const {defaultLanguage} = Language;
  const {Onboarding, Floating} = ReusableCompString;
  switch (screen) {
    case Onboarding:
      return OnboardingPageString[
        defaultLanguage as keyof typeof OnboardingPageString
      ];
    case Floating:
      return FloatingActionModalString[
        defaultLanguage as keyof typeof FloatingActionModalString
      ];
    default:
      return '';
  }
};

export default LanguageHook;
