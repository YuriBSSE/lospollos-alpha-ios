// @ts-nocheck
import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
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
    Animated,
    StatusBar,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Heading from '../../components/Heading';
import Btn from '../../components/Btn';
import * as Actions from '../../store/actions/authAct';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/colors/colors';
import { useScrollToTop } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveScreenFontSize,
    responsiveWidth,
    responsiveScreenWidth,
    responsiveScreenHeight
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import deviceInfo from 'react-native-device-info';
import Toast from 'react-native-toast-message';
let { width, height } = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
    checkStyle.transform = [{ scaleX: 0.7 }, { scaleY: 0.7 }];
}
const tablet = deviceInfo.isTablet();

const ItemDetailModal = ({ ModalState, ChangeModalState, callBack }) => {
    const [active, onChangeActive] = useState('');
    const activeFunction = a => {
        onChangeActive(a);
    };
    const [value, onChangeValue] = useState(0);
    const ref = React.useRef(null);
    const data = [
        { id: 1, image: require('../../assets/image20.png') },
        { id: 2, image: require('../../assets/image32.png') },
        { id: 3, image: require('../../assets/image33.png') },
        { id: 4, image: require('../../assets/image34.png') },
        { id: 5, image: require('../../assets/image35.png') },
        { id: 6, image: require('../../assets/image36.png') },
    ];
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (e, g) => {
                console.log(g, "AHSAN")
                if (g.vy > 0) {
                    return true
                } else {
                    return false
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
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (e, state) => {
                console.log(state.dy, "SADASDA")
                if (Number(state.dy) > 200) {
                    ChangeModalState(false)
                } else {
                    pan.setValue({ x: 0, y: 0 })
                }
                pan.flattenOffset();
            }
        })
    ).current;

    const panResponderOpen = React.useRef(
        PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) =>
                true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
                true,

            onPanResponderGrant: (evt, gestureState) => {
                console.log(gestureState)
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!
                // gestureState.d{x,y} will be set to zero now
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log(gestureState)
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) =>
                true,
            onPanResponderRelease: (evt, gestureState) => {
                console.log(gestureState)
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
            },
            onPanResponderTerminate: (evt, gestureState) => {
                console.log(gestureState)
                // Another component has become the responder, so this gesture
                // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                console.log(gestureState)
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            }
        })
    ).current;



    return (
        <>
            <StatusBar hidden={true} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalState}
                statusBarTranslucent={false}
                presentationStyle='fullScreen'
                style={{ justifyContent: 'center', elevation: 5, }}
                onRequestClose={() => {
                    ChangeModalState(false);
                }}>
                <View style={[styles.centeredView, {}]}
                    onStartShouldSetResponderCapture={() => { return false }}
                >

                    <Animated.View style={[styles.modalView, {
                        opacity: pan.y.interpolate({ inputRange: [0, 200], outputRange: [1, 0] }),
                        transform: [{ translateY: pan.y.interpolate({ inputRange: [0, 200], outputRange: [0, 200] }) }],

                    }]}
                        {...panResponder.panHandlers}
                    >

                        <View
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '100%',
                                height: responsiveScreenFontSize(100)
                            }}>
                            <View
                                style={{
                                    height: responsiveHeight(15),
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    // backgroundColor:'blue'
                                    // position:'absolute', top: 10, zIndex: 1
                                }}

                            >
                                <TouchableOpacity
                                    style={{
                                        width: '50%',
                                        height: responsiveFontSize(5),
                                        // backgroundColor:'blue',
                                        alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start'
                                    }}
                                    onPress={() =>
                                        ChangeModalState(false)
                                    }
                                >
                                    <Ionicons
                                        // style={{ paddingTop: 20 }}
                                        name="md-chevron-back-sharp"
                                        size={responsiveFontSize(3)}
                                        color={'white'}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        width: '50%',
                                        alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'flex-end'
                                    }}
                                >
                                    <Ionicons
                                        // style={{ paddingTop: 0 }}
                                        name="heart-outline"
                                        size={responsiveFontSize(3)}
                                        color={'white'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Animated.View style={{
                                width: '100%',
                                height: responsiveFontSize(15),
                                // borderRadius: 10,
                                backgroundColor: colors.themeblue,
                                // alignSelf: 'center',
                                borderTopLeftRadius: 25,
                                borderTopRightRadius: 25,
                                justifyContent: 'center',
                                opacity: pan.y.interpolate({ inputRange: [0, 200], outputRange: [1, 0] }),
                                transform: [{ translateY: pan.y.interpolate({ inputRange: [0, 200], outputRange: [0, 200] }) }]
                            }}
                                {...panResponderOpen.panHandlers}
                            >
                                <View
                                    style={{
                                        width: responsiveScreenHeight(10),
                                        height: responsiveFontSize(1.2),
                                        borderRadius: 10,
                                        backgroundColor: 'white',
                                        alignSelf: 'center',

                                        // opacity: pan.y.interpolate({ inputRange: [0, 200], outputRange: [1, 0] }),
                                        // transform: [{ translateY: pan.y.interpolate({ inputRange: [0, 200], outputRange: [0, 200] }) }]
                                    }}

                                />
                            </Animated.View>
                            <View
                                style={{

                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderTopLeftRadius: 25,
                                    borderTopRightRadius: 25,
                                }}

                            >

                                <View
                                    style={{
                                        width: responsiveScreenWidth(75),
                                        height: responsiveScreenWidth(55),
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
                                        // resizeMethod='auto'
                                        style={{
                                            width: responsiveScreenWidth(75),
                                            height: responsiveScreenWidth(55),
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
                                        source={require('../../assets/large.png')}
                                    />
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'column',

                                        justifyContent: 'space-around',
                                        alignItems: 'flex-start',
                                        height: responsiveScreenHeight(50),
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
                                                alignItems: 'center',
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
                                                    width: responsiveScreenHeight(3.8),
                                                    height: responsiveScreenHeight(3.8),
                                                    borderRadius: responsiveScreenFontSize(1),
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
                                                    width: responsiveScreenHeight(3.8),
                                                    height: responsiveScreenHeight(3.8),
                                                    borderRadius: responsiveScreenFontSize(1),
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

                                            }}
                                            numberOfLines={3}>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book.
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'space-between',

                                            width: '100%',
                                            alignSelf: 'center',
                                        }}>
                                        <View
                                            style={{
                                                height: responsiveFontSize(5),
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

                                        <FlatList
                                            horizontal={true}
                                            data={data}
                                            contentContainerStyle={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginHorizontal: responsiveScreenFontSize(5),
                                            }}
                                            ListFooterComponent={<View style={{ width: responsiveScreenFontSize(5) }} />}
                                            showsHorizontalScrollIndicator={false}
                                            keyExtractor={(item, i) => i.toString()}
                                            renderItem={({ item, index }) => {
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
                                                            // shadowColor: '#000',
                                                            // shadowOffset: {
                                                            //     width: 0,
                                                            //     height: 2,
                                                            // },
                                                            // shadowOpacity: 0.25,
                                                            // shadowRadius: 3.84,

                                                            // elevation: 2,
                                                        }}>
                                                        <Image
                                                            style={{ width: 25, height: 25 }}
                                                            resizeMode="contain"
                                                            source={item.image}
                                                        />
                                                    </View>
                                                );
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        height: responsiveFontSize(10),
                                        alignSelf: 'flex-end',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        marginHorizontal: responsiveFontSize(3)
                                    }}>
                                        <Btn
                                            text="Ajouter au panier"
                                            color={colors.themeblue}
                                            pSText={{
                                                fontWeight: 'bold',
                                                color: 'white',
                                                fontSize: responsiveFontSize(1.8)
                                            }}
                                            pS={{ width: '40%' }}
                                            textColor={colors.themeblue}

                                            loader={null}
                                        />
                                    </View>
                                </View>

                            </View>


                        </View>


                    </Animated.View>

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
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        marginTop: 'auto',
        // height: responsiveHeight(100),
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        // backgroundColor: 'black',

        // opacity: 0.9,
    },
    modalView: {
        opacity: 1,
        width: '100%',
        // height: responsiveScreenHeight(90),
        // margin: 10,
        backgroundColor: colors.themeblue,
        // justifyContent:'center',
        // alignContent:'center',
        // backgroundColor: 'white',
        borderRadius: 20,
        // padding: 15,
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

function mapStateToProps({ authRed }) {
    return {
        authRed,
    };
}

export default ItemDetailModal;
