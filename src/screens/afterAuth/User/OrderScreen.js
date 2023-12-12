// @ts-nocheck
import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ImageBackground,
    FlatList,
    ScrollView,Dimensions
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
    
} from 'react-native-responsive-dimensions';
import Btn from '../../../components/Btn';
import { CommonActions } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import colors from '../../../assets/colors/colors';
import InfluencerIcon from 'react-native-vector-icons/Entypo';

import { useNavigation } from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import OrderDetails from './ChildComponent/OrderDetails';
import OrderModal from '../../Modal/OrderModal'
import BackBtnHeader from '../../../components/BackBtnHeader';
let { width, height } = Dimensions.get('window');

export default function OrderScreen({ navigation }) {
    const [show, setshow] = useState(false);

    if (false) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.themeblue,
                }}>
                <StatusBar barStyle="light-content" backgroundColor={colors.themeblue} />
        
                <View
                    style={{
                        backgroundColor: colors.themeblue,
                        width: '100%',
                        height: responsiveFontSize(8),
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                       <View
                            style={{
                            top: responsiveFontSize(2),
                            height: 50,
                            position: 'absolute',
                            width: '100%',
                            }}>
                            <BackBtnHeader
                            left={true}
                            cross={false}
                            text={'Mes commandes'}
                            odd={true}
                            call={() => navigation.goBack()}
                            />
                    </View>
                </View>
                <View
            style={{
              height: responsiveHeight(100),
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
                      source={require('../../../assets/basket.png')}
                    />

                    <View style={{ width: '80%', alignSelf: 'center', justifyContent: 'space-around', height: responsiveFontSize(20), alignItems:'center' }}>
                      <MyText
                        size={responsiveFontSize(3)}
                        fw={'normal'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'center'}
                        Label={'Il n’y a pas d’article dans votre panier'}
                      />
                      <MyText
                        size={responsiveFontSize(1.9)}
                        fw={'bold'}
                        color={'#b8b8b8'}
                        decoration={'none'}
                        textAlign={'center'}
                        Label={'Parcourez notre menu !'}
                      />
                      <Btn
                        text="J’y vais !"
                        color={colors.themeblue}
                        pSText={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: responsiveFontSize(1.8)
                        }}
                        pS={{ width: '60%' }}
                        textColor={colors.themeblue}

                        loader={null}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
               
            </View>
        )
    }


    const data = [
        1,
    ]
    const data1 = [
        1, 2
    ]
    const data2 = [
        1, 2, 3
    ]



    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeblue} />
            {
                show && 
                <OrderModal
                ModalState={show}
                ChangeModalState={setshow}
                nav={navigation}
            />
            }
                <View
                    style={{
                        backgroundColor: colors.themeblue,
                        width: '100%',
                        height: responsiveFontSize(8),
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            top: responsiveFontSize(2),
                            height: 50,
                            position: 'absolute',
                            width: '100%',
                        }}>
                        <BackBtnHeader
                            left={true}
                            cross={false}
                            text={'Mes commandes'}
                            odd={true}
                            call={() => navigation.goBack()}
                        />
                    </View>
                </View>
            {/* <View
                style={{
                    backgroundColor: colors.themeblue,
                    width: '100%',
                    height: responsiveFontSize(8),
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather
                        style={{ marginLeft: responsiveFontSize(2) }}
                        name="chevron-left"
                        size={responsiveFontSize(3)}
                        color={'white'}
                    />
                </TouchableOpacity>
                <MyText
                    style={{ marginLeft: responsiveFontSize(2) }}
                    size={responsiveFontSize(2.5)}
                    fw={'bold'}
                    color={'white'}
                    decoration={'none'}
                    Label={'Mes commandes'}
                />
            </View> */}


      


            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data1}
                    ListHeaderComponent={<View style={{ height: responsiveFontSize(2) }} />}
                    ListFooterComponent={<View style={{ height: responsiveFontSize(20) }} />}
                    keyExtractor={(item, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => 
                        <OrderDetails date={item} onChange={setshow} index={index} />
                    }

                />
            </View>


        </View>
    )
}

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
      width: '80%',
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
  