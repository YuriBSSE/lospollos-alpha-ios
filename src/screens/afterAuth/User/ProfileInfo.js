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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';
import DeactivateAccountModal from '../../Modal/DeactiviteAccountModal';
export default function ProfileInfo({ navigation }) {
  const [submit, setSubmit] = useState(false);
  const [isShowPass, setisShowPass] = useState(false);
  const [show, setshow] = useState(false);
  const [fields, setFields] = useState({
    Cedric: '',
    Nom: '',
    Number: '',
    Email: '',
    Address: '',
    House: '',
    password: ''
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
    <ScrollView style={{ backgroundColor: 'white' }}>
      {
        show &&
        <DeactivateAccountModal
        ModalState={show}
        ChangeModalState={setshow}
      />
      }
      {/* <DeactivateAccountModal
        ModalState={show}
        ChangeModalState={setshow}
      /> */}
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
              Mes informations
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
          <MyText
            size={responsiveFontSize(2)}
            fw={'bold'}
            color={'black'}
            decoration={'none'}
            Label={'Mon profil'}
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
          {/* <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.3),
            fontWeight: 'bold',
          }}>
          Conditions générales de vente
        </Text> */}
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
            error={!fields.Cedric && submit}
            returnKeyType="next"
            getValue={v => getValue('Cedric', v)}
            password={false}
            value={fields.Cedric}
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
            error={!fields.Cedric && submit}
            returnKeyType="next"
            getValue={v => getValue('Nom', v)}
            password={false}
            value={fields.Nom}
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
            Numéro de téléphone
          </Text>
          <InputField
            error={!fields.Number && submit}
            returnKeyType="next"
            getValue={v => getValue('Number', v)}
            password={false}
            value={fields.Number}
            placeHolder="0612345678"
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
            error={!fields.Email && submit}
            returnKeyType="next"
            getValue={v => getValue('Email', v)}
            password={false}
            value={fields.Email}
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
            Anniversaire
          </Text>
          <TouchableOpacity
            onPress={showDatePicker}
            style={{ height: responsiveFontSize(6), width: '100%' }}>
            <View
              style={{
                height: responsiveFontSize(5.5),
                borderRadius: responsiveFontSize(1),
                borderColor: 'black',
                borderWidth: responsiveFontSize(0.13),
                width: '100%',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#BDBDBD',
                  textAlign: 'left',
                  fontSize: responsiveFontSize(1.6),
                  left: 15,
                }}>
                {date ? date : 'JJ/MM/AAAA'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: responsiveFontSize(4),
          }}>
          <View
            style={{
              width: '90%',
              height: responsiveFontSize(0.1),
              backgroundColor: '#BDBDBD',
            }}
          />
        </View>
        <View
          style={{
            width: '82%',
            alignSelf: 'center',
          }}>
          <MyText
            size={responsiveFontSize(1.8)}
            fw={'normal'}
            color={'#5c5c5c'}
            decoration={'none'}
            Label={'Adresses sauvegardées'}
          />
          <InputField
            error={!fields.House && submit}
            returnKeyType="next"
            getValue={v => getValue('House', v)}
            password={false}
            value={fields.House}
            placeHolder="Maison"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
          <InputField
            error={!fields.Address && submit}
            returnKeyType="next"
            getValue={v => getValue('Address', v)}
            password={false}
            value={fields.Address}
            placeHolder="Adresse 2"
            smallCaps={true}
            MyBorderColor={'black'}
            color={'#BDBDBD'}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: responsiveFontSize(4),
          }}>
          <View
            style={{
              width: '90%',
              height: responsiveFontSize(0.1),
              backgroundColor: '#BDBDBD',
            }}
          />
        </View>
        <View
          style={{
            width: '82%',
            alignSelf: 'center',
          }}>
          <MyText
            size={responsiveFontSize(1.8)}
            fw={'normal'}
            color={'#5c5c5c'}
            decoration={'none'}
            Label={'Mon food-truck préféré'}
          />
          <DropDownComp
            items={items}
            open={open}
            value={value}
            setOpen={setOpen}
            onSelectItem={data => {
              setValue(data);
              console.log(data);
            }}
            error={!value && submit}
            listMode="SCROLLVIEW"
            ShowsVerticalScrollIndicator={false}
            textStyle={{
              fontSize: responsiveFontSize(1.65),
              color: '#BDBDBD',
            }}
            placeholdertxt="Choisissez un restaurant"
            style={{
              marginTop: 5,
              width: responsiveWidth(80),
              zIndex: 10,
            }}
            dropDownContainerStyle={{
              width: responsiveWidth(80),
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: responsiveFontSize(4),
          }}>
          <View
            style={{
              width: '90%',
              height: responsiveFontSize(0.1),
              backgroundColor: '#BDBDBD',
            }}
          />
        </View>
        <View
          style={{
            width: '82%',
            alignSelf: 'center',
          }}>
          <MyText
            size={responsiveFontSize(1.8)}
            fw={'normal'}
            color={'#5c5c5c'}
            decoration={'none'}
            Label={'Mot de passe'}
          />
          <InputField
            inputType="password"

            error={!fields.password && submit}
            getValue={v => getValue('password', v)}
            password={!isShowPass}
            placeHolder="*******"
            smallCaps={true}
            color="grey"
            value={fields.password}
            rightIcon={() => {
              if (isShowPass) {
                return (
                  <Image
                    style={styles.eye}
                    source={require('../../../assets/openeye.png')}
                  />
                );
              } else {
                return (
                  <Image
                    style={styles.eye}
                    source={require('../../../assets/Eyeoff.png')}
                  />
                );
              }
            }}
            onPressRghtIcon={() => setisShowPass(prev => !prev)}
          />
        </View>
        <TouchableOpacity onPress={()=>{
          setshow(true)
        }} >

          <View style={{
            width: '82%',
            alignSelf: 'center',
            marginTop: 10
          }}>
            <Text style={{ color: colors.themeblue, fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>Supprimer mon compte</Text>
          </View>
        </TouchableOpacity>
        {/* <View
        style={{
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',

          // paddingTop: responsiveFontSize(tablet ? 13.5 : 10.5),
          position: 'absolute',
          bottom: responsiveFontSize(10),
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            color: 'black',
            textAlign: 'center',
            fontWeight: '900',
          }}>
          {' '}
          Aller aux conditions générales de vente
        </Text>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'center',
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../../assets/logo.png')}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(1.5),
              color: 'gray',
              textAlign: 'center',
            }}>
            {' '}
            © <Text>2022</Text>
          </Text>
        </View>
      </View> */}
        <View style={{ height: responsiveFontSize(30) }} />
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
