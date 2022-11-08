// @ts-nocheck
import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
const Stack = createNativeStackNavigator();

export default function HomeFlow() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="home">
          {props => {
            return <Home {...props} />;
          }}
        </Stack.Screen>
        <Stack.Screen name="details">
          {props => {
            return <Details {...props} />;
          }}
        </Stack.Screen>
    </Stack.Navigator>
    // <View style={{
    //     flex: 1,alignItems:'center', justifyContent:'center', backgroundColor:'white'
    // }}>
      
    // </View>
  )
}