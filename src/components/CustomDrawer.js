import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { CommonActions } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ShopIcon from 'react-native-vector-icons/Entypo';
import EarningIcon from 'react-native-vector-icons/FontAwesome5';
import PurchasesIcon from 'react-native-vector-icons/FontAwesome5';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import colors from '../assets/colors/colors';
import InfluencerIcon from 'react-native-vector-icons/Entypo';
import UpDownIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import * as authAct from '../store/actions/authAct';
import deviceInfo from "react-native-device-info";
import EventIcon from "react-native-vector-icons/MaterialIcons"
import LiveSessionModal from '../screens/home/brand/LiveSession';

const tablet = deviceInfo.isTablet()

function CustomDrawerContent({ logOut, authRed }) {
  const navigation = useNavigation();
  const [settingOpen, setSettingOpen] = useState(false);
  const [infSetOpen, setInfSetOpen] = useState(false);
  const [live, setLive] = useState(false)

  const [isProfilesettingOpen, setIsProfilesettingOpen] = useState(false)


  function renderInfSetUp() {
    return (
      <View style={{ paddingLeft: responsiveFontSize(4) }}>
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
    )
  }
  function renderSettingDetails() {
    return (
      <View style={styles.settingDetails}>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('basicSetup')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Basic Setup</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('BioShop')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Bioshop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MarketPlace')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>MarketPlace</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => setLive(true)}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>GoLive</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('host')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Host</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => setInfSetOpen(!infSetOpen)}
          style={{ ...styles.settingDetailsItem, flexDirection: 'row' }}
        >
          <Text style={styles.text}>Setup</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <UpDownIcon
              style={{
                // marginLeft: responsiveFontSize(1),
                marginRight: responsiveFontSize(tablet ? 0.75 : 0.5)
              }}
              name={infSetOpen ? 'up' : 'down'}
              size={responsiveFontSize(tablet ? 1.5 : 2.5)}
              color={false ? '#000000' : colors.lightGray}
            />
          </View>
        </TouchableOpacity>
        {infSetOpen ? renderInfSetUp() : null}
        {/* <TouchableOpacity style={styles.settingDetailsItem}>
          <Text>Subscription Setup</Text>
        </TouchableOpacity> */}
      </View>
    );
  }

  function renderSettingOpions() {
    return (
      <View style={styles.settingDetails}>
        <TouchableOpacity
          onPress={() => navigation.navigate('basicSetup')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('changePassword')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('delete')}
          style={styles.settingDetailsItem}>
          <Text style={styles.text}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingDetailsItem}
          onPress={() => navigation.navigate("shippingAddress")}>
          <Text
            style={styles.text}>
            Shipping Address
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {live && <LiveSessionModal
        visible={live}
        closeModle={() => setLive(false)}
      />}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('shop');
        }}
        style={{ ...styles.item, marginTop: responsiveFontSize(0.25) }}>
        <ShopIcon
          style={[{ marginLeft: responsiveFontSize(1) }, tablet && styles.iconWidth]}
          name="shopping-bag"
          size={responsiveFontSize(tablet ? 1.5 : 2.5)}
          color={false ? '#000000' : colors.lightGray}
        />
        <Text
          style={{
            marginLeft: responsiveFontSize(1),
            fontSize: responsiveFontSize(tablet ? 1 : 1.6),
          }}>
          Shop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('purchase');
        }}>
        <PurchasesIcon
          style={[{
            marginLeft: responsiveFontSize(1)
          }, tablet && styles.iconWidth]}
          name="money-check"
          size={responsiveFontSize(tablet ? 1.5 : 2)}
          color={false ? '#000000' : colors.lightGray}
        />
        <Text
          style={{
            marginLeft: responsiveFontSize(1),
            fontSize: responsiveFontSize(tablet ? 1 : 1.6),
          }}>
          Purchases
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate("shippingAddress");
        }}>
        <ShippingAddIcon
          style={[{
            marginLeft: responsiveFontSize(1)
          }, tablet && styles.iconWidth]}
          name="address-card"
          size={responsiveFontSize(tablet ? 1.5 : 2)}
          color={false ? '#000000' : colors.lightGray}
        />
        <Text
          style={{
            marginLeft: responsiveFontSize(1),
            fontSize: responsiveFontSize(tablet ? 1 : 1.6),
          }}>
          Shipping Address
        </Text>
      </TouchableOpacity> */}
      {authRed.data?.account_type == 'customer' ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BioShop');
          }}
          style={{ ...styles.item, marginTop: responsiveFontSize(0.25) }}>
          <InfluencerIcon
            style={[{
              marginLeft: responsiveFontSize(1),
            }, tablet && styles.iconWidth]}
            name="user"
            size={responsiveFontSize(tablet ? 1.5 : 2.5)}
            color={false ? '#000000' : colors.lightGray}
          />
          <Text
            style={{
              marginLeft: responsiveFontSize(1),
              fontSize: responsiveFontSize(tablet ? 1 : 1.6),
            }}>
            Become an influencer
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('earning');
            }}
            style={styles.item}>
            <EarningIcon
              style={[{
                marginLeft: responsiveFontSize(1),
              }, tablet && styles.iconWidth]}
              name="money-check-alt"
              size={responsiveFontSize(tablet ? 1.5 : 2)}
              color={false ? '#000000' : colors.lightGray}
            />
            <Text
              style={{
                marginLeft: responsiveFontSize(1),
                fontSize: responsiveFontSize(tablet ? 1 : 1.6),
              }}>
              Earning Reports
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate('balance')
            }}>
            <BalanceIcon
              style={[{
                marginLeft: responsiveFontSize(1)
              }, tablet && styles.iconWidth]}
              name="wallet"
              size={responsiveFontSize(tablet ? 1.5 : 2.5)}
              color={false ? '#000000' : colors.lightGray}
            />
            <Text
              style={{
                marginLeft: responsiveFontSize(1),
                fontSize: responsiveFontSize(tablet ? 1 : 1.6),
              }}>
              Balance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSettingOpen(!settingOpen)}
            style={styles.item}>
            <InfluencerSetupIcon
              style={[{
                marginLeft: responsiveFontSize(1),
              }, tablet && styles.iconWidth]}
              name="gears"
              size={responsiveFontSize(tablet ? 1.5 : 2.5)}
              color={false ? '#000000' : colors.lightGray}
            />
            <Text
              style={{
                marginLeft: responsiveFontSize(1),
                fontSize: responsiveFontSize(tablet ? 1 : 1.6),
              }}>
              Influencer Section
            </Text>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <UpDownIcon
                style={{
                  marginLeft: responsiveFontSize(1),
                  marginRight: responsiveFontSize(1)
                }}
                name={settingOpen ? 'up' : 'down'}
                size={responsiveFontSize(tablet ? 1.5 : 2.5)}
                color={false ? '#000000' : colors.lightGray}
              />
            </View>
          </TouchableOpacity>
        </>
      )}
      {settingOpen ? renderSettingDetails() : null}
      <TouchableOpacity
        onPress={() => setIsProfilesettingOpen(!isProfilesettingOpen)}
        style={styles.item}>
        <SettingIcon
          style={[{
            marginLeft: responsiveFontSize(1),
          }, tablet && styles.iconWidth]}
          name="settings"
          size={responsiveFontSize(tablet ? 1.5 : 2.5)}
          color={false ? '#000000' : colors.lightGray}
        />
        <Text
          style={{
            marginLeft: responsiveFontSize(1),
            fontSize: responsiveFontSize(tablet ? 1 : 1.6),
          }}>
          Settings
        </Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <UpDownIcon
            style={{
              marginLeft: responsiveFontSize(1),
              marginRight: responsiveFontSize(1)
            }}
            name={isProfilesettingOpen ? 'up' : 'down'}
            size={responsiveFontSize(tablet ? 1.5 : 2.5)}
            color={false ? '#000000' : colors.lightGray}
          />
        </View>
      </TouchableOpacity>
      {isProfilesettingOpen ? renderSettingOpions() : null}
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('events')
        }}>
        <EventIcon
          style={[{
            marginLeft: responsiveFontSize(1)
          }, tablet && styles.iconWidth]}
          name="event"
          size={responsiveFontSize(tablet ? 1.5 : 2.5)}
          color={false ? '#000000' : colors.lightGray}
        />
        <Text
          style={{
            marginLeft: responsiveFontSize(1),
            fontSize: responsiveFontSize(tablet ? 1 : 1.6),
          }}>
          Event Hosting
        </Text>
      </TouchableOpacity>
      {authRed?.success ? (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'Home' }],
            // })
            // navigation.reset({
            //   index: 1,
            //   routes: [
            //     { name: 'Menu' }
            //   ],
            // })
            // logOut().then(() => { });
            navigation.navigate('contactus');
            // navigation.navigate("Home",{screen:'category'})
          }}>
          <LogoutIcon
            style={[{
              marginLeft: responsiveFontSize(1)
            }, tablet && styles.iconWidth]}
            name="customerservice"
            size={responsiveFontSize(tablet ? 1.5 : 2.5)}
            color={false ? '#000000' : colors.lightGray}
          />
          <Text
            style={{
              marginLeft: responsiveFontSize(1),
              fontSize: responsiveFontSize(tablet ? 1 : 1.6),
            }}>
            Contact Us
          </Text>
        </TouchableOpacity>
      ) : null}
      {authRed?.success ? (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'Home' }],
            // })
            // navigation.reset({
            //   index: 1,
            //   routes: [
            //     { name: 'Menu' }
            //   ],
            // })
            logOut().then(() => { });
            // navigation.navigate("Home",{screen:'category'})
          }}>
          <LogoutIcon
            style={[{
              marginLeft: responsiveFontSize(1)
            }, tablet && styles.iconWidth]}
            name="logout"
            size={responsiveFontSize(tablet ? 1.5 : 2.5)}
            color={false ? '#000000' : colors.lightGray}
          />
          <Text
            style={{
              marginLeft: responsiveFontSize(1),
              fontSize: responsiveFontSize(tablet ? 1 : 1.6),
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      ) : null}

      {/* <TouchableOpacity
      disabled
        style={{ ...styles.item, marginTop: responsiveFontSize(0.25) }}>
        <VerIcon
          style={{
            marginLeft: responsiveFontSize(1),
          }}
          name="versions"
          size={responsiveFontSize(tablet ? 1.5 : 2.5)}
          color={false ? '#000000' : colors.lightGray}
        />
        <Text
          style={{
            marginLeft: responsiveFontSize(1),
            fontSize: responsiveFontSize(tablet ? 1 : 1.6),
            color:'gray'
          }}>
          App version {deviceInfo.getVersion()}
        </Text>
      </TouchableOpacity> */}
      <View style={{ flex: 1, justifyContent: 'flex-end', paddingTop: responsiveFontSize(tablet ? 13.5 : 10.5) }}>
        <Text style={{ fontSize: responsiveFontSize(tablet ? 1 : 1.5), color: 'gray', textAlign: 'center' }}> © <Text>2022 KonnectBio Inc. | All rights reserved</Text></Text>
        <Text style={{ fontSize: responsiveFontSize(tablet ? 1 : 1.5), color: 'gray', textAlign: 'center' }}> App version {deviceInfo.getVersion()}</Text>
      </View>
    </View>
  );
}

function mapStateToProps({ authRed }) {
  return { authRed };
}

export default connect(mapStateToProps, { ...authAct })(CustomDrawerContent);

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
    backgroundColor: 'white',
    paddingLeft: responsiveFontSize(6),
  },
  settingDetailsItem: {
    padding: responsiveFontSize(tablet ? 0.5 : 1),
  },
  text: {
    fontSize: responsiveFontSize(tablet ? 0.85 : 1.6),
  },
  iconWidth: {
    width: "4%",
  }
});