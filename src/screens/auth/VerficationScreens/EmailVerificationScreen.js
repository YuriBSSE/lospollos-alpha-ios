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
  ImageBackground
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
import OTPInputView from '@twotalltotems/react-native-otp-input';
import InputField from '../../../components/InputField';
import deviceInfo from 'react-native-device-info';
import CheckBox from '@react-native-community/checkbox';
import BackBtnHeader from '../../../components/BackBtnHeader';
import Verfication from '../../Modal/VerificationModal';
let {width, height} = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
  checkStyle.transform = [{scaleX: 0.7}, {scaleY: 0.7}];
}
const tablet = deviceInfo.isTablet();
const EmailVerificationScreen = ({navigation}) => {
  const password = useRef();

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
  const [show, setshow] = useState(false);

  // if(true){
  //   return(
  //     <LoadingScreen />
  //   )
  // }

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
    <View style={StyleSheet.absoluteFill}>
       
    
      <StatusBar
          backgroundColor={colors.themeblue}
          barStyle='dark-content'
          />
      <ScrollView style={{backgroundColor: colors.themeblue}}>
      <Verfication
        ModalState={show}
        ChangeModalState={setshow}
        callBack={func}
      />
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
              text={'Retour'} 
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

        <View
          style={{
            alignSelf: 'center',
            top: 20
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('resetpassword')}
            >
            <ImageBackground
              resizeMode="cover"
              style={{
                height: 250,
                width: 200,
              }}
              source={require('../../../assets/email.png')}>
              <Image
                resizeMode="contain"
                style={{height: 200, width: 200}}
                source={require('../../../assets/bluremail.png')}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 180,
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Heading
            fontsize={responsiveFontSize(2)}
            width={'70%'}
            color={'black'}
            align={'center'}
            fontWeight={'800'}
            text="Un code de réinitialisation de mot de passe a été envoyé à l’adresse mail j••••••@o••••••.fr"
          />
          <Heading
            fontsize={responsiveFontSize(1.5)}
            width={'60%'}
            color={'grey'}
            align={'center'}
            // fontWeight={'00'}
            text="Saisissez le code ci-dessous pour continuer."
          />
        </View>
        <OTPInputView
          style={{width: '60%', height: height * 0.1, alignSelf: 'center'}}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
            navigation.navigate('resetpassword')
          }}
        />
        <View
          style={{
            height: 40,
            width: '100%',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              setshow(true);
            }}
            style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: responsiveFontSize(1.8),
                color: colors.themeblue,
                textDecorationStyle: 'solid',
                textDecorationLine: 'underline',
              }}>
              Vous n’avez pas reçu de code ?
            </Text>
          </TouchableOpacity>
        </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default EmailVerificationScreen;

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
  underlineStyleBase: {
    width: 50,
    height: 45,
    // borderWidth: 0,
    borderWidth: 1,
    color: 'black',
    fontSize: responsiveFontSize(2.4),
    backgroundColor: '#e8e8e8',
    // borderBottomColor: 'black',
    borderRadius: responsiveFontSize(1),
  },
});
