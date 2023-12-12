// @ts-nocheck
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
// import Header from '../component/Header';
import BackBtnHeader from '../../../components/BackBtnHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../../assets/colors/colors';
import Heading from '../../../components/Heading';
import Verfication from '../../Modal/VerificationModal';
import LoadingScreen from '../../../components/LoadingScreen';
let {width, height} = Dimensions.get('window');
const ForgetScreen = ({navigation, route}) => {
  const [show, setshow] = useState(false);
  console.log(route?.params?.text, "ASDADASDASDASD=====================")
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

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Verfication
        ModalState={show}
        ChangeModalState={setshow}
        callBack={func}
        navigation={navigation}
      />
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
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
          call={() => navigation.goBack()}
        />
      </View>

      <View
        style={{
          marginTop: responsiveFontSize(10),
          alignSelf: 'center',
          width: '100%',
        }}>
        <View style={{alignSelf: 'center'}}>
          <Heading
            fontsize={responsiveFontSize(3)}
            width={'70%'}
            color={'black'}
            align={'center'}
            fontWeight={'bold'}
            text="Mot de passe oublié ?"
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
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
              source={require('../../../assets/image4.png')}>
              <Image
                resizeMode="contain"
                style={{height: 200, width: 200}}
                source={require('../../../assets/image3.png')}
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
            width={'60%'}
            color={'black'}
            align={'center'}
            fontWeight={'800'}
            text={route?.params?.text}
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
        
          codeInputFieldStyle={styles.underlineStyleBase}
          
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
    </ScrollView>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    color: 'black',
  },

  borderStyleHighLighted: {
    borderColor: 'red',
    borderBottomWidth: 3,
    borderBottomColor: 'red',
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
