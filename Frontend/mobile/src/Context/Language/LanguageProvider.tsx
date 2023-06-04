import React, {useMemo, useState} from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [defaultLanguage, setDefaultLanguage] = useState('English');
  const onLanguageChangeHandler = (selectedLanguage: string): string => {
    setDefaultLanguage(selectedLanguage);
    return selectedLanguage;
  };
  const languageProviderValue = useMemo(
    () => ({
      defaultLanguage,
      onLanguageChangeHandler,
    }),
    [defaultLanguage],
  );
  return (
    <LanguageContext.Provider value={languageProviderValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
