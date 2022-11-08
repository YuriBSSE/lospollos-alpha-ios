// import {View, Text, StyleSheet, ScrollView, Image,Platform} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import InputField from '../../../components/InputField';
// import colors from '../../../assets/colors/colors';
// import MailIcon from 'react-native-vector-icons/Fontisto';
// import PersonIcon from 'react-native-vector-icons/Ionicons';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Btn from '../../../components/Btn';
// import {useNavigation} from '@react-navigation/native';
// import Header from '../Header';
// import DropDownComp from '../../../components/DropDownComp';
// import {connect, useDispatch} from 'react-redux';
// import validateEmail from '../../../utils/validateEmail';
// import deviceInfo from "react-native-device-info"

// const tablet=deviceInfo.isTablet()

// const BasicDetail = ({userData, getValue}) => {
//   const emailRef=useRef();
//   const [gender, setGender] = useState([
//     {label: 'Male', value: 'male'},
//     {label: 'Female', value: 'female'},
//     {label: 'Other', value: 'other'},
//   ]);
//   const [isOpenDrpdwn, setIsOpenDrpdwn] = useState(false);
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigation = useNavigation();
//   const dispatch = useDispatch();

//   const onNext = () => {
//     setIsSubmit(true);
//     if (!userData.userName) {
//       console.log('Name and gender is required');
//     } else if (!validateEmail(userData.email)) {
//       console.log('Kindly provide a valid email');
//     } else {
//       dispatch({type: 'clearAuth'});
//       navigation.navigate('auth_country_detail');
//     }
//   };

//   return (
//     <>
//       <Header title="Sign Up" />
//       <ScrollView
//         contentContainerStyle={styles.containerScroll}
//         showsVerticalScrollIndicator={false}
//         nestedScrollEnabled={true}
//         keyboardShouldPersistTaps="always">
//         <View style={styles.imgCont}>
//           <Image
//             style={styles.logo}
//             resizeMode="contain"
//             source={require('../../../assets/logo.png')}
//           />
//         </View>
//         <View style={styles.cont}>
//           <View style={styles.inputCont}>
//             {/* <Text style={styles.subHd}>Create An Account</Text> */}
//             <InputField
//               error={!userData.userName && isSubmit}
//               getValue={v => getValue('userName', v)}
//               value={userData.userName}
//               returnKeyType="next"
//               onSubmitEditing={()=>emailRef.current.focus()}
//               icon={() => {
//                 return (
//                   <PersonIcon
//                     name="person"
//                     color={colors.themeblue}
//                     size={responsiveFontSize(tablet?1.25:2.2)}
//                   />
//                 );
//               }}
//               password={false}
//               placeHolder="Name"
//               color="grey"
//             />
//             <InputField
//               // error={!userData.email && isSubmit}
//               error={!validateEmail(userData.email) && isSubmit}
//               getValue={v => getValue('email', v)}
//               innerRef={emailRef}
//               value={userData.email}
//               icon={() => {
//                 return (
//                   <MailIcon name="email" color={colors.themeblue} size={responsiveFontSize(tablet?1.25:2.2)} />
//                 );
//               }}
//               smallCaps={true}
//               password={false}
//               placeHolder="Email"
//               color="grey"
//             />
//             <DropDownComp
//               items={gender}
//               open={isOpenDrpdwn}
//               value={userData.gender}
//               // setItems={setGender}
//               setOpen={setIsOpenDrpdwn}
//               onSelectItem={data => getValue('gender', data.value)}
//               // error={!userData.gender && isSubmit}
//               listMode="SCROLLVIEW"
//               placeholdertxt="Gender (Optional)"
//               style={{marginTop: 5}}
//             />
//           </View>
//           <View style={{...styles.btnCont,zIndex:(isOpenDrpdwn && Platform.OS=="ios")?-5:1}}>
//             <Btn text="Next" call={() => onNext()} />
//           </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   containerScroll: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: responsiveHeight(70),
//   },
//   cont: {
//     alignItems: 'center',
//   },
//   btnCont: {
//     width: responsiveWidth(90),
//     marginTop: responsiveHeight(2),
//     height: responsiveHeight(12),
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   inputCont: {
//     width: responsiveWidth(90),
//     marginTop: responsiveHeight(5),
//   },
//   subHd: {
//     fontSize: responsiveFontSize(1.8),
//     color: 'black',
//   },
//   // dropCont: {
//   //   width: responsiveWidth(90),
//   // },
//   imgCont: {
//     width: responsiveWidth(100),
//     height: responsiveHeight(20),
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     // backgroundColor:"red"
//   },
//   logo: {
//     width: responsiveWidth(50),
//     height: responsiveHeight(4),
//     alignSelf: 'center',
//   },
// });

// export default connect(null, null)(BasicDetail);


// @ts-nocheck
// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Image,
//   TouchableOpacity,
//   Text,
//   ScrollView,
//   Platform,
//   Dimensions,
//   KeyboardAvoidingView
// } from 'react-native';
// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import InputField from '../../../components/InputField';
// import MailIcon from 'react-native-vector-icons/Fontisto';
// import PassIcon from 'react-native-vector-icons/Feather';
// import EyeIcon from 'react-native-vector-icons/Entypo';
// import Btn from '../../../components/Btn';
// import colors from '../../../assets/colors/colors';
// import { connect } from 'react-redux';
// import * as authActions from '../../../store/actions/authAct';
// import { useDispatch } from 'react-redux';
// import CheckBox from '@react-native-community/checkbox';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import deviceInfo from "react-native-device-info"

// const tablet=deviceInfo.isTablet()

// const {width}=Dimensions.get('window')
// const checkStyle={}

// if(Platform.OS=="ios" && width<=550) {
//   checkStyle.transform=[{scaleX:0.7},{scaleY:0.7}]
// }

// const Login = ({ navigation, login, authRed }, props) => {
//   const password=useRef()
//   const dispatch = useDispatch();
//   useLayoutEffect(() => {
//     navigation.setOptions({ headerShown: false });
//   }, [navigation]);

//   const [fields, setFields] = useState({
//     email: '',
//     password: '',
//   });

//   const [submit, setSubmit] = useState(false);
//   const [isShowPass, setisShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [toggleCheckBox, setToggleCheckBox] = useState(true)

//   function getValue(k, v) {
//     setFields(pS => {
//       return {
//         ...pS,
//         [k]: v,
//       };
//     });
//   }

//   function onLogin() {
//     setSubmit(true);
//     if (fields.password && fields.email) {
//       setLoading(true);
//       login(fields.password, fields.email,Platform.OS).then(() => {
//         if(toggleCheckBox){
//           AsyncStorage.setItem("cred", JSON.stringify(fields))
//         }else{
//           AsyncStorage.setItem("cred", "")
//         }
//         setLoading(false)
//       });
//     }
//   }
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       setFields({ email: '', password: '' });
//       AsyncStorage.getItem("cred").then((res)=>{
//         if(res)setFields(JSON.parse(res))
//       })
//       setSubmit(false);
//       dispatch({ type: 'clearAuth' });
//     });

//     return unsubscribe;
//   }, [navigation]);

//   return (
//     <KeyboardAvoidingView
//     behavior={Platform.OS === "ios" ? "padding" : "height"}
//     style={{flex:1}}
//     >
//       <ScrollView
//       keyboardShouldPersistTaps="handled"
//       contentContainerStyle={styles.container}
//       showsVerticalScrollIndicator={false}>
//       <Image
//         style={styles.logo}
//         resizeMode="contain"
//         source={require('../../../assets/logo.png')}
//       />
//       <View style={styles.inputCont}>
//         <InputField
//           error={!fields.email && submit}
//           returnKeyType="next"
//           onSubmitEditing={()=>{
//             password.current.focus()
//           }}
//           getValue={v => getValue('email', v)}
//           icon={() => {
//             return <MailIcon name="email" color={colors.themeblue} size={responsiveFontSize(tablet?1.25:2.2)} />;
//           }}
//           password={false}
//           value={fields.email}
//           placeHolder="Email"
//           smallCaps={true}
//           color="grey"
//         />
//         <InputField
//           inputType="password"
//           innerRef={password}
//           error={!fields.password && submit}
//           getValue={v => getValue('password', v)}
//           icon={() => {
//             return <PassIcon name="lock" color={colors.themeblue} size={responsiveFontSize(tablet?1.25:2.2)} />;
//           }}
//           password={!isShowPass}
//           placeHolder="Password"
//           smallCaps={true}
//           color="grey"
//           value={fields.password}
//           rightIcon={() => {
//             if (isShowPass) {
//               return <EyeIcon name="eye" color={colors.themeblue} size={responsiveFontSize(tablet?1.25:2.2)} />;
//             } else {
//               return (
//                 <EyeIcon
//                   name="eye-with-line"
//                   color={colors.themeblue}
//                   size={responsiveFontSize(tablet?1.25:2.2)}
//                 />
//               );
//             }
//           }}
//           onPressRghtIcon={() => setisShowPass(prev => !prev)}
//         />
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,marginTop:responsiveHeight(1)}}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <CheckBox
//               tintColors={{ true: colors.themeblue, false: 'gray' }}
//               onFillColor={colors.themeblue}
//               boxType="square"
//               disabled={false}
//               style={checkStyle}
//               value={toggleCheckBox}
//               onValueChange={(newValue) => setToggleCheckBox(newValue)}
//             />
//             <Text style={{ marginLeft: responsiveFontSize(0.5),fontSize:responsiveFontSize(tablet?1:1.6) }}>Remember me</Text>
//           </View>
//           <TouchableOpacity style={{ width: responsiveWidth(tablet?20:30) }} onPress={() => navigation.navigate('forgetpassword')}>
//             <Text style={{ color: colors.themeblue,fontSize:responsiveFontSize(tablet?1:1.6) }}>Forgot Password</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {authRed?.message ? (
//         <Text style={{ color: 'red',fontSize:responsiveFontSize(tablet?1:1.6),maxWidth:'90%',alignSelf:'center',marginTop:responsiveFontSize(1)}}>{authRed.message}</Text>
//       ) : null}
//       <View style={styles.btnCont}>
//         <Btn text="Login" call={() => onLogin()} loader={loading} />
//         {/* <Btn
//           text="Sign Up"
//           call={() => {
//             // navigation.navigate('signup');
//             navigation.navigate('auth');
//           }}
//         /> */}
//       </View>
//     </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: responsiveHeight(78),
//   },
//   logo: {
//     width: responsiveWidth(50),
//     height: responsiveHeight(4),
//   },
//   inputCont: {
//     width: responsiveWidth(90),
//     marginTop: responsiveHeight(10),
//   },
//   btnCont: {
//     width: responsiveWidth(90),
//     marginTop: responsiveHeight(6),
//     height: responsiveHeight(12),
//     justifyContent: 'space-between',
//   },
// });

// function mapStateToProps({ authRed }) {
//   return { authRed };
// }

// export default connect(mapStateToProps, authActions)(Login);

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
  SafeAreaView,Platform
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
import deviceInfo from "react-native-device-info"
import CheckBox from '@react-native-community/checkbox';
let {width, height} = Dimensions.get('window');

const checkStyle={}

if(Platform.OS=="ios" && width<=550) {
  checkStyle.transform=[{scaleX:0.7},{scaleY:0.7}]
}
const tablet = deviceInfo.isTablet();
const SignUp = ({navigation}) => {
  const password = useRef();

  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  const [fields, setFields] = useState({
    fullnmae: '',
    email: '',
    number: '',
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
  return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView style={{backgroundColor: colors.themeblue}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{height: responsiveHeight(20)}} />

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
              height: responsiveHeight(85),
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
                      flexDirection:'column', alignItems:'center', justifyContent:'space-around', width:'100%',marginTop: 20
                    }}>
                    <Btn
                        text="Créer un compte"
                        color={colors.themeblue}
                        pSText={{
                          fontWeight: 'bold',
                          color: 'white'
                        }}
                        textColor={colors.themeblue}
                        // call={() => navigation.navigate('login')}
                        loader={null}
                  />
                    <TouchableOpacity style={{marginTop: 10}} onPress={() => navigation.navigate('login')}>
                      <Text style={{color: 'grey', textDecorationLine:'underline'}}>J’ai un compte</Text>
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

