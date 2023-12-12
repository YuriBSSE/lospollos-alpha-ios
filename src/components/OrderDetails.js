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
  import React, {useState} from 'react';
  import colors from './../assets/colors/colors';
  import BackBtnHeader from './BackBtnHeader';
  import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import LinearGradient from 'react-native-linear-gradient';
  import HomeIcon from 'react-native-vector-icons/Ionicons';
export default function OrderDetails({navigation}) {
  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate('details')}
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
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        resizeMode="stretch"
        style={{width: 170, height: responsiveScreenFontSize(25)}}
        source={require('../../../assets/menu.png')}>
        <View
          style={{
            position: 'absolute',

            width: 170,
            height: responsiveScreenFontSize(25),

            opacity: 0.35,
            backgroundColor: 'black',
            borderRadius: responsiveScreenFontSize(3),
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
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: responsiveScreenFontSize(1.5),
                fontWeight: '500',
                color: 'white',
              }}>
              {item.des}
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
                100
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
            <View>
              <TouchableOpacity
                onPress={() => {
                  onChangeLike(!like);
                }}>
                {like ? (
                  <HomeIcon
                    name="heart-outline"
                    size={22}
                    color={'#F7BE00'}
                  />
                ) : (
                  <HomeIcon
                    name="heart"
                    size={22}
                    color={'#F7BE00'}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}