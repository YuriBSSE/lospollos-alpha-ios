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
const Stack = createNativeStackNavigator();
export default function AuthScreens(navigation) {
  return (
    <>
      <Stack.Screen name="walkthroughScreen">
        {props => {
          return <WalkthroughScreens {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="login">
        {props => {
          return <LoginScreens {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="signup">
        {props => {
          return <SignUp {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="forget">
        {props => {
          return <ForgetScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="resetpassword">
        {props => {
          return <ResetPassword {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="loading">
        {props => {
          return <LoadingScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="smsverification">
        {props => {
          return <SmsVerificationScreen {...props} />;
        }}
      </Stack.Screen>
      <Stack.Screen name="emailverification">
        {props => {
          return <EmailVerificationScreen {...props} />;
        }}
      </Stack.Screen>
    </>
  );
}

const styles = StyleSheet.create({});
