/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import roots from './roots'
import HomeScreen from '../screens/HomeScreen'

const defaultNavigationOptions = () => ({
    gestureEnabled: false,
    headerShown: false,
  });
const Stack= createStackNavigator();

const MainStackNavigator = ()=>(

    <NavigationContainer>
        <Stack.Navigator
            screenOptions={defaultNavigationOptions}
            initialRouteName={roots.Home}
        >
            <Stack.Screen
                screenOptions={defaultNavigationOptions}
                name={roots.Home}
                component={HomeScreen}

            />
            
        </Stack.Navigator>
    </NavigationContainer>
    
)

export default MainStackNavigator