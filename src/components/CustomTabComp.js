// @ts-nocheck
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import colors from '../assets/colors/colors';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import MarketIcon from "react-native-vector-icons/Fontisto"
import deviceInfo from "react-native-device-info"
import LiveIcon from "react-native-vector-icons/MaterialIcons"
import ShopIcon from 'react-native-vector-icons/Entypo';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const tablet = deviceInfo.isTablet()

export default function MyTabBar({
  state,
  descriptors,
  navigation,
  reset,
  setReset,
  reset2,
  setReset2,
  reset3,
  setReset3,
  reset4,
  setReset4,
  reset5,
  setReset5
}) {

  function renderIcon(route, isFocues) {
    switch (route) {
      case 'Home':
        return (
          isFocues ?
            <HomeIcon
              name="home"
              size={responsiveFontSize(tablet ? 1.25 : 2.75)}
              color={isFocues ? colors.themeblue : 'black'}
            /> :
            <HomeIcon
              name="home-outline"
              size={responsiveFontSize(tablet ? 1.25 : 2.75)}
              color={isFocues ? colors.themeblue : 'black'}
            />
        );
      case 'Favourite':
        return (
          isFocues ?
            <Image source={require('../assets/vectorHeart.png')} /> :
            <HomeIcon
              name="heart-outline"
              size={responsiveFontSize(tablet ? 1.25 : 2.75)}
              color={isFocues ? colors.themeblue : 'black'}
            />
        );
      case 'Cart':
        return (
          <View style={{ width: '60%', height: responsiveScreenFontSize(7), flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ backgroundColor: colors.themeblue, width: responsiveScreenFontSize(2.5), height: responsiveScreenFontSize(2.5), borderRadius: responsiveScreenFontSize(100), position: 'absolute', top: responsiveScreenFontSize(0.7), right: responsiveScreenFontSize(0.7), justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: responsiveScreenFontSize(1.5), textAlign: 'center' }}>6</Text>
            </View>
            {
              isFocues ?
                <HomeIcon
                  name="cart"
                  size={responsiveFontSize(tablet ? 1.25 : 2.75)}
                  color={isFocues ? colors.themeblue : 'black'}
                /> :
                <HomeIcon
                  name="cart-outline"
                  size={responsiveFontSize(tablet ? 1.25 : 2.75)}
                  color={isFocues ? colors.themeblue : 'black'}
                />}
          </View>
        );
      case 'Time':
        return (
          <View style={{
            width: '100%', justifyContent: 'center', alignItems: 'center',
          }}>
            <View style={{ width: '70%', height: responsiveFontSize(1), borderRadius: responsiveFontSize(2), backgroundColor: '#BDBDBD' }} >
              <View style={{ width: '30%', backgroundColor: '#ffd678', borderRadius: responsiveFontSize(2), height: responsiveFontSize(1) }} />
            </View>
            <HomeIcon
              name="timer-outline"
              size={responsiveFontSize(tablet ? 1.25 : 2.75)}
              color={isFocues ? colors.themeblue : 'black'}
            />
          </View>
        );
      case 'User':
        return (
          <SimpleLineIcons
            name="user"
            size={responsiveFontSize(tablet ? 1.25 : 2.75)}
            color={isFocues ? colors.themeblue : 'black'}
          />
        );
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{}}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        borderTopColor: colors.silver,
        borderTopWidth: 0.75,
        width: '90%',
        alignSelf: 'center',

        position: 'absolute',
        bottom: responsiveFontSize(2),

        borderBottomLeftRadius: 14,
        borderTopRightRadius: 14,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#F8F8F8',

        height: responsiveFontSize(7), borderRadius: responsiveFontSize(2)
        // paddingTop:10,paddingBottom:10,
        // height:responsiveHeight(7)
      }}>
        {state.routes.map((route, index) => {
          // if(route.name=="BioShop" || route.name=="MarketPlace"){
          //   return null
          // }else{

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });


            if (!event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // alert("done")

              if (route.name == "Home") {

                if (isFocused) {
                  navigation.navigate(route.name, { screen: "home" })
                  setReset(!reset)
                } else {
                  navigation.navigate({ name: route.name, merge: true, params: { screen: "home" } });
                  setReset(!reset)
                }

              }
              else if (route.name == "Favourite") {

                if (isFocused) {
                  navigation.navigate(route.name)
                  setReset2(!reset2)
                } else {
                  navigation.navigate({ name: route.name, merge: true });
                  setReset2(!reset2)
                }

              }
              else if (route.name == "Cart") {

                if (isFocused) {
                  navigation.navigate(route.name)
                  setReset3(!reset3)
                } else {
                  navigation.navigate({ name: route.name, merge: true });
                  setReset3(!reset3)
                }

              }
              else if (route.name == "History") {

                if (isFocused) {
                  navigation.navigate(route.name)
                  setReset3(!reset3)
                } else {
                  navigation.navigate({ name: route.name, merge: true });
                  setReset3(!reset3)
                }

              }
              else if (route.name == "User") {

                if (isFocused) {
                  navigation.navigate(route.name)
                  setReset4(!reset4)
                } else {
                  navigation.navigate({ name: route.name, merge: true });
                  setReset4(!reset4)
                }

              }
              else {
                navigation.navigate({ name: route.name, merge: true });
              }
            }

          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: responsiveFontSize(0.5),
                // backgroundColor:isFocused ? "red" : "white"
              }}
            >
              {renderIcon(label, isFocused)}
              {
                isFocused ?
                  <View style={{ width: '100%', height: responsiveFontSize(2), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: -2 }}>
                    <Image source={require('../assets/selection.png')} resizeMode='contain' style={{ width: '40%', height: responsiveFontSize(3) }} />
                  </View> : null
              }
              {/* <Text style={{ color: isFocused ? '#000000' : colors.gray, fontSize: responsiveFontSize(tablet?0.65:1.3) }}>
              {label}
            </Text> */}
            </TouchableOpacity>
          );

          // }
        })}
      </View>
    </SafeAreaView>

  );
}