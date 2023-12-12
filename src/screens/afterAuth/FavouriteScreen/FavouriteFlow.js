// @ts-nocheck
import { View, Text, Animated } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavouriteScreen from './FavouriteScreen';
import DetailOrder from './Child/DetailOrder';
import { TransitionPresets, createNativeStackNavigator, CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function FavouriteFlow() {
  const Example = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: responsiveFontSize(3), textAlign: 'center', color: 'black'}}>
          Favourite Flow
        </Text>
      </View>
    );
  };
  
  
  const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
        : 0
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted
            ),
          },
        ],
      },
    };
  };

  return (
    <Stack.Navigator  screenOptions={{

      headerShown: false,
      animation: 'fade',
      gestureEnabled: true,

      gestureDirection: 'horizontal',
      headerMode: 'float',

      ...TransitionPresets.SlideFromRightIOS
    }}>
         <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="fav">
          {props => {
            return <FavouriteScreen {...props} />;
          }}
        </Stack.Screen>
        <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="favOrderDetail">
          {props => {
            return <DetailOrder {...props} />;
          }}
        </Stack.Screen>

    </Stack.Navigator>
    // <View style={{
    //     flex: 1,alignItems:'center', justifyContent:'center', backgroundColor:'white'
    // }}>
      
    // </View>
  )
}