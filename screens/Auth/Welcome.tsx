import { View, Text } from 'react-native'
import React, { FC } from 'react'
import tw from '../../tailwind'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackScreen } from '../../types'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = NativeStackScreenProps<AuthStackScreen, 'Welcome'>

const Welcome: FC<Props> = () => {

    const { test } = useSelector((state: RootState) => state.test)

  return (
    <View style={tw`flex flex-1 justify-center items-center`}>
    <Text style={tw`text-3xl text-primary font-semibold`}>Shakur { test } </Text>
    <Text style={tw`text-lg text-body font-semibold`}>
      Let get it done bro{" "}
    </Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default Welcome