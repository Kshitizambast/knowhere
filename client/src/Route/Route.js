import React from 'react'
import { View,  Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../screens/Landing'
import GetPhoneNumber from '../screens/GetPhoneNumber'
import OtpScreen from '../screens/OtpScreen'

const Stack = createStackNavigator()

const Route = () => {
    return (
      <NavigationContainer>
           <Stack.Navigator 
              screenOptions={{
                headerShown: false
              }}
              initialRouteName="Landing"
             >
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="GetPhoneNumber" component={GetPhoneNumber} />
              <Stack.Screen name="OtpScreen" component={OtpScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Route