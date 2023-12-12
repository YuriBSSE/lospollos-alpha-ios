// @ts-nocheck

import React, {useState, useEffect, useMemo, useContext, useRef} from 'react';
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
import EyeIcon from 'react-native-vector-icons/Entypo';
import Heading from '../../../components/Heading';
import Btn from '../../../components/Btn';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../assets/colors/colors';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import deviceInfo from 'react-native-device-info';
import BackBtnHeader from '../../../components/BackBtnHeader';
let {width, height} = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
  checkStyle.transform = [{scaleX: 0.7}, {scaleY: 0.7}];
}
const tablet = deviceInfo.isTablet();
const ResetPassword = ({navigation,route}) => {
  const password = useRef();
  // console.log(route?.params?.text, "ASDADASDASDASD=====================")
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);

  const [isShowPass2, setisShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  const [fields, setFields] = useState({
    password: '',
    confirmPassword: '',
  });

  const [eye, seteye] = React.useState(true);

  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }
  return (
    <View style={StyleSheet.absoluteFill}>
       
    
      <StatusBar
          backgroundColor={colors.themeblue}
          barStyle='dark-content'
          />
      <ScrollView style={{backgroundColor: colors.themeblue}}>
        <View
          style={{ 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
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
              text={'Réinitialisation du mot de passe'} 
              odd={true}
              call={() => navigation.goBack()}
            />
          </View>
          <View style={{height: responsiveHeight(20)}} />

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
                  <View
                    style={{
                      height: responsiveFontSize(10),
                      backgroundColor: 'red',
                    }}
                  />
                  <View style={{}}>
                    <Heading
                      width={'80%'}
                      color={'black'}
                      align={'left'}
                      fontsize={responsiveFontSize(2)}
                      fontWeight={'300'}
                      text="Veuillez choisir un nouveau mot 
                      de passe pour l’adresse mail   j••••••@o••••••.fr"
                    />
                  </View>
                </View>
                <View style={{height: responsiveFontSize(4)}} />
                <View style={styles.ctn2}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      width: '80%',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: responsiveFontSize(1.35),
                      }}>
                      Nouveau mot de passe
                    </Text>
                    <InputField
                      inputType="password"
                      innerRef={password}
                      error={!fields.password && submit}
                      getValue={v => getValue('password', v)}
                      password={!isShowPass}
                      placeHolder="Mot de passe"
                      smallCaps={true}
                      color="grey"
                      value={fields.password}
                      rightIcon={() => {
                        if (isShowPass) {
                          return (
                            <Image
                              style={styles.eye}
                              source={require('../../../assets//openeye.png')}
                            />
                          );
                        } else {
                          return (
                            <Image
                              style={styles.eye}
                              source={require('../../../assets//Eyeoff.png')}
                            />
                          );
                        }
                      }}
                      onPressRghtIcon={() => setisShowPass(prev => !prev)}
                    />
                    <View style={{height: responsiveFontSize(3)}} />
                    <Text
                      style={{
                        color: 'black',
                        fontSize: responsiveFontSize(1.35),
                      }}>
                      Confirmez votre nouveau mot de passe
                    </Text>
                    <InputField
                      inputType="password"
                      innerRef={password}
                      error={!fields.password && submit}
                      getValue={v => getValue('confirmPassword', v)}
                      password={!isShowPass2}
                      placeHolder="Confirmation de mot de passe"
                      smallCaps={true}
                      color="grey"
                      value={fields.confirmPassword}
                      rightIcon={() => {
                        if (isShowPass2) {
                          return (
                            <Image
                              style={styles.eye}
                              source={require('../../../assets//openeye.png')}
                            />
                          );
                        } else {
                          return (
                            <Image
                              style={styles.eye}
                              source={require('../../../assets//Eyeoff.png')}
                            />
                          );
                        }
                      }}
                      onPressRghtIcon={() => setisShowPass2(prev => !prev)}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      width: '60%',
                      marginTop: 20,
                    }}>
                    <Btn
                      text="Confirmer"
                      color={colors.themeblue}
                      pSText={{
                        fontWeight: 'bold',
                        color: 'white',
                      }}
                      textColor={colors.themeblue}
                      // call={() => navigation.navigate('login')}
                      loader={null}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ResetPassword;

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
