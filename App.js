/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <View>
        <Button 
          title='BUTTT Cheeks'
          onPress={() => { alert("I love them buttcheeks")}}
        />
      </View>
    </Fragment>
  );
};


export default App;
