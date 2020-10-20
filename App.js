/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'
import {View } from 'react-native';

const App = () =>
{
  return (
    <View style={{flex:1}}>
      <MainNavigator/>
    </View>
  );
}
export default App;
