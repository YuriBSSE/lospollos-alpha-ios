// @ts-nocheck
import {View, Text} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function CartFlow() {
  const Example = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <Text style={{fontSize: responsiveFontSize(3), textAlign: 'center', color: 'black'}}>
          Cart Flow
        </Text>
      </View>
    );
  };
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="cart">
        {props => {
          return <Example {...props} />;
        }}
      </Stack.Screen>
    </Stack.Navigator>
    // <View style={{
    //     flex: 1,alignItems:'center', justifyContent:'center', backgroundColor:'white'
    // }}>

    // </View>
  );
}
