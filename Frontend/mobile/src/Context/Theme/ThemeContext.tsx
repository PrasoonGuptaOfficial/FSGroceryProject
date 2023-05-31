import {createContext} from 'react';

const ThemeContext = createContext({
  isDarkTheme: false,
  onThemeChangeHandler: () => {},
});

export default ThemeContext;
