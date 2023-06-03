import {useContext} from 'react';
import ThemeContext from '../../Context/Theme/ThemeContext';
import {ReusableCompColors} from '../../Constants/Colors/ReusableComp/ReusableCompColor';

const ThemeColorHook = () => {
  const Theme = useContext(ThemeContext);
  const {isDarkTheme} = Theme;
  if (isDarkTheme) {
    return ReusableCompColors.darkTheme;
  } else {
    return ReusableCompColors.lightTheme;
  }
};

export default ThemeColorHook;
