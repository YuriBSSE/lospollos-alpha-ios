// @ts-nocheck
import React, {useState, useEffect, useMemo, useContext, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
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
  SafeAreaView,
  Platform,
  PanResponder,
  Animated
} from 'react-native';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Heading from '../../../components/Heading';
import Btn from '../../../components/Btn';
import * as Actions from '../../../store/actions/authAct';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../assets/colors/colors';
import {  useScrollToTop } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import deviceInfo from 'react-native-device-info';
// import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';
let {width, height} = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
  checkStyle.transform = [{scaleX: 0.7}, {scaleY: 0.7}];
}
const tablet = deviceInfo.isTablet();
const Details = ({navigation}) => {
  const [value, onChangeValue] = useState(0);
  const ref = React.useRef(null);
  const data = [
    {id: 1, image: require('../../../assets/image20.png')},
    {id: 2, image: require('../../../assets/image32.png')},
    {id: 3, image: require('../../../assets/image33.png')},
    {id: 4, image: require('../../../assets/image34.png')},
    {id: 5, image: require('../../../assets/image35.png')},
    {id: 6, image: require('../../../assets/image36.png')},
  ];



  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e, g) => {
        console.log(g)
        if(g.vy > 0){
          return  true
        }else{
          return  false
        }
   
      },
      onPanResponderGrant: () => {
       
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: (e,state) => {
        // console.log(state,"====")
        if(Number(state.dy)>200){
          navigation.goBack()
          // alert("dd")
        }else{
          pan.setValue({x:0,y:0})
        }
        pan.flattenOffset();
       

      }
    })
  ).current;

 

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={{backgroundColor: colors.themeblue}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: responsiveHeight(10),
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                style={{paddingTop: 20}}
                name="md-chevron-back-sharp"
                size={responsiveFontSize(3)}
                color={'white'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                style={{paddingTop: 20}}
                name="heart-outline"
                size={responsiveFontSize(3)}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
          <Animated.View
            style={{
              width: '20%',
              height: 5,
              borderRadius: 10,
              backgroundColor: 'white',
              alignSelf: 'center',
              bottom: 10,
              opacity:pan.y.interpolate({inputRange:[0,200],outputRange:[1,0]}),
              transform: [ { translateY: pan.y.interpolate({inputRange:[0,200],outputRange:[0,200]}) }]
            }}
            {...panResponder.panHandlers}
          />
          <Animated.View
            style={{
              height: responsiveHeight(90),
              width: '100%',
              backgroundColor: 'white',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              opacity:pan.y.interpolate({inputRange:[0,200],outputRange:[1,0]}),
              transform: [ { translateY: pan.y.interpolate({inputRange:[0,200],outputRange:[0,200]}) }]
            }}
            {...panResponder.panHandlers}
            >
            <View
              style={{
                width: '78%',
                height: responsiveFontSize(32.5),
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: responsiveFontSize(5),
                backgroundColor: 'white',
                borderRadius: responsiveFontSize(2),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

            
              }}>
              <Image
                // resizeMode='contain'
                // resizeMethod='auto'
                style={{
                  // width: '78%',
                  width: '100%',
                  height: responsiveFontSize(32.5),
                  alignSelf: 'center',
                  shadowColor: '#000',
                  borderRadius: 12,
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                 
                }}
                source={require('../../../assets/large.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 12,
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                height: responsiveFontSize(40),
                width: '100%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  width: '78%',
                  alignSelf: 'center',
                  // backgroundColor: 'blue',
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    width: '65%',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '800',
                      fontSize: responsiveFontSize(2.6),
                    }}
                    numberOfLines={2}>
                    Poulet braisé entier
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '400',
                      fontSize: responsiveFontSize(2),
                    }}>
                    Info ?
                  </Text>
                  <Text
                    style={{
                      color: '#F7BE00',
                      fontWeight: '700',
                      fontSize: responsiveFontSize(2.5),
                    }}>
                    X €
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: responsiveFontSize(7),
                    width: '30%',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (value >= 1) {
                        onChangeValue(value - 1);
                      }
                    }}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 10,
                      backgroundColor: '#BDBDBD',
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 5,
                    }}>
                    <Ionicons
                      name="md-remove-outline"
                      size={responsiveFontSize(3)}
                      color={'white'}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2.4),
                      fontWeight: 'bold',
                      color: '#BDBDBD',
                    }}>
                    {value}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      onChangeValue(value + 1);
                    }}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 10,
                      backgroundColor: '#F7BE00',
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 5,
                    }}>
                    <Ionicons
                      name="add"
                      size={responsiveFontSize(3)}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: '78%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    height: responsiveFontSize(15),
                    // backgroundColor: 'red',
                  }}
                  numberOfLines={6}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </View>
              <View
                style={{
                  height: responsiveFontSize(3),
                  width: '78%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2),
                    fontWeight: '800',
                  }}>
                  Ingredients
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  height: responsiveFontSize(12),
                  width: '100%',
                  alignSelf: 'center',
                }}>
                {/* <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2),
                    fontWeight: '800',
                  }}>
                  Ingredients
                </Text> */}
                <FlatList
                  horizontal={true}
                  data={data}
                  contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: responsiveScreenFontSize(5),
                  }}
                  ListFooterComponent={<View style={{width: 100}} />}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        key={index}
                        style={{
                          height: responsiveFontSize(7),
                          width: responsiveFontSize(7),
                          backgroundColor: '#F7F7F7',

                          borderRadius: responsiveFontSize(1),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginHorizontal: responsiveFontSize(0.7),
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,

                          elevation: 2,
                        }}>
                        <Image
                          style={{width: 25, height: 25}}
                          resizeMode="contain"
                          source={item.image}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
// export default Login

export default Details;
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
    marginTop: responsiveFontSize(4),
    alignItems: 'center',
  },
  ctn2: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
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
