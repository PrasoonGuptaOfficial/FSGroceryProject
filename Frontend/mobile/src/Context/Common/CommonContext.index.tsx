import React from 'react';
import ThemeProvider from '../Theme/ThemeProvider';

const CommonContext = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default CommonContext;
