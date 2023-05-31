/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

describe('App rendering Demo', () => {
  it('Initial App Render', () => {
    render(<App />);
  });
});
