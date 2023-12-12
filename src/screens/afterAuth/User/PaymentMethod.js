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
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import InputField from '../../../components/InputField';
import deviceInfo from 'react-native-device-info';
// import CheckBox from '@react-native-community/checkbox';
import BackBtnHeader from '../../../components/BackBtnHeader';
import Verfication from '../../Modal/VerificationModal';
import MyText from '../../../components/MyText';
import AddCategory from '../../Modal/AddCategory';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './ChildComponent/PaymentScreen';
let { width, height } = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
  checkStyle.transform = [{ scaleX: 0.7 }, { scaleY: 0.7 }];
}
const tablet = deviceInfo.isTablet();
const PaymentMethod = ({ navigation }) => {

  const [cards, onChangeCards] = useState([])
  const [show, onChangeShow] = useState(false)
  const [showModal, setshowModal] = useState(false);

  // if(true){
  //   return(
  //     <LoadingScreen />
  //   )
  // }

  if (!show) {
    return (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: 'white' }]}>


        <StatusBar
          backgroundColor={colors.themeblue}
          barStyle='dark-content'
        />
        <View style={{ backgroundColor: colors.themeblue }}>
          {/* <Verfication
          ModalState={show}
          ChangeModalState={setshow}
          callBack={func}
        /> */}
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
                text={'Mes moyens de paiement'}
                odd={true}
                cross={true}
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
                // height: responsiveHeight(80),
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


                <Image
                  resizeMode="contain"
                  style={{ height: 350, width: 350 }}
                  source={require('../../../assets/cardImage.png')}
                />


              </View>
              <View
                style={{
                  height: 180,
                  width: '80%',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>

                <MyText
                  size={responsiveFontSize(2.4)}
                  fw={'normal'}
                  color={'black'}
                  decoration={'none'}
                  textAlign={'center'}
                  Label={'Vous n’avez pas de carte bancaire enregistrée'}
                />
                <Btn
                  text="Ajouter"
                  color={colors.themeblue}
                  pSText={{
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                  pS={{
                    width: '50%'
                  }}
                  textColor={colors.themeblue}
                  call={() => onChangeShow(true)}
                  loader={null}
                />
              </View>

            </View>
          </View>
        </View>
      </View>
    )
  }


  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: 'white' }]}>


      <StatusBar
        backgroundColor={colors.themeblue}
        barStyle='dark-content'
      />
      {
        showModal &&
        <AddCategory
          ModalState={showModal}
          ChangeModalState={setshowModal}
        />
      }
      {/* <AddCategory
        ModalState={showModal}
        ChangeModalState={setshowModal}
      /> */}
      <View style={{ backgroundColor: colors.themeblue }}>
        {/* <Verfication
          ModalState={show}
          ChangeModalState={setshow}
          callBack={func}
        /> */}
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
              text={'Mes moyens de paiement'}
              odd={true}
              cross={true}
              call={() => navigation.goBack()}
            />
          </View>
          <View style={{ height: responsiveHeight(12) }} />
          <View
            style={{
              // height: responsiveHeight(70),
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>

            <StripeProvider
              publishableKey={'pk_test_51Hp8gsKE50QFKl7kw9XGrBb54Ar66njegYoe3XlziHPVBoS1UIEhlPjsVZBTdD1YpbT9lyOWhdm54NdmDHqAsQUT00CSkYCspw'}
            // merchantIdentifier="merchant.identifier" // required for Apple Pay
            // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            >
              <View style={{ width: '95%', height: responsiveScreenFontSize(40), alignSelf: 'center', marginVertical: responsiveScreenFontSize(2), justifyContent: 'center', alignItems: 'center', }}>
                <PaymentScreen />
              </View>

            </StripeProvider>
            {/* <ScrollView>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: responsiveFontSize(2),
                width: '85%',
                alignSelf: 'center',

                flexDirection: 'row',
                height: responsiveFontSize(10),
                justifyContent: 'flex-start',
              }}>
              <MyText
                size={responsiveFontSize(2)}
                fw={'normal'}
                color={'#383838'}
                decoration={'none'}
                Label={'Carte bancaire 1'}
              />
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: responsiveFontSize(5),
                  height: responsiveFontSize(5),
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../../assets/boxShadow.png')}>
                <Image
                  resizeMode="contain"
                  source={require('../../../assets/6.png')}
                />
              </ImageBackground>
     
            </View>
            <View style={{
              justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center',
              width: '100%', marginVertical: responsiveFontSize(2), flexDirection: 'column',
              height: responsiveFontSize(39), 
            }}>
              <Image style={{
                alignSelf: 'center',
                width: responsiveFontSize(28),
                height: responsiveFontSize(18)
              }} source={require('../../../assets/card2.png')} />
              <Image style={{
                alignSelf: 'center',   width: responsiveFontSize(28),
                height: responsiveFontSize(18)
              }} source={require('../../../assets/card1.png')} />
            </View>
            <Btn
              text="Ajouter"
              color={colors.themeblue}
              pSText={{
                fontWeight: 'normal',
                color: 'white'
              }}
              pS={{
                alignSelf: 'center',
                width: '40%'
              }}
              textColor={colors.themeblue}
              call={() => setshowModal(true)}
              loader={null}
            />
               <View style={{height: responsiveFontSize(10)}} />
               </ScrollView> */}
          </View>

        </View>
      </View>
    </View>
  );
};
export default PaymentMethod;

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
