// @ts-nocheck
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,

  responsiveWidth
} from 'react-native-responsive-dimensions';
import deviceInfo from 'react-native-device-info';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
const tablet = deviceInfo.isTablet();

const HostEventComp = ({title, start_date, banner, prodHost, onPressEvent}) => {
  useEffect(() => {}, []);

  return (
    <>
         
      <TouchableOpacity onPress={() => onPressEvent()} style={styles.eventBox}>
        {/* <View
          style={{
            paddingVertical: responsiveHeight(0.5),
            paddingHorizontal: '2%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(tablet ? 0.75 : 1.9),
              color: '#162b4c',
            }}>
            {title}
          </Text>
          <TimeDate
            data={moment(start_date).format('YYYY-MM-DD')}
            isDate={true}
          />
        </View> */}
        <View style={styles.content}>
          <View style={{
                 width: 140,
                 height: 160,
                 alignSelf: 'center',
               
                 borderTopLeftRadius: responsiveFontSize(1),
                 borderBottomLeftRadius: responsiveFontSize(1),
                 backgroundColor: '#010b40',
                 justifyContent:'center',alignItems:'center'
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: 140,
              height: 90,
              // top: 10,  
              justifyContent:'center',
              alignItems:"center",
              alignSelf: 'center',
              borderRadius: responsiveFontSize(1),
              backgroundColor: '#010b40',
            }}
            source={{
              uri: banner,
            }}
          />
          </View>
          <View style={styles.info}>
          <Text
            style={{
              fontSize: responsiveFontSize(tablet ? 0.75 : 1.9),
              color: '#162b4c',
            }}>
            {title}
          </Text>
       
            <View
              style={{
                height: responsiveHeight(15),
                // marginTop: 2,
                // backgroundColor:'red',
                justifyContent:'flex-start',
                paddingTop: responsiveFontSize(1),
                width: responsiveWidth(55)
              }}>
              {prodHost.map((item, i) => {
                return (
                  <View key={i}>
                    {item?.producer == 1 && (
                      <TextWithIcon
                        label="Producer"
                        value={item?.user_name}
                        icon="user"
                      />
                    )}
                    {item?.primary && (
                      <TextWithIcon
                        label="Primary"
                        value={item?.user_name}
                        icon="user"
                      />
                    )}
                    {item?.host1 && (
                      <TextWithIcon
                        label="Host1"
                        value={item?.user_name}
                        icon="user"
                      />
                    )}
                    {item?.host2 && (
                      <TextWithIcon
                        label="Host2"
                        value={item?.user_name}
                        icon="user"
                      />
                    )}
                    {item?.host3 && (
                      <TextWithIcon
                        label="Host3"
                        value={item?.user_name}
                        icon="user"
                      />
                    )}
                  </View>
                );
              })}
            </View>
            <View style={styles.timeCont}>
            <TimeDate
            data={moment(start_date).format('YYYY-MM-DD')}
            isDate={true}
          />
              <TimeDate data={moment(start_date).format('hh:mm A')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const TimeDate = ({data, isDate = false}) => {
  return (
    <View style={{flexDirection: 'row', alignContent: 'center'}}>
      <Icon
        color={'#162b4c'}
        name={isDate ? 'calendar' : 'clock-o'}
        size={responsiveFontSize(2)}
      />
      <Text
        style={{
          marginLeft: '2%',
          color: '#162b4c',
          fontSize: responsiveFontSize(tablet ? 0.7 : 1.5),
        }}>
        {data}
      </Text>
    </View>
  );
};

const TextWithIcon = ({label, value, icon}) => {
  return (
    <View style={styles.iconText}>
      <Icon color={'#162b4c'} name={icon} size={responsiveFontSize(2)} />
      <Text style={styles.text}>
        {label} : {value}
      </Text>
    </View>
  );
};

export default HostEventComp;

const styles = StyleSheet.create({
  eventBox: {
    width: '97%',
    borderRadius: responsiveFontSize(1),
    backgroundColor: 'white',
    marginBottom: '3%',
    alignContent: 'center',
    alignSelf: 'center',
    borderColor: colors.silver,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
    // paddingHorizontal: '2%',
  },
  text: {
    fontSize: responsiveFontSize(tablet ? 0.7 : 1.5),
    color: '#162b4c',
    marginBottom: responsiveHeight(0.2),
    marginLeft: '1%',
  },
  content: {
    flexDirection: 'row',
    // paddingVertical: responsiveHeight(1),
    paddingRight: '2%',

  },
  cover: {
    width: '30%',
    height: responsiveHeight(18),
    alignSelf: 'center',
    borderRadius: responsiveFontSize(0.5),
    backgroundColor: '#010b40',
  },
  info: {
    width: '65%',
    flexDirection: 'column',
    paddingLeft: '2%',
  },
  timeCont: {
    height: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    // marginRight: 10,
    position: 'absolute', bottom: 5,
    width: responsiveWidth(55),
    left: 6
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
