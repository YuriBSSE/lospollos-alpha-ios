// import { View, Text } from 'react-native'
// import React from 'react'

// export default function LegalNotice() {
//   return (
//     <View>
//       <Text>LegalNotice</Text>
//     </View>
//   )
// }

// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {CommonActions} from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ShopIcon from 'react-native-vector-icons/Entypo';
import EarningIcon from 'react-native-vector-icons/FontAwesome5';
import PurchasesIcon from 'react-native-vector-icons/FontAwesome5';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import colors from '../../../assets/colors/colors';

import UpDownIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';

export default function LegalNotice({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeblue} />
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
            style={{marginLeft: responsiveFontSize(2)}}
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
            Mentions légales
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: responsiveFontSize(2),
          width: '80%',
          alignSelf: 'center',

          height: responsiveFontSize(60),
          justifyContent: 'space-around',
        }}>
        <MyText
          size={responsiveFontSize(2)}
          fw={'normal'}
          color={'black'}
          decoration={'none'}
          Label={'Mentions légales'}
        />
        {/* <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.3),
            fontWeight: 'bold',
          }}>
          Conditions générales de vente
        </Text> */}

        <Text style={styles.texta}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
          blandit nulla.
        </Text>
        <Text style={styles.texta}>
          Sed a lacinia dui. Fusce finibus lorem ac mi venenatis, vitae pretium
          ligula cursus. Etiam mollis consectetur cursus. Mauris quis
          condimentum tortor. Integer hendrerit consequat malesuada. Vestibulum
          malesuada blandit nunc.
        </Text>
        <Text style={styles.texta}>
          Nunc non ultricies turpis. Suspendisse convallis convallis pulvinar.
          In dictum, nisi a porttitor vestibulum, quam ante eleifend tortor, eu
          tristique ex mi commodo risus. Nulla ut elit erat. Nam sit amet ligula
          volutpat, luctus metus non, tincidunt odio.
        </Text>
        <Text style={styles.texta}>
          Mauris orci nunc, scelerisque vel mattis sed, efficitur quis odio.
          Cras lorem elit, aliquet sit amet turpis eu, laoreet tincidunt ligula.
        </Text>
        <Text style={styles.texta}>
          Proin ultricies, mi ut luctus elementum, massa nulla ultrices nibh,
          malesuada dictum justo sem ut lorem. Nulla convallis fringilla mi, ac
          ullamcorper urna vehicula vel.
        </Text>
      </View>

      <View
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
      </View>
    </View>
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
    width:'100%'
  },
});
