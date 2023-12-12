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
  ScrollView,
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
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import colors from '../../../assets/colors/colors';
import InfluencerIcon from 'react-native-vector-icons/Entypo';
import UpDownIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import BackBtnHeader from '../../../components/BackBtnHeader';
// import LiveSessionModal from '../screens/home/brand/LiveSession';

const tablet = deviceInfo.isTablet();

function UserFlow({logOut, authRed}) {
  const navigation = useNavigation();
  const [settingOpen, setSettingOpen] = useState(false);
  const [infSetOpen, setInfSetOpen] = useState(false);
  const [live, setLive] = useState(false);

  const [isProfilesettingOpen, setIsProfilesettingOpen] = useState(false);

  function renderInfSetUp() {
    return (
      <View style={{paddingLeft: responsiveFontSize(4)}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('categorySetup')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Category Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('connectionSetup')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Connection Setup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('paypalEmail')}
          style={styles.settingDetailsItem}>
          {/* <Text style={styles.text}>Paypal Email (Receive Payments)</Text> */}
          <Text style={styles.text}>Payment Setup</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderSettingDetails() {
    return (
      <View style={styles.settingDetails}>
        <TouchableOpacity onPress={()=> navigation.navigate('legalNotice')} style={styles.settingDetailsItem}>
          <Text style={styles.text}>Mentions légales</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('term')} style={styles.settingDetailsItem}>
          <Text style={styles.text}>Conditions générales de vente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderSettingOpions() {
    return (
      <View style={styles.settingDetails}>
      <TouchableOpacity onPress={()=> navigation.navigate('profileInfo')} style={styles.settingDetailsItem}>
        <Text style={styles.text}>Mon profil</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> navigation.navigate('houseInfo')} style={styles.settingDetailsItem}>
        <Text style={styles.text}>Maison</Text>
      </TouchableOpacity>
    </View>
    );
  }

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
                    <View
                        style={{
                            top: responsiveFontSize(2),
                            height: 50,
                            position: 'absolute',
                            width: '100%',
                        }}>
                        <BackBtnHeader
                            left={false}
                            cross={true}
                            text={'Mon compte'}
                            odd={true}
                            call={() => navigation.goBack()}
                        />
                    </View>
                </View>
      {/* <View
        style={{
          backgroundColor: colors.themeblue,
          width: '100%',
          height: responsiveFontSize(8),
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <HomeIcon
          style={{marginLeft: responsiveFontSize(2)}}
          name="close"
          size={responsiveFontSize(2.5)}
          color={'white'}
        />
        <MyText
          style={{marginLeft: responsiveFontSize(2)}}
          size={responsiveFontSize(2.5)}
          fw={'bold'}
          color={'white'}
          decoration={'none'}
          Label={'Mon compte'}
        />
      </View> */}
      <ScrollView>
      <TouchableOpacity
         onPress={() => setInfSetOpen(!infSetOpen)}
        style={{...styles.item, marginTop: responsiveFontSize(0.25)}}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: responsiveFontSize(7),
            height: responsiveFontSize(7),
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../../assets/boxShadow.png')}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/2.png')}
          />
        </ImageBackground>
        <MyText
          style={{marginLeft: responsiveFontSize(2)}}
          size={responsiveFontSize(2)}
          fw={'bold'}
          color={'black'}
          decoration={'none'}
          Label={'Mes informations'}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <EvilIcons
            style={{
              marginLeft: responsiveFontSize(1),
              marginRight: responsiveFontSize(1),
            }}
            name={infSetOpen ? 'chevron-down' : 'chevron-right'}
            size={responsiveFontSize(5)}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
      {infSetOpen ? renderSettingOpions() : null}
      <TouchableOpacity
        onPress={()=> navigation.navigate('paymentmethod')}
        style={{...styles.item, marginTop: responsiveFontSize(0.25)}}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: responsiveFontSize(7),
            height: responsiveFontSize(7),
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../../assets/boxShadow.png')}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/11.png')}
          />
        </ImageBackground>
        <MyText
          style={{marginLeft: responsiveFontSize(2)}}
          size={responsiveFontSize(2)}
          fw={'bold'}
          color={'black'}
          decoration={'none'}
          Label={'Mes moyens de paiement'}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <EvilIcons
            style={{
              marginLeft: responsiveFontSize(1),
              marginRight: responsiveFontSize(1),
            }}
            name={isProfilesettingOpen ? 'chevron-down' : 'chevron-right'}
            size={responsiveFontSize(5)}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('orderscreen')}
        style={{...styles.item, marginTop: responsiveFontSize(0.25)}}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: responsiveFontSize(7),
            height: responsiveFontSize(7),
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../../assets/boxShadow.png')}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/4.png')}
          />
        </ImageBackground>
        <MyText
          style={{marginLeft: responsiveFontSize(2)}}
          size={responsiveFontSize(2)}
          fw={'bold'}
          color={'black'}
          decoration={'none'}
          Label={'Mes commandes'}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <EvilIcons
            style={{
              marginLeft: responsiveFontSize(1),
              marginRight: responsiveFontSize(1),
            }}
            name={isProfilesettingOpen ? 'chevron-down' : 'chevron-right'}
            size={responsiveFontSize(5)}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=> navigation.navigate('ourresturant')}
        style={{...styles.item, marginTop: responsiveFontSize(0.25)}}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: responsiveFontSize(7),
            height: responsiveFontSize(7),
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../../assets/boxShadow.png')}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/5.png')}
          />
        </ImageBackground>
        <MyText
          style={{marginLeft: responsiveFontSize(2)}}
          size={responsiveFontSize(2)}
          fw={'bold'}
          color={'black'}
          decoration={'none'}
          Label={'Notre restaurant'}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <EvilIcons
            style={{
              marginLeft: responsiveFontSize(1),
              marginRight: responsiveFontSize(1),
            }}
            name={isProfilesettingOpen ? 'chevron-down' : 'chevron-right'}
            size={responsiveFontSize(5)}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSettingOpen(!settingOpen)}
        style={{...styles.item, marginTop: responsiveFontSize(0.25)}}>
        <ImageBackground
          resizeMode="contain"
          style={{
            width: responsiveFontSize(7),
            height: responsiveFontSize(7),
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../../assets/boxShadow.png')}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/3.png')}
          />
        </ImageBackground>
        <MyText
          style={{marginLeft: responsiveFontSize(2)}}
          size={responsiveFontSize(2)}
          fw={'bold'}
          color={'black'}
          decoration={'none'}
          Label={'Nos clauses'}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <EvilIcons
            style={{
              marginLeft: responsiveFontSize(1),
              marginRight: responsiveFontSize(1),
            }}
            name={settingOpen ? 'chevron-down' : 'chevron-right'}
            size={responsiveFontSize(5)}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
      {settingOpen ? renderSettingDetails() : null}
      <View style={{height: responsiveFontSize(14)}} />
      </ScrollView>

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
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-end',
            alignSelf: 'center',
          }}>
          <Image style={{width: 50, height: 50}} source={require('../../../assets/logo.png')} />
          <Text
            style={{
              fontSize: responsiveFontSize(tablet ? 1 : 1.5),
              color: 'gray',
              textAlign: 'center',
            }}>
            {' '}
            © <Text>2022</Text>
          </Text>
        </View>
        <TouchableOpacity>
        <Text
          style={{
            fontSize: responsiveFontSize(tablet ? 1 : 2),
            color: colors.themeblue,
            textAlign: 'center',
            fontWeight:'900'
          }}>
          {' '}
          Se déconnecter 
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mapStateToProps({authRed}) {
  return {authRed};
}

export default connect(null, null)(UserFlow);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveFontSize(tablet ? 0.25 : 0.5),
    // height: responsiveHeight(6.5),
    paddingVertical: responsiveFontSize(tablet ? 1 : 2),
    backgroundColor: 'white',
    marginTop: responsiveFontSize(tablet ? 0.125 : 0.25),
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#001441'
  },
  settingDetails: {
    // backgroundColor: 'white',
    marginTop: -12,
    paddingLeft: responsiveFontSize(12),
  },
  settingDetailsItem: {
    padding: responsiveFontSize(tablet ? 0.5 : 1),
  },
  text: {
    fontSize: responsiveFontSize(tablet ? 0.85 : 1.8),
    color: 'gray',
  },
  iconWidth: {
    width: '4%',
  },
});
