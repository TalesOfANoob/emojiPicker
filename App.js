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
import {Provider as EmojiProvider} from './src/context/EmojiContext'

const App = () =>
{
  return (
    <View style={{flex:1}}>
      <EmojiProvider>
        <MainNavigator/>
      </EmojiProvider>
    </View>
  );
}
export default App;
