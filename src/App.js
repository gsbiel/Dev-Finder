/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
          createAppContainer, 
          createStackNavigator, 
          createSwitchNavigator, 
          createBottomTabNavigator,
          createDrawerNavigator
        } from 'react-navigation';

import Login from './screens/Login';
import BuscaDevs from './screens/BuscaDevs';
import DevDetails from './screens/DevDetails';
import AboutApp from './screens/AboutApp';
import UserScreen from './screens/UserScreen';
import Favorites from './screens/Favorites';
import DrawerContent from './screens/DrawerContent';

import {Provider} from 'react-redux';
import store from './store';

import Icon from 'react-native-vector-icons/FontAwesome5';

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

const bottomNavigator = createBottomTabNavigator(
  {
    UserScreen:{
      screen: UserScreenStack,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({tintColor}) => {
          return <Icon name="home" size={25} color={tintColor} />;
        }
      }
    },
    BuscaDevs:{
      screen: BuscaDevsStack,
      navigationOptions:{
        tabBarLabel: 'Search',
        tabBarIcon : ({tintColor}) => {
          return <Icon name="search-location" size={25} color={tintColor} />;
        }
      }
    },
    Favorites:{
      screen: FavoritesStack,
      navigationOptions:{
        tabBarLabel:'Favorites',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="star" size={25} color={tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions:{
      activeTintColor: "#030442"
    }
  }
);

const drawerNavigator =  createDrawerNavigator(
  {
    App:{
      screen: bottomNavigator
    }
  },
  {
    overlayColor: 'rgba(0,0,0,.7)',
    contentComponent: DrawerContent
  }
);

const SwitchNavigator = createSwitchNavigator({
  AboutApp:{
    screen: AboutApp
  },
  Login:{
    screen: Login
  },
  App:{
    screen: drawerNavigator
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
