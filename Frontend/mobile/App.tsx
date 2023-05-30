/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainApp from './src/MainApp';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Common/store';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <MainApp />
    </Provider>
  );
}

export default App;
