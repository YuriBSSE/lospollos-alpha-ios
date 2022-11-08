// @ts-nocheck
import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function UserFlow() {

  const Example = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <Text style={{fontSize: responsiveFontSize(3), textAlign: 'center', color: 'black'}}>
          User Flow
        </Text>
      </View>
    );
  };

  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="user">
          {props => {
            return <Example {...props} />;
          }}
        </Stack.Screen>
    </Stack.Navigator>

  )
}