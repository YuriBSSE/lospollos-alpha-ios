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
} from 'react-native-responsive-dimensions';
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
import { CheckBox } from 'react-native-elements'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Btn from '../../../components/Btn';
import moment from 'moment/moment';
export default function CardInformation({ navigation }) {
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [fields, setFields] = useState({
    fullname: '',
    cardNo: '',
    expiryDate: '',
    cVV: '',
  });
  const [date, onChangeDate] = useState(null);
  const [eye, seteye] = React.useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [check, onChangeCheck] = useState(false)
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
    <ScrollView style={{ backgroundColor: 'white' }}>
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

            flexDirection: 'row',
            height: responsiveFontSize(10),
            justifyContent: 'flex-start',
          }}>
          <Image
            style={{ width: 70, height: 40 }}
            resizeMode="contain"
            source={require('../../../assets/cardicon.png')}
          />
          <MyText
            size={responsiveFontSize(2)}
            fw={'normal'}
            style={{ marginLeft: responsiveFontSize(2) }}
            color={'black'}
            decoration={'none'}
            Label={'Carte Bancaire'}
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
            Nom et prénom
          </Text>
          <InputField
            error={!fields.fullname && submit}
            returnKeyType="next"
            getValue={v => getValue('fullname', v)}
            password={false}
            value={fields.fullname}
            placeHolder="m ahsan muneer"
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
            Numéro de carte
          </Text>
          <InputField
            error={!fields.cardNo && submit}
            returnKeyType="next"
            getValue={v => getValue('cardNo', v)}
            password={false}
            keyboardType={'number'}
            value={fields.cardNo}
            placeHolder="xxxx xxxx xxxx xxxx"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
        </View>
        <View style={{ height: responsiveFontSize(10), width: '83%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              height: responsiveFontSize(10),
              width: '45%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#5c5c5c',
                fontSize: responsiveFontSize(1.7),
                fontWeight: '700',
              }}>
              Date d’expiration
            </Text>
            <InputField
              error={!fields.expiryDate && submit}
              returnKeyType="next"
              getValue={v => getValue('expiryDate', v)}
              password={false}
              value={fields.expiryDate}
              placeHolder="MM/AA"
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
              width: '45%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#5c5c5c',
                fontSize: responsiveFontSize(1.7),
                fontWeight: '700',
              }}>
              CVV
            </Text>
            <InputField
              error={!fields.cVV && submit}
              returnKeyType="next"
              getValue={v => getValue('cVV', v)}
              password={false}
              value={fields.cVV}
              placeHolder="123"
              smallCaps={true}
              MyBorderColor={'black'}
              color={'#BDBDBD'}
            />
          </View>
        </View>
        <View style={{
          width:'85%', alignSelf:'center',
        }}>
          <CheckBox
            title='Enregistrer mes informations bancaires'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor={colors.themeblue}

            containerStyle={{
              backgroundColor: 'white',
              borderWidth: 0
            }}
            checked={check}
            onPress={() => {
              onChangeCheck(!check)
            }}
          />
        </View>
        <View style={{ width: '50%', height: responsiveFontSize(10), justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
          <Btn
            text="Valider"
            color={colors.themeblue}
            pSText={{
              fontWeight: 'bold',
              color: 'white'
            }}
            call={()=> navigation.navigate('orderconfirm')}
            textColor={colors.themeblue}
            loader={null}
          />
        </View>


      </View>

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