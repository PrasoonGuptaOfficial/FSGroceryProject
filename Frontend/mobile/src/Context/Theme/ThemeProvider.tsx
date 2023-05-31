import React, {useState} from 'react';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const onThemeChangeHandler = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{isDarkTheme, onThemeChangeHandler}}>
      {children}
    </ThemeContext.Provider>
  );
};
