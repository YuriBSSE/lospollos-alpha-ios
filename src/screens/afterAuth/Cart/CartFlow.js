// @ts-nocheck
import {View, Text,StatusBar, Animated} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderScreen from '../User/OrderScreen';
import NavigationOrder from '../User/NavigationOrder'
import colors from '../../../assets/colors/colors';
import CartScreen from './CartScreen';
// import CartScreen from './CartScreen';
import OrderProcess from './OrderProcess';
import TimeManagement from './TimeManagement';
import PersonalInformation from './PersonalInformation';
import CardInformation from './CardInformation';
import OrderConfirmation from './OrderConfirmation';
import ReceiptScreen from '../OrderProcess/ReceiptScreen';
import { TransitionPresets, createNativeStackNavigator, CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



export default function CartFlow() {

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
 

    <Stack.Navigator
      
      screenOptions={{
        
        headerShown: false,
        animation:'fade',
        gestureEnabled:true,
        
        gestureDirection:'horizontal',
        headerMode: 'float',

        ...TransitionPresets.SlideFromRightIOS
        }}
        >
        <Stack.Screen   options={{ cardStyleInterpolator: forSlide }} name="cartScreen">
          {props => {
            return <CartScreen {...props} />;
          }}
        </Stack.Screen>
        <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="cart">
        {props => {
          return <OrderScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="cartorderprocess">
        {props => {
          return <OrderProcess {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="time">
        {props => {
          return <TimeManagement {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="ordernavigation">
          {props => {
            return <NavigationOrder {...props} />;
          }}
        </Stack.Screen>
        <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="personalinfo">
        {props => {
          return <PersonalInformation {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="cardinfo">
        {props => {
          return <CardInformation {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="orderconfirm">
          {props => {
            return <OrderConfirmation {...props} />;
          }}
        </Stack.Screen>
        <Stack.Screen  options={{ cardStyleInterpolator: forSlide }} name="receiptScreen">
          {props => {
            return <ReceiptScreen {...props} />;
          }}
        </Stack.Screen>
    </Stack.Navigator>
  
  );
}
