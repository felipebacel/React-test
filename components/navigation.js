import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieScreen from '../app/MovieScreen';
import PersonScreen from '../app/PersonScreen';

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "MovieScreen" options={{headerShown:false}} component={MovieScreen}/>
      <Stack.Screen name='PersonScreen' options={{headerShown:false}} component={PersonScreen}/>
    </Stack.Navigator>
  )
}