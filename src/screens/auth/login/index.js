// @ts-nocheck

import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
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
  SafeAreaView, Platform
} from 'react-native';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Heading from '../../../components/Heading';
import Btn from '../../../components/Btn';
import * as Actions from '../../../store/actions/authAct';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../assets/colors/colors';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import deviceInfo from "react-native-device-info"
// import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
import MyText from '../../../components/MyText';
import SignUpVerficationModal from '../../Modal/SignUpVerficationModal';
import { CheckBox } from 'react-native-elements'

let { width, height } = Dimensions.get('window');

const checkStyle = {}

if (Platform.OS == "ios" && width <= 550) {
  checkStyle.transform = [{ scaleX: 0.7 }, { scaleY: 0.7 }]
}
const tablet = deviceInfo.isTablet();
const Login = ({ navigation, loginAct }) => {
  const password = useRef();

  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [show, setshow] = useState(false);
  const [fields, setFields] = useState({
    email: '',
    password: '',
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
  console.log(loginAct, "Actions");


  const func = x => {
    // console.log(x);
    if (x == 'sms') {
      setshow(false)
      navigation.navigate('forget', {forgot: true, text: 'Un code de réinitialisation du mot de passe a été envoyé par SMS au 06…………76'})
    }
    if (x == 'email') {
      setshow(false)
      navigation.navigate('forget', {forgot: true, text : 'Un code de réinitialisation du mot de passe a été envoyé à l’adresse mail J………@...........fr'})
    }
  };

  const callLoginFunc = () => {

    if (fields.email && fields.password) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields.email)) {
        loginAct(fields.email, fields.password)
      } else {
        Toast.show({
          type: 'error',
          text1: 'Please insert a valid email address.',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please insert a email and password.',
      });
    }
  }
  return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: colors.themeblue }}>

      {
        show &&
           <SignUpVerficationModal
              ModalState={show}
              ChangeModalState={setshow}
              callBack={func}
              navigation={navigation}
              forget={true}
            />
        }

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{ height: responsiveHeight(10) }} />

          <View
            style={{
              width: '20%',
              height: 5,
              borderRadius: 10,
              backgroundColor: 'white',
              alignSelf: 'center',
              bottom: 10,
            }}
          />
          <View
            style={{
              height: responsiveHeight(95),
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>
            <View style={styles.container}>
              <View>
                <View style={styles.ctn1}>
                  <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                  />
                  <View style={{ alignSelf: 'center' }}>
                    <Heading

                      width={'70%'}
                      color={'black'}
                      align={'center'}
                      fontWeight={'bold'}
                      text="Spécialiste du Poulet Braisé"
                    />
                  </View>
                </View>

                <View style={styles.ctn2}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: '80%',
                    }}>
                    <InputField
                      error={!fields.email && submit}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        password.current.focus();
                      }}
                      getValue={v => getValue('email', v)}
                      password={false}
                      value={fields.email}
                      placeHolder="Adresse mail ou numéro de téléphone"
                      smallCaps={true}
                      color="grey"
                    />
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
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 20,
                      width: "85%",
                      // backgroundColor:'red',
                      alignItems: 'center',

                    }}>
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '60%'
                    }}>
                           <CheckBox
                        title='Se Souvenir de moi'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor={colors.themeblue}

                        containerStyle={{
                            backgroundColor: 'white',
                            borderWidth: 0
                        }}
                        
                        textStyle={{
                          fontSize: responsiveFontSize(1.6)
                        }}
                        checked={toggleCheckBox}
                        onPress={() => {
                          setToggleCheckBox(!toggleCheckBox)
                        }}
                    />
                      {/* <CheckBox
                        tintColors={{ true: colors.themeblue, false: 'gray' }}
                        onFillColor={colors.themeblue}
                        boxType="circle"
                        disabled={false}
                        style={checkStyle}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                      />
                      <MyText
                        size={responsiveFontSize(1.6)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Se Souvenir de moi'}
                      /> */}
                      {/* <Text style={{color: '#000',  fontWeight: '500'}}>Se Souvenir de moi</Text> */}
                    </View>
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      width: '40%',
                      justifyContent: 'flex-end'
                    }}>
                      <TouchableOpacity

                        onPress={() => {
                          // navigation.navigate('forget');
                          setshow(true)
                        }}
                        style={{}}>
                        <MyText
                          size={responsiveFontSize(1.6)}
                          fw={'bold'}
                          color={'black'}
                          decoration={'underline'}
                          textAlign={'right'}
                          Label={'Mot de passe oublié ?'}
                        />

                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%', marginTop: 20
                  }}>
                    <Btn
                      text="Se connecter"
                      color={colors.themeblue}
                      pSText={{
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                      textColor={colors.themeblue}
                      call={() => callLoginFunc()}
                      loader={null}
                    />
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate('signup')}>
                    <MyText
                          size={responsiveFontSize(1.6)}
                          fw={'bold'}
                          color={'grey'}
                          decoration={'none'}
                          textAlign={'right'}
                          Label={'Créer un nouveau compte'}
                        />
                      {/* <Text style={{ color: 'grey' }}>Créer un nouveau compte</Text> */}
                    </TouchableOpacity>
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
// export default Login

export default connect(null, Actions)(Login);
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
    alignItems: 'center',
  },
  ctn2: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
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
