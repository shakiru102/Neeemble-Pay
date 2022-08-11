import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackScreen } from '../../types'
import WelcomeScreen from '../../screens/Auth/Welcome'

const AuthStack = createNativeStackNavigator<AuthStackScreen>()

const Welcome = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Welcome' component={WelcomeScreen}/>
    </AuthStack.Navigator>
  )
}

export default Welcome