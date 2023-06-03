import React, {useMemo, useState} from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const onThemeChangeHandler = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
  const themeProviderValue = useMemo(
    () => ({isDarkTheme, onThemeChangeHandler}),
    [isDarkTheme],
  );
  return (
    <ThemeContext.Provider value={themeProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
