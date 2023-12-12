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
  ScrollView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize
} from 'react-native-responsive-dimensions';
import Btn from '../../../components/Btn';
import DropDownComp from '../../../components/DropDownComp';
import { CommonActions } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ShopIcon from 'react-native-vector-icons/Entypo';
import EarningIcon from 'react-native-vector-icons/FontAwesome5';
import PurchasesIcon from 'react-native-vector-icons/FontAwesome5';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import colors from '../../../assets/colors/colors';
import InputField from '../../../components/InputField';
import UpDownIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';

import DeactivateAccountModal from '../../Modal/DeactiviteAccountModal';
export default function PersonalInformation({ navigation }) {
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [show, setshow] = useState(false);
  const [fields, setFields] = useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
  });
  const [date, onChangeDate] = useState(null);
  const [eye, seteye] = React.useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn(date);
    let a = moment(date).format('MMM Do YY');
    console.log(a);
    onChangeDate(a);
    hideDatePicker();
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
    <ScrollView style={{backgroundColor:'white'}}>
  
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.themeblue}
        />
        <View
          style={{
            backgroundColor: colors.themeblue,
            width: '100%',
            height: responsiveFontSize(8),
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.themeblue,
              width: '100%',
              height: responsiveFontSize(8),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}>
            <Feather
              style={{ marginLeft: responsiveFontSize(2) }}
              name="chevron-left"
              size={responsiveFontSize(3)}
              color={'white'}
            />
            <Text
              style={{
                marginLeft: responsiveFontSize(2),
                fontWeight: 'bold',

                color: 'white',
                fontSize: responsiveFontSize(2),
              }}>
              Mes informations de retrait
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: responsiveFontSize(2),
            width: '85%',
            alignSelf: 'center',
            // backgroundColor:'red',
            flexDirection: 'row',
            height: responsiveFontSize(10),
            justifyContent: 'space-between',
          }}>
          <MyText
            size={responsiveFontSize(2)}
            fw={'bold'}
            color={'black'}
            decoration={'none'}
            Label={'Veuillez vérifier vos informations personnelles'}
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
          width:'85%',
          alignItems:'flex-start',
          alignSelf:'center',
          height: responsiveFontSize(5)

          // backgroundColor:'green',
        }}>
        <MyText
            size={responsiveFontSize(1.5)}
            fw={'bold'}
            color={'black'}
            textAlign='left'
            decoration={'none'}
            Label={'Ces informations nous permettront d’identifier votre commande lors du retrait.'}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '83%',
            height: responsiveFontSize(10),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#5c5c5c',
              fontSize: responsiveFontSize(1.7),
              fontWeight: '700',
            }}>
            Prénom
          </Text>
          <InputField
            error={!fields.fname && submit}
            returnKeyType="next"
            getValue={v => getValue('fname', v)}
            password={false}
            value={fields.fname}
            placeHolder="Cédric"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '83%',
            height: responsiveFontSize(10),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#5c5c5c',
              fontSize: responsiveFontSize(1.7),
              fontWeight: '700',
            }}>
            Nom
          </Text>
          <InputField
            error={!fields.lname && submit}
            returnKeyType="next"
            getValue={v => getValue('lname', v)}
            password={false}
            value={fields.lname}
            placeHolder="Dupont"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
        </View>
      
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: responsiveFontSize(10),
            width: '83%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#5c5c5c',
              fontSize: responsiveFontSize(1.7),
              fontWeight: '700',
            }}>
            Adresse e-mail
          </Text>
          <InputField
            error={!fields.email && submit}
            returnKeyType="next"
            getValue={v => getValue('email', v)}
            password={false}
            value={fields.email}
            placeHolder="cedric.dupont@gmail.com"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: responsiveFontSize(10),
            width: '83%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#5c5c5c',
              fontSize: responsiveFontSize(1.7),
              fontWeight: '700',
            }}>
            Numéro de téléphone
          </Text>
          <InputField
            error={!fields.number && submit}
            returnKeyType="next"
            getValue={v => getValue('number', v)}
            password={false}
            keyboardType={'number'}
            value={fields.number}
            placeHolder="0612345678"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
        </View>
        <View style={{
                  alignSelf:'center', width: '100%', justifyContent:'center', alignItems:'center', height:responsiveScreenFontSize(10)  
                }}>
                <Btn
                        text="Valider"
                        color={colors.themeblue}
                        pSText={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: responsiveFontSize(1.8),
                            marginHorizontal:responsiveFontSize(1)
                        }}
                        pS={{ width: '40%', height: responsiveFontSize(5) }}
                        textColor={colors.themeblue}
                        call={() => navigation.navigate('cardinfo')
                        }
                        loader={null}
                    />
                    </View>
        {/* <View style={{ height: responsiveFontSize(30) }} /> */}
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveFontSize(0.5),
    // height: responsiveHeight(6.5),
    paddingVertical: responsiveFontSize(2),
    backgroundColor: 'white',
    marginTop: responsiveFontSize(0.25),
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#001441'
  },
  settingDetails: {
    // backgroundColor: 'white',
    marginTop: -12,
    paddingLeft: responsiveFontSize(12),
  },
  settingDetailsItem: {
    padding: responsiveFontSize(1),
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    color: 'gray',
  },
  iconWidth: {
    width: '4%',
  },
  texta: {
    color: 'black',
    fontWeight: '100',
    width: '100%',
  }, eye: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    rigth: 20,
    alignSelf: 'center',
  },
});
