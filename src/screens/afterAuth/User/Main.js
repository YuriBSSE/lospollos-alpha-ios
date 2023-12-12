// @ts-nocheck
import { View, Text, Animated, StatusBar } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserFlow from './UserFlow';
import TermsAndCondition from './TermsAndCondition';
import LegalNotice from './LegalNotice';
import ProfileInfo from './ProfileInfo';
import HouseInfo from './HouseInfo';
import OrderScreen from './OrderScreen';
import NavigationOrder from './NavigationOrder';
import PaymentMethod from './PaymentMethod';
import OurResturant from './OurResturant';
import colors from '../../../assets/colors/colors';
import { TransitionPresets, createNativeStackNavigator, CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function Main() {

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
    <Stack.Navigator screenOptions={{

      headerShown: false,
      animation: 'fade',
      gestureEnabled: true,
headerStatusBarHeight: 30,
      gestureDirection: 'horizontal',
      headerMode: 'float',

      ...TransitionPresets.SlideFromRightIOS
    }}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={colors.themeBlue} /> */}
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="userflow">
        {props => {
          return <UserFlow {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="term">
        {props => {
          return <TermsAndCondition {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="legalNotice">
        {props => {
          return <LegalNotice {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="profileInfo">
        {props => {
          return <ProfileInfo {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="houseInfo">
        {props => {
          return <HouseInfo {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="orderscreen">
        {props => {
          return <OrderScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="ordernavigation">
        {props => {
          return <NavigationOrder {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="paymentmethod">
        {props => {
          return <PaymentMethod {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide }} name="ourresturant">
        {props => {
          return <OurResturant {...props} />;
        }}
      </Stack.Screen>


    </Stack.Navigator>
    // <View style={{
    //     flex: 1,alignItems:'center', justifyContent:'center', backgroundColor:'white'
    // }}>

    // </View>
  )
}