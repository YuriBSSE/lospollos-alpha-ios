// @ts-nocheck
import React, {useState, useEffect, useMemo, useContext, useRef} from 'react';
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
  SafeAreaView,Platform
} from 'react-native';
import Heading from '../../../components/Heading';
import Btn from '../../../components/Btn';
import colors from '../../../assets/colors/colors';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import deviceInfo from "react-native-device-info"
import MyText from '../../../components/MyText';
import SignUpVerficationModal from '../../Modal/SignUpVerficationModal';
let {width, height} = Dimensions.get('window');

const checkStyle={}

if(Platform.OS=="ios" && width<=550) {
  checkStyle.transform=[{scaleX:0.7},{scaleY:0.7}]
}
const tablet = deviceInfo.isTablet();
const SignUp = ({navigation}) => {
  const [show, setshow] = useState(false);
  const password = useRef();
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [fields, setFields] = useState({
    fullnmae: '',
    email: '',
    number: '',
    password: '',
  });

  const [eye, seteye] = React.useState(true);


  const func = x => {
    console.log(x);
    if (x == 'sms') {
      setshow(false)
      navigation.navigate('smsverification')
    }
    if (x == 'email') {
      setshow(false)
      navigation.navigate('emailverification')
    }
  };


  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }
  return (
  
      <ScrollView  showsVerticalScrollIndicator={false} style={{backgroundColor: colors.themeblue}}>
        {
        show &&
           <SignUpVerficationModal
              ModalState={show}
              ChangeModalState={setshow}
              callBack={func}
              navigation={navigation}
            />
        }
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{height: responsiveHeight(10)}} />

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
              // position:'absolute', bottom: 0
            }}>
            <View style={styles.container}>
              <View>
                <View style={styles.ctn1}>
                  <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                  />
                  <View style={{alignSelf: 'center'}}>
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
                        error={!fields.fullnmae && submit}
                        returnKeyType="next"
                     
                        getValue={v => getValue('fullnmae', v)}
                        password={false}
                        value={fields.fullnmae}
                        placeHolder="Nom et Prénom"
                        smallCaps={true}
                        color="grey"
                      />
                      <InputField
                        error={!fields.email && submit}
                        returnKeyType="next"
                      
                        getValue={v => getValue('email', v)}
                        password={false}
                        value={fields.email}
                        placeHolder="E-mail"
                        smallCaps={true}
                        color="grey"
                      />
                        <InputField
                        error={!fields.number && submit}
                        returnKeyType="next"
                        keyboardType={'number'}
                        getValue={v => getValue('number', v)}
                        password={false}
                        value={fields.number}
                        placeHolder="Numéro de téléphone"
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
                  
                    <View style={{
                      flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:responsiveFontSize(15),
                    }}>
                    <Btn
                        text="Créer un compte"
                        color={colors.themeblue}
                        pSText={{
                          fontWeight: 'bold',
                          color: 'white'
                        }}
                        textColor={colors.themeblue}
                        call={() => navigation.navigate('emailverification')}
                        loader={null}
                  />
                    <TouchableOpacity style={{marginTop: 10}} onPress={() => navigation.navigate('login')}>
                      <MyText
                          size={responsiveFontSize(1.6)}
                          fw={'bold'}
                          color={'grey'}
                          decoration={'underline'}
                          textAlign={'center'}
                          Label={'J’ai un compte'}
                        />
              
                    </TouchableOpacity>
                    </View>
                    
                </View>
              </View>
              
            </View>
          </View>
        </View>
        {/* <View style={{height:responsiveFontSize(20)}} /> */}
      </ScrollView>

  );
};
export default SignUp;

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
    // marginTop: height * 0.08,
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

