// @ts-nocheck
import {
  StyleSheet,
  PermissionsAndroid,
  Platform,
  View,
  Text,
  Animated
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import BioIcon from 'react-native-vector-icons/FontAwesome';
import MenuIcon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeFlow from './../screens/afterAuth/HomeScreen/HomeFlow';
import CartFlow from './../screens/afterAuth/Cart/CartFlow';
import FavouriteFlow from '../screens/afterAuth/FavouriteScreen/FavouriteFlow';
import OrderFlow from '../screens/afterAuth/OrderProcess/OrderFlow';
// import UserFlow from '../screens/afterAuth/User/UserFlow';
import Main from '../screens/afterAuth/User/Main'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TransitionPresets } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import AuthScreens from './AuthScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomTabComp from '../components/CustomTabComp';
import colors from '../assets/colors/colors';
import Geolocation from 'react-native-geolocation-service';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Actions from '../store/actions/locationAct'
import Details from '../screens/afterAuth/HomeScreen/Details';
import { TransitionPresets, createNativeStackNavigator, CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
// import { TransitionPresets } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs({ navigation, authRed, locationAction }) {
  const [reset, setReset] = useState(false);
  const [reset2, setReset2] = useState(false);
  const [reset3, setReset3] = useState(false);
  const [reset4, setReset4] = useState(false);
  const [reset5, setReset5] = useState(false);
  const [versionModal, setVersionModal] = useState(false);

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
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     PushNotification.localNotification({
  //       channelId: "channel-id",
  //       channelName: "My channel",
  //       message: remoteMessage.notification.body,
  //       playSound: true,
  //       title: remoteMessage.notification.title,
  //       priority: 'high',
  //       soundName: 'default',

  //     })
  //   });
  //   return unsubscribe;
  // }, [])

  useEffect(() => {

    getLocation()

  }, [])

  // useEffect(() => {
  //   getVersion()
  // }, [])

  // async function getVersion() {
  //   Konnect.post(`/v1/mobile/category/getAllCriteria`).then(res => {
  //     if (res.data?.data[0].version != DeviceInfo.getVersion()) {
  //       setVersionModal(true)
  //     }
  //   }).catch(err => {
  //     console.log("err", err.response.data)
  //   })
  // }

  async function getLocation() {

    if (Platform.OS == "ios") {
      const req = await Geolocation.requestAuthorization("whenInUse");
      if (req == "granted") {
        getPoints()
      }
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message:
            "Lospollos would like to access your location",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted == "granted") {
        getPoints()
      }
    }
  }

  function getPoints() {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position?.coords?.latitude, "latitude");
        console.log(position?.coords?.longitude, "longitude");
        locationAction(position?.coords?.latitude,position?.coords?.longitude)
        // saveLocation(position)
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     messaging()
  //       .subscribeToTopic('konnectBio')
  //       .then(() => console.log('Subscribed to topic!'));
  //     const token = await messaging().getToken()
  //     console.log(token)
  //   }
  // }

  function myTabs() {
    return (
      <Tab.Navigator


        screenOptions={{
          // @ts-ignore

          headerShown: false,
          tabBarActiveTintColor: colors.themeBlue,
          tabBarLabelStyle: {

          },


          unmountOnBlur: true,
        }}
        initialRouteName="home"
        tabBar={props => (
          <CustomTabComp
            reset={reset}
            setReset={setReset}
            {...props}
            reset2={reset2}
            setReset2={setReset2}
            reset3={reset3}
            setReset3={setReset3}
            reset4={reset4}
            setReset4={setReset4}
            reset5={reset5}
            setReset5={setReset5}
          />
        )}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon name="home" size={22} color={color} />
            ),
          }}>
          {props => <HomeFlow {...props} reset5={reset5} />}
        </Tab.Screen>
        <Tab.Screen
          name="Favourite"
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon name="heart-outline" size={22} color={color} />
            ),
            tabBarBadge: 6,
            tabBarBadgeStyle: {
              backgroundColor:colors.themeblue,
              color:'white'
            }
          }}>
          {props => <FavouriteFlow {...props} reset={reset} />}
        </Tab.Screen>
        <Tab.Screen
          name="Cart"
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon name="cart-outline" size={22} color={color} />
            ),
          }}>
          {props => <CartFlow {...props} reset2={reset2} setReset2={setReset2} />}
        </Tab.Screen>

        <Tab.Screen
          name="Time"
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon name="timer-outline" size={22} color={color} />
            ),
          }}>
          {props => <OrderFlow reset3={reset3} {...props} />}
        </Tab.Screen>

        <Tab.Screen
          name="User"
          component={Main}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="user" size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>)
  }

  if (
    // true
    authRed?.login
  ) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator   screenOptions={{
        headerShown: false,
        animation:'fade',
        gestureEnabled:true,
        gestureDirection:'horizontal',
        headerMode: 'float',
        ...TransitionPresets.SlideFromRightIOS
        }}>
          <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} name="mytabs" component={() => myTabs()} />
          <Stack.Screen options={{ cardStyleInterpolator: forSlide, headerShown: false }} screenOptions={{}} name="Details" component={Details} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  } else {
    return (
      <Stack.Navigator  screenOptions={{
        headerShown: false,
        animation:'fade',
        gestureEnabled:true,
        gestureDirection:'horizontal',
        headerMode: 'float',
        ...TransitionPresets.SlideFromRightIOS
        }}>
        {AuthScreens()}
      </Stack.Navigator>
    );
  }
}

function mapStateToProps({ authRed }) {
  return { authRed };
}

export default connect(mapStateToProps, Actions)(Tabs);

const styles = StyleSheet.create({});
