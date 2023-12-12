// @ts-nocheck
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    ImageBackground,
    Image,
  } from 'react-native';
  import React, {useState,useEffect} from 'react';
  import colors from '../../../../assets/colors/colors';
  import BackBtnHeader from '../../../../components/BackBtnHeader';
  import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import LinearGradient from 'react-native-linear-gradient';
  import HomeIcon from 'react-native-vector-icons/Ionicons';
export default function Item(props, {navigation, item, data}) {
    console.log( props, "_")
    if(props?.amount){
        return (
            <TouchableOpacity
            // onPress={() => navigation.navigate('details')}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              backgroundColor: 'white',
              elevation: 5,
              height: responsiveScreenFontSize(25),
              borderRadius: responsiveScreenFontSize(3),
              width: 170,
              marginHorizontal: responsiveScreenFontSize(0.5),
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: responsiveScreenFontSize(0.5)
            }}>
            <ImageBackground
              resizeMode="stretch"
              style={{width: 170, height: responsiveScreenFontSize(25)}}
              source={require('../../../../assets/Photo.png')}>
              <View
                style={{
                  position: 'absolute',
        
                  width: 170,
                  height: responsiveScreenFontSize(25),
        
                  opacity: 0.35,
                  backgroundColor: 'black',
                  borderRadius: responsiveScreenFontSize(2),
                }}></View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: 170,
                  height: responsiveScreenFontSize(9),
        
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingHorizontal: responsiveScreenFontSize(1),
                  }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: responsiveScreenFontSize(1.8),
                      fontWeight: '800',
                      color: 'white',
                    }}
                    numberOfLines={2}>
                    {props?.title}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: responsiveScreenFontSize(1.5),
                      fontWeight: '500',
                      color: 'white',
                    }}>
                    {props?.des}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    paddingHorizontal: responsiveScreenFontSize(1),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontSize: responsiveScreenFontSize(2),
                        fontWeight: '800',
                        color: '#F7BE00',
                      }}
                      numberOfLines={2}>
                      {props?.amount}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontSize: responsiveScreenFontSize(2),
                        fontWeight: '500',
                        color: '#F7BE00',
                      }}>
                      {' '}
                      €{' '}
                    </Text>
                  </View>
                 
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          )
    }

}