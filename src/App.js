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
import { createStackNavigator, createAppContainer } from "react-navigation";
/*
class App extends React.Component {
  
  render() {
    return (
      <AddItem/>
    );
  }
};
*/

const AppNavigator = createStackNavigator(
  {
  Home:AddItem,
  StatsRT:Stats
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(AppNavigator);
