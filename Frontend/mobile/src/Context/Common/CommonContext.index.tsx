import React from 'react';
import ThemeProvider from '../Theme/ThemeProvider';
import LanguageProvider from '../Language/LanguageProvider';
import CountryProvider from '../Country/CountryProvider';

const CommonContext = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CountryProvider>{children}</CountryProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default CommonContext;
