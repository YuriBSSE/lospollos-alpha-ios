// @ts-nocheck
import {StyleSheet, Text, View, Animated} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WalkthroughScreens from '../screens/auth/WalkthroughScreens';
import LoginScreens from './../screens/auth/login/index';
import SignUp from '../screens/auth/signup/SignUp';
import ForgetScreen from '../screens/auth/forget/ForgetPassword';
import ResetPassword from '../screens/auth/resetPassword/ResetPassword';
import LoadingScreen from '../components/LoadingScreen';
import SmsVerificationScreen from '../screens/auth/VerficationScreens/SmsVerificationScreen';
import EmailVerificationScreen from '../screens/auth/VerficationScreens/EmailVerificationScreen';
import OurRestuarant from '../screens/auth/OurRestuarant';
const Stack = createNativeStackNavigator();
export default function AuthScreens(navigation) {
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
    <>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="walkthroughScreen">
        {props => {
          return <WalkthroughScreens {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="login">
        {props => {
          return <LoginScreens {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="signup">
        {props => {
          return <SignUp {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="forget">
        {props => {
          return <ForgetScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="resetpassword">
        {props => {
          return <ResetPassword {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="loading">
        {props => {
          return <LoadingScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="smsverification">
        {props => {
          return <SmsVerificationScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="emailverification">
        {props => {
          return <EmailVerificationScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="ourrest">
        {props => {
          return <OurRestuarant {...props} />;
        }}
      </Stack.Screen>
    </>
  );
}

const styles = StyleSheet.create({});
