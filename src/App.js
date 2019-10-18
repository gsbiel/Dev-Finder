/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Main from './screens/Main';
import Login from './screens/Login';
import BuscaDevs from './screens/BuscaDevs';
import DevDetails from './screens/DevDetails';
import AboutApp from './screens/AboutApp';
import UserScreen from './screens/UserScreen';

import {Provider} from 'react-redux';
import store from './store';

const MainStack = createStackNavigator(
  {
    Main: Main,
    BuscaDevs: BuscaDevs,
    DevDetails: DevDetails,
    Login: Login,
    AboutApp: AboutApp,
    UserScreen: UserScreen,
  },
  {
    initialRouteName: 'AboutApp',
    headerMode: 'none',
  },
);

const Navigation = createAppContainer(MainStack);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
