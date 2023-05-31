import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import ThemeContext from '../../Context/Theme/ThemeContext';

function DemoPage(): JSX.Element {
  const Theme = useContext(ThemeContext);
  const {onThemeChangeHandler, isDarkTheme} = Theme;
  return (
    <View>
      {isDarkTheme && <Text>APP DARK</Text>}
      {!isDarkTheme && <Text>APP LIGHT</Text>}
      <Button
        title="Click"
        onPress={() => {
          onThemeChangeHandler();
        }}
      />
    </View>
  );
}

export default DemoPage;
