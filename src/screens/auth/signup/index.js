import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as authAct from '../../../store/actions/authAct';
import BasicDetail from './BasicDetail';
import CountryDetail from './CountryDetail';
import PasswordDetail from './PasswordDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Platform,KeyboardAvoidingView } from 'react-native';

const Stack = createNativeStackNavigator();

const Signup = ({signUp,navigation}) => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    gender: '',
    selectedCountry: 'US',
    selectedState: '',
    selectedCity: '',
    password: '',
    confirmPassword: '',
    device:Platform.OS
    // zipCode: '',
    // referredBy: '',
  });
  const getValue = (k, v) => {
    setUserData({...userData, [k]: v});
  };

  // const onSignUp = (apiCall,setIsModal,setResponseMsg) => {
  //   apiCall(true);
  //   signUp(userData, (res_msg) => {
  //     apiCall(false);
  //     setResponseMsg(res_msg);
  //   }).then(()=>setIsModal(true));
  // };
  const onSignUp = (apiCall) => {
    apiCall(true);
    signUp(userData, () => apiCall(false));
  };

  // useEffect(()=>{
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     setUserData({email:"",password:"",userName:"",confirmPassword:""})
  //     setIsSubmit(false)
  //     dispatch({type:"clearAuth"})
  //   });

  //   return unsubscribe;
  // },[navigation])

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="auth_basic_detail">
          {props => (
            <BasicDetail {...props} userData={userData} getValue={getValue} />
          )}
        </Stack.Screen>
        <Stack.Screen name="auth_country_detail">
          {props => (
            <CountryDetail
              {...props}
              userData={userData}
              getValue={getValue}
              setUserData={setUserData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="auth_password_detail">
          {props => (
            <PasswordDetail
              {...props}
              userData={userData}
              getValue={getValue}
              onSignUp={onSignUp}
              setUserData={setUserData}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default connect(null, authAct)(Signup);
