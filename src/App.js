/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Main from './screens/Main';
import BuscaDevs from './screens/BuscaDevs';

const MainStack = createStackNavigator(
  {
    Main: Main,
    BuscaDevs: BuscaDevs,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);
const App = createAppContainer(MainStack);
export default App;
