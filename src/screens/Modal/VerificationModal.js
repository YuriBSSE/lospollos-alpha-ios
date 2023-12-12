// @ts-nocheck
import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  TextInput,
  ActivityIndicator,
  Modal,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import IconCross from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import deviceInfo from 'react-native-device-info';
import Heading from '../../components/Heading';
import {setActive} from 'react-native-sound';
import colors from '../../assets/colors/colors';

const tablet = deviceInfo.isTablet();

const Verfication = ({ModalState, ChangeModalState, callBack, navigation}) => {
  const [active, onChangeActive] = useState('');

  const activeFunction = a => {
    onChangeActive(a);
  };

  return (
    <>
      <StatusBar hidden={true} />

      <Modal
        animationType="fade"
        transparent={true}
        visible={ModalState}
        statusBarTranslucent={false}
        style={{flex: 1, justifyContent: 'center', elevation: 5}}
        onRequestClose={() => {
          ChangeModalState(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground
              resizeMode="cover"
              style={{
                height: 250,
                width: 200,
              }}
              source={require('../../assets/recycleBlur.png')}>
              <Image
                resizeMode="contain"
                style={{height: 200, width: 200}}
                source={require('../../assets/recycle.png')}
              />
            </ImageBackground>
            <View
              style={{
                height: responsiveFontSize(20),
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Heading
                width={'90%'}
                color={'black'}
                align={'center'}
                fontWeight={'500'}
                text="Avez vous vérifié vos indésirables ?"
              />
              <Heading
                width={'80%'}
                color={'black'}
                fontsize={responsiveFontSize(2)}
                align={'center'}
                fontWeight={'500'}
                text="Si le mail de confirmation ne s’y trouve pas :"
              />
            </View>
            <View
              style={{
                height: responsiveFontSize(20),
                width: '100%',
                flexDirection: 'row',
                // backgroundColor:'red',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => {
                  callBack('email');
                  activeFunction('first');
                }}
                activeOpacity={0.9}
                style={{
                  width: '43%',
                  height: responsiveFontSize(15),
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveFontSize(15),
                    borderRadius: responsiveFontSize(2),
                    borderWidth: 1,
                    borderColor: '#e8e8e8',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor:
                      active == 'first' ? colors.themeblue : 'white',
                    elevation: 5,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    paddingVertical: responsiveFontSize(1),
                  }}>
                  <Image
                    source={
                      active == 'first'
                      ? require('../../assets/letter.png')
                      : require('../../assets/letterblack.png')
                    }
                  />
                  <Heading
                    width={'70%'}
                    color={active == 'first' ? 'white' : colors.themeblue}
                    fontsize={responsiveFontSize(1.2)}
                    align={'center'}
                    fontWeight={'500'}
                    text="Envoyer un e-mail"
                  />
                  <Heading
                    width={'90%'}
                    color={active == 'first' ? 'white' : 'black'}
                    fontsize={responsiveFontSize(1.2)}
                    align={'center'}
                    fontWeight={'400'}
                    text="Recevez un e-mail contenant un code"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  callBack('sms');
                  activeFunction('second');
                }}
                activeOpacity={0.9}
                style={{
                  width: '43%',
                  height: responsiveFontSize(15),
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveFontSize(15),
                    borderRadius: responsiveFontSize(2),
                    borderWidth: 1,
                    borderColor: '#e8e8e8',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor:
                      active == 'second' ? colors.themeblue : 'white',
                    elevation: 5,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    paddingVertical: responsiveFontSize(1),
                  }}>
                  <Image
                    source={
                      active == 'second'
                        ? require('../../assets/Vectorwhite.png')
                        : require('../../assets/Vector.png')
                    }
                  />
                  <Heading
                    width={'70%'}
                    color={active == 'second' ? 'white' : colors.themeblue}
                    fontsize={responsiveFontSize(1.2)}
                    align={'center'}
                    fontWeight={'500'}
                    text="Envoyer un SMS"
                  />
                  <Heading
                    width={'90%'}
                    color={active == 'second' ? 'white' : 'black'}
                    fontsize={responsiveFontSize(1.2)}
                    align={'center'}
                    fontWeight={'400'}
                    text="Recevez un SMS contenant un code"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate('ourrest')} >
              <Text
                          style={{
                            fontWeight: '700',
                            color: colors.themeblue,
                            textDecorationStyle: 'solid',
                            textDecorationLine: 'underline',
                          }}>
                          Contacter Los Pollos
                        </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    justifyContent: 'space-between',
    top: 0,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'red',
    alignSelf: 'center',
    width: responsiveWidth(80),
  },
  textMain: {
    width: responsiveWidth(50),
    // marginVertical: 5,
    // backgroundColor:'red',
    left: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 100,
  },
  tableTestMain: {
    width: responsiveWidth(50),
    left: responsiveFontSize(1),
    top: responsiveFontSize(1),
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 80,
    // backgroundColor:'red'
  },
  textInputStyle: {
    width: responsiveWidth(50),
    backgroundColor: 'white',
    borderRadius: responsiveFontSize(0.6),
    paddingLeft: 10,
    fontSize: tablet ? responsiveFontSize(1) : responsiveFontSize(1.6),
    // elevation: 2,
    borderColor: 'grey',
    borderWidth: 0.6,
    height: responsiveHeight(5.7),
  },
  mainImage: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'flex-start',
    height: responsiveHeight(15),
    alignSelf: 'center',
    marginTop: 5,
    zIndex: 30,
  },
  imageCon: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'center',
    height: responsiveHeight(8),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  datePicker: {
    backgroundColor: 'white',
    width: responsiveWidth(36),
    height: responsiveHeight(4.5),
    borderRadius: responsiveFontSize(0.5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    justifyContent: 'center',
  },
  buttons: {
    backgroundColor: '#010b40',
    width: responsiveWidth(37),
    height: responsiveHeight(4.6),
    borderRadius: responsiveFontSize(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButton: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'center',
    height: responsiveHeight(6),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  bottomButton: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'flex-start',
    height: responsiveHeight(6),
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: 5,
  },
  innerSmallContainer: {
    // top: 5,
    justifyContent: 'center',
    // left: 5,
    flexDirection: 'column-reverse',
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    height: responsiveHeight(7),
    width: responsiveWidth(18),
  },
  bottomInnerComponent: {
    flexDirection: 'row',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: responsiveHeight(4),
    width: responsiveWidth(38),
    left: 5,
  },
  headerComponent: {
    width: responsiveWidth(50),
    // height: responsiveHeight(12),
    left: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  // middleComponent: {
  //   width: responsiveWidth(90),
  //   height: responsiveHeight(10),
  //   // backgroundColor:'yellow',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor:'green'
  // },
  imageContainer: {
    width: responsiveHeight(13),
    height: responsiveHeight(13),
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  image: {
    width: responsiveHeight(12),
    height: responsiveHeight(12),
    borderRadius: 10,
  },
  mainSmallContainers: {
    width: responsiveWidth(80),
    height: responsiveHeight(10),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainSmallContainersSubs: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 8,
    // zIndex: 10
    // backgroundColor:'red'
  },
  outerSmallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // margin: 10,
    width: responsiveWidth(82),
  },
  smallContainer: {
    backgroundColor: '#010b40',
    width: responsiveWidth(18),
    height: responsiveHeight(8),

    borderRadius: responsiveFontSize(0.5),

    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    // elevation: 2,
  },
  touchableSmallContainer: {
    backgroundColor: 'white',
    width: responsiveWidth(22),
    height: responsiveHeight(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
    // backgroundColor: 'black',
    // opacity: 0.9,
  },
  modalView: {
    opacity: 1,
    width: responsiveScreenWidth(90),
    // height: responsiveScreenHeight(55),
    margin: 10,
    // justifyContent:'center',
    // alignContent:'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

function mapStateToProps({authRed}) {
  return {
    authRed,
  };
}

export default Verfication;
