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
import Login from './screens/Login/index';
import BuscaDevs from './screens/BuscaDevs/index';
import DevDetails from './screens/devDetails/index';
import AboutApp from './screens/AboutApp';

const MainStack = createStackNavigator(
  {
    Main: Main,
    BuscaDevs: BuscaDevs,
    DevDetails: DevDetails,
    Login: Login,
    AboutApp: AboutApp
  },
  {
    initialRouteName: 'AboutApp',
    headerMode: 'none',
  },
);
const App = createAppContainer(MainStack);
export default App;
