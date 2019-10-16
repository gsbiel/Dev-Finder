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
import Login from './screens/Login';
import BuscaDevs from './screens/BuscaDevs';
import DevDetails from './screens/devDetails';
import AboutApp from './screens/AboutApp';
import UserScreen from './screens/UserScreen'

const MainStack = createStackNavigator(
  {
    Main: Main,
    BuscaDevs: BuscaDevs,
    DevDetails: DevDetails,
    Login: Login,
    AboutApp: AboutApp,
    UserScreen: UserScreen
  },
  {
    initialRouteName: 'AboutApp',
    headerMode: 'none',
  },
);
const App = createAppContainer(MainStack);
export default App;
