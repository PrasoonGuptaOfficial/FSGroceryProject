import React from 'react';
import ThemeProvider from '../Theme/ThemeProvider';
import LanguageProvider from '../Language/LanguageProvider';

const CommonContext = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};

export default CommonContext;
