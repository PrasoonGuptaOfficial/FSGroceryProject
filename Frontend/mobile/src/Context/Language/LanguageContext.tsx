import {createContext} from 'react';

const LanguageContext = createContext({
  defaultLanguage: 'English',
  onLanguageChangeHandler: (selectedLanguage: string) => {
    return selectedLanguage;
  },
});

export default LanguageContext;
