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
import {View} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './src/redux/EmojiRedux'

const App = () =>
{
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </View>
  );
}
export default App;
