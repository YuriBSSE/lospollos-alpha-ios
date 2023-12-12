// @ts-nocheck

import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Heading from '../../../components/Heading';
import Btn from '../../../components/Btn';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../assets/colors/colors';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenFontSize
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import deviceInfo from 'react-native-device-info';
// import CheckBox from '@react-native-community/checkbox';
import BackBtnHeader from '../../../components/BackBtnHeader';
import FavOrder from './Child/FavOrder';
import MyText from '../../../components/MyText';

let { width, height } = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
  checkStyle.transform = [{ scaleX: 0.7 }, { scaleY: 0.7 }];
}
const tablet = deviceInfo.isTablet();
const FavouriteScreen = ({ navigation }) => {
const [screen, onChangeScreen] = useState(true)
const data = [
    {id: 1, image: require('../../../assets/favorder1.png')},
    {id: 2, image: require('../../../assets/favorder2.png')},
    {id: 3, image: require('../../../assets/favorder3.png')},
    {id: 4, image: require('../../../assets/favorder4.png')},
    {id: 5, image: require('../../../assets/favorder1.png')},
    {id: 6, image: require('../../../assets/favorder2.png')},
    {id: 7, image: require('../../../assets/favorder3.png')},
]

  if (
    false
    // screen
    ) {
    return (
      <View style={StyleSheet.absoluteFill}>


        <StatusBar
          backgroundColor={colors.themeblue}
          barStyle='dark-content'
        />

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: colors.themeblue
          }}>
          <View
            style={{
              top: responsiveFontSize(4),
              height: 50,
              position: 'absolute',
              width: '100%',
            }}>
            <BackBtnHeader
              left={true}
              cross={false}
              text={'Return'}
              odd={true}
              call={() => navigation.goBack()}
            />
          </View>
          <View style={{ height: responsiveHeight(12) }} />

          {/* <View
              style={{
                width: '20%',
                height: 5,
                borderRadius: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                bottom: 10,
              }}
            /> */}
          <View
            style={{
              height: responsiveHeight(80),
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>
            <View style={styles.container}>
              <View>
                <View style={styles.ctn1}>
                  <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    <Image
                      resizeMode="contain"
                      style={{ height: 300, width: 300 }}
                      source={require('../../../assets/heart.png')}
                    />

                    <View style={{ width: '70%', alignSelf: 'center', justifyContent: 'space-around', height: responsiveFontSize(25), alignItems:'center' }}>
                      <MyText
                        size={responsiveFontSize(3)}
                        fw={'normal'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'center'}
                        Label={'Vous n’avez pas d’article favori'}
                      />
                      <MyText
                        size={responsiveFontSize(1.9)}
                        fw={'bold'}
                        color={'#b8b8b8'}
                        decoration={'none'}
                        textAlign={'center'}
                        Label={'Appuyez sur le d’un article pour le retrouver ici !'}
                      />
                      <Btn
                        text="J’y vais !"
                        color={colors.themeblue}
                        pSText={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: responsiveFontSize(1.8)
                        }}
                        pS={{ width: '80%' }}
                        textColor={colors.themeblue}
                        call={()=> onChangeScreen(false)}
                        loader={null}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }


  return (
    <View style={StyleSheet.absoluteFill}>


      <StatusBar
        backgroundColor={colors.themeblue}
        barStyle='dark-content'
      />

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: colors.themeblue,
        }}>
        <View
          style={{
            top: responsiveFontSize(4),
            height: 50,
            position: 'absolute',
            width: '100%',
          }}>
          <BackBtnHeader
            left={true}
            cross={true}
            text={'Vos favoris'}
            odd={true}
            call={() => navigation.goBack()}
          />
        </View>
        <View style={{ height: responsiveHeight(12) }} />

        {/* <View
            style={{
              width: '20%',
              height: 5,
              borderRadius: 10,
              backgroundColor: 'white',
              alignSelf: 'center',
              bottom: 10,
            }}
          /> */}
        <View
          style={{
            height: responsiveHeight(80),
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <View style={styles.container}>
            <View>
              <View style={styles.ctn1}>
           
              
                <View style={{
                    width:'95%',
                    alignSelf:'center',
                }}>
                       <MyText
                        size={responsiveFontSize(2.5)}
                        fw={'bold'}
                        style={{
                            marginLeft: 5
                        }}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Retrouvez vos articles préférés'}
                      />
                    <FlatList
                    style={{alignSelf:'center'}}
                    data={data}
                    contentContainerStyle={{
                      justifyContent: 'center',
                      // alignItems: 'flex-start',
                    }}
                  ListHeaderComponent={<View style={{height:responsiveFontSize(2)}} />}
                  numColumns={2}
                  ListFooterComponent={<View style={{height:responsiveFontSize(25)}} />}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={({item, index}) => 
                  <FavOrder data={item} navigation={navigation} key={index} />
                  }
                />
                </View>
              
              </View>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};
export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logintext: {
    fontSize: width * 0.065,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    width: width,
    borderBottomColor: 'transparent',
    marginTop: height * 0.05,
  },
  inputbox: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '80%',
    marginTop: 20,
    alignSelf: 'center',
    borderColor: '#d6d6d6',
    borderRadius: 12,
  },
  input: {
    paddingLeft: 12,
  },
  logo: {
    height: height * 0.2,
    width: width * 0.35,
    alignSelf: 'center',
  },

  title: {
    fontSize: width * 0.05,
    color: 'black',
    fontweight: '600',
    textAlign: 'center',
  },
  tag: {
    fontSize: width * 0.083,
    textAlign: 'center',
    color: 'black',
    fontWeight: '800',
    marginTop: -height * 0.012,
  },
  btn: {
    height: height * 0.065,
    width: width * 0.85,
    backgroundColor: '#d74844',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 20,
  },
  Signin: {
    height: height * 0.06,
    width: width * 0.8,
    backgroundColor: '#C12F2F',
    borderRadius: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.02,
    alignSelf: 'center',
  },
  btntxt: {
    color: '#ffffff',
    fontSize: width * 0.038,
    fontWeight: '500',
  },
  ctn1: {
    marginTop: responsiveFontSize(4),
    alignItems: 'flex-start',
    width: '95%',
    alignSelf: 'center',


  
  },
  ctn2: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    // marginTop: height * 0.1,
  },
  eye: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    rigth: 20,
    alignSelf: 'center',
  },
  round: {
    height: height * 0.03,
    width: width * 0.032,
    resizeMode: 'contain',
    marginRight: height * 0.01,
  },
});
