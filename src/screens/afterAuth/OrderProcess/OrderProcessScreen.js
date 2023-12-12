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
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import deviceInfo from 'react-native-device-info';
// import CheckBox from '@react-native-community/checkbox';
import BackBtnHeader from '../../../components/BackBtnHeader';
import MyText from '../../../components/MyText';
let { width, height } = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
  checkStyle.transform = [{ scaleX: 0.7 }, { scaleY: 0.7 }];
}
const tablet = deviceInfo.isTablet();
const OrderProcessScreen = ({ navigation }) => {
  const password = useRef();

  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);

  const [isShowPass2, setisShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [currentPosition, onChangeCurrentPosition] = useState(1)
  const [fields, setFields] = useState({
    password: '',
    confirmPassword: '',
  });
  const labels = ["En attente de réception","Réceptionnée","En cours de préparation","Prête à la réception","Récupérée"];
  const labels2 = ["Etat de la commande","Etat de la commande","Etat de la commande","Etat de la commande","Etat de la commande"];
  const customStyles = {
    // stepIndicatorSize: 50,
    currentStepIndicatorSize:100,
    stepIndicatorSize: 70,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: 'white',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: '',
    stepStrokeUnFinishedColor: '#aaaaaa',
    
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'white',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'white',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: 'white',
    labelAlign:'flex-start'
  }
   
  const [eye, seteye] = React.useState(true);

  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }

  if (false) {
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
              cross={true}
              text={'Suivi de commande'}
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
                      source={require('../../../assets/cart1.png')}
                    />

                    <View style={{ width: '80%', alignSelf: 'center', justifyContent: 'space-around', height: responsiveFontSize(20), alignItems:'center' }}>
                      <MyText
                        size={responsiveFontSize(3)}
                        fw={'normal'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'center'}
                        Label={'Vous n’avez pas de commande en cours'}
                      />
                      <MyText
                        size={responsiveFontSize(1.9)}
                        fw={'bold'}
                        color={'#b8b8b8'}
                        decoration={'none'}
                        textAlign={'center'}
                        Label={' Passez commande !'}
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
            cross={true}
            text={'Suivi de commande'}
            odd={true}
            call={() => navigation.goBack()}
          />
        </View>
        <View style={{ height: responsiveHeight(12) }} />

        <View
          style={{
            height: responsiveHeight(80),
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.ctn1}>
              <MyText
                        size={responsiveFontSize(2)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Suivez l’état de votre commande en temps réel !'}
                      />
                <View style={{height:responsiveHeight(70), width:'100%'}}>
                <StepIndicator
                      customStyles={customStyles}
                      currentPosition={currentPosition}
                      labels={labels}
                      renderStepIndicator={(a)=>{
                        console.log(a,'BBBBBBBBBBBB');
                        if(a.stepStatus == 'current'){
                          return(
                            <Image  source={require('../../../assets/waiting.png')} />
                          )
                        }else if(a.stepStatus == 'finished'){
                          return(
                            // <TouchableOpacity onPress={()=> navigation.navigate('receipt')}>
                            <Image  source={require('../../../assets/done.png')} />
                            // </TouchableOpacity>
                          )
                        }else{
                          return(
                            <Image  source={require('../../../assets/undone.png')} />
                          )
                        }
                      }}
                      renderLabel={(a)=>{
                        // console.log(a, "aaaaaaaaaaaaaaaaa")
                        return(
                          <View style={{justifyContent:'center', alignItems:'flex-start',  alignSelf:'flex-start', }}>
                          <MyText
                            size={responsiveFontSize(2)}
                            fw={'bold'}
                            color={'black'}
                            decoration={'none'}
                            textAlign={'center'}
                            Label={a.label}
                          />
                          </View>
                        )
                      }}
                      direction='vertical'
                  />
                  {/* <View style={{height: 100}} /> */}
                  </View>
              {/* <View style={{width:'100%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Image style={{}} source={require('../../../assets/waiting.png')} />
                <View style={{flexDirection:'column', left: 10}}>
                <MyText
                        size={responsiveFontSize(1.8)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Heure'}
                      />
                <MyText
                        size={responsiveFontSize(2)}
                        fw={'normal'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Etat de la commande'}
                      />
                      </View>
              </View>
              <View style={{width:'80%', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', backgroundColor:'red', alignSelf:'center', position:'absolute'}}>
              <View style={{height:responsiveFontSize(10), backgroundColor:'black', width: 1}} />
              </View> */}
              
              </View>
              <View style={{height: responsiveScreenHeight(5)}} />
            </ScrollView>
          </View>
        </View>
      </View>

    </View>
  );
};
export default OrderProcessScreen;

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
