/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';

import Login from './screens/Login';
import BuscaDevs from './screens/BuscaDevs';
import DevDetails from './screens/DevDetails';
import AboutApp from './screens/AboutApp';
import UserScreen from './screens/UserScreen';
import Favorites from './screens/Favorites';

import {Provider} from 'react-redux';
import store from './store';



const MainStack = createStackNavigator(
  {
    BuscaDevs: BuscaDevs,
    DevDetails: DevDetails,
    Login: Login,
    AboutApp: AboutApp,
    UserScreen: UserScreen,
    Favorites: Favorites
  },
  {
    initialRouteName: 'AboutApp',
    headerMode: 'none',
  },
);

const UserScreenStack = createStackNavigator(
  {
    UserScreen: UserScreen,
    DevDetails: DevDetails
  },
  {
    initialRouteName:'UserScreen',
    headerMode:'none'
  }
);

const BuscaDevsStack = createStackNavigator(
  {
    BuscaDevs:BuscaDevs,
    DevDetails:DevDetails
  },
  {
    initialRouteName:'BuscaDevs',
    headerMode:'none'
  }
);

const FavoritesStack = createStackNavigator(
  {
    Favorites: Favorites,
    DevDetails:DevDetails
  },
  {
    initialRouteName:'Favorites',
    headerMode:'none'
  }
);

const bottomNavigator = createBottomTabNavigator({
  UserScreen:{
    screen: UserScreenStack,
    navigationOptions:{
      tabBarLabel:'Home'
    }
  },
  BuscaDevs:{
    screen: BuscaDevsStack,
    navigationOptions:{
      tabBarLabel: 'Search'
    }
  },
  Favorites:{
    screen: FavoritesStack,
    navigationOptions:{
      tabBarLabel:'Favorites'
    }
  }
});

const SwitchNavigator = createSwitchNavigator({
  AboutApp:{
    screen: AboutApp
  },
  Login:{
    screen: Login
  },
  App:{
    screen: bottomNavigator
  }
});

const Navigation = createAppContainer(SwitchNavigator);

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
