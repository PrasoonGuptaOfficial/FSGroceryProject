/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainApp from './src/MainApp';
import {Provider} from 'react-redux';
import {Store, persistorStore} from './src/Redux/Common/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistorStore}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
