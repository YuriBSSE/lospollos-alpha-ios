// @ts-nocheck
import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderProcessScreen from './OrderProcessScreen';
import ReceiptScreen from './ReceiptScreen';
const Stack = createNativeStackNavigator();



export default function OrderFlow() {


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="orderprocess">
        {props => {
          return <OrderProcessScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="receipt">
        {props => {
          return <ReceiptScreen {...props} />;
        }}
      </Stack.Screen>
    </Stack.Navigator>
  )
}