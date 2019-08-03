/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AddItem from './views/AddItem';
import Stats from './views/Stats';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
/*
class App extends React.Component {
  
  render() {
    return (
      <AddItem/>
    );
  }
};
*/

const AppNavigator = createDrawerNavigator(
  {
  Home:AddItem,
  StatsRT:Stats
  },
  {
    //hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
)

export default createAppContainer(AppNavigator);
