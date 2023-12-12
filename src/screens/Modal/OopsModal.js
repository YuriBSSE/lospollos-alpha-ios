// @ts-nocheck
import React, { useEffect, useState } from 'react';
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
import Feather from 'react-native-vector-icons/Feather';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight,
    responsiveScreenWidth,
    responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import deviceInfo from 'react-native-device-info';
import Heading from '../../components/Heading';
import { setActive } from 'react-native-sound';
import colors from '../../assets/colors/colors';
import MyText from '../../components/MyText';
import Btn from '../../components/Btn';
import InputField from '../../components/InputField';
const tablet = deviceInfo.isTablet();

const OopsModal = ({ ModalState, ChangeModalState, dada }) => {


    return (
        <>
            <StatusBar hidden={true} />

            <Modal
                animationType="fade"
                transparent={true}
                visible={ModalState}
                statusBarTranslucent={false}
                style={{ flex: 1, justifyContent: 'center', elevation: 5 }}
                onRequestClose={() => {
                    ChangeModalState(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ height: responsiveFontSize(5), width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <TouchableOpacity onPress={() => ChangeModalState(false)}>
                                <Feather
                                    style={{ marginLeft: responsiveFontSize(2) }}
                                    name="x"
                                    size={responsiveFontSize(3)}
                                    color={'grey'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: responsiveFontSize(14), width: '90%', marginTop:responsiveFontSize(3) }}>
                            <MyText
                                size={responsiveFontSize(2.4)}
                                fw={'normal'}
                                color={'black'}
                                decoration={'none'}
                                textAlign={'center'}
                                Label={'Oops ...'}
                            />
                            <MyText
                                size={responsiveFontSize(2.4)}
                                fw={'bold'}
                                color={'black'}
                                decoration={'none'}
                                textAlign={'center'}
                                Label={dada}
                            />

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
    eye: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        position: 'absolute',
        rigth: 20,
        alignSelf: 'center',
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
        height: responsiveScreenHeight(35),
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

function mapStateToProps({ authRed }) {
    return {
        authRed,
    };
}

export default OopsModal;
