import React from 'react'

import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './views/main/Main'
import Login from './views/login/Login'
import Order from './views/order/Order'

const Stack = createStackNavigator()

const App = () => {

  return (
    <>
      <StatusBar hidden={true} />

      <NavigationContainer>
        <Stack.Navigator headerMode='none' initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='Order' component={Order} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
