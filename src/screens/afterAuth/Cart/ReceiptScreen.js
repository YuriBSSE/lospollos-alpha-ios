// @ts-nocheck

import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
    StatusBar,
} from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Heading from '../../../components/Heading';
import Btn from '../../../components/Btn';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashedLine from 'react-native-dashed-line';
import colors from '../../../assets/colors/colors';
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import deviceInfo from 'react-native-device-info';

import BackBtnHeader from '../../../components/BackBtnHeader';
import MyText from '../../../components/MyText';
let { width, height } = Dimensions.get('window');

const checkStyle = {};

if (Platform.OS == 'ios' && width <= 550) {
    checkStyle.transform = [{ scaleX: 0.7 }, { scaleY: 0.7 }];
}
const tablet = deviceInfo.isTablet();
const ReceiptScreen = ({ navigation }) => {
    const password = useRef();

    const [submit, setSubmit] = useState(false);
    const [isShowPass, setisShowPass] = useState(false);

    const [isShowPass2, setisShowPass2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(true);

    const [eye, seteye] = React.useState(true);

    function getValue(k, v) {
        setFields(pS => {
            return {
                ...pS,
                [k]: v,
            };
        });
    }



    return (
        <View style={StyleSheet.absoluteFill}>


            <StatusBar
                backgroundColor={colors.themeblue}
                barStyle='dark-content'
            />

            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor: colors.themeblue
                }}>
                <View
                    style={{
                        top: responsiveFontSize(4),
                        height: 50,
                        position: 'absolute',
                        width: '100%',
                    }}>
                    <BackBtnHeader
                        left={true}
                        cross={false}
                        text={'Reçu'}
                        odd={true}
                        call={() => navigation.goBack()}
                    />
                </View>
                <View style={{ height: responsiveHeight(12) }} />
                <View
                    style={{
                        height: responsiveHeight(80),
                        width: '100%',
                        backgroundColor: 'white',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    }}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.ctn1}>
                                <View style={{
                                    // height: responsiveScreenFontSize(50),
                                    width: '100%',
                                    borderRadius: responsiveFontSize(2),
                                    backgroundColor: colors.themeblue,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}>
                                    <View style={{
                                        position: 'absolute', top: -40, right: -10
                                    }}>
                                        <Image source={require('../../../assets/receipt.png')} />
                                    </View>
                                    <View style={{ height: responsiveFontSize(15), justifyContent: 'center', alignItems: 'flex-start', }}>
                                        <MyText
                                            size={responsiveFontSize(3)}
                                            fw={'normal'}
                                            style={{
                                                marginLeft: 10
                                            }}
                                            // tf='uppercase'
                                            color={'white'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={'Voici votre reçu'}
                                        />
                                    </View>

                                    <View style={{ height: responsiveFontSize(8), width: '95%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', alignSelf: 'center' }}>
                                        <View style={{ width: '50%' }}>
                                            <MyText
                                                size={responsiveFontSize(2)}
                                                fw={'bold'}
                                                style={{
                                                    marginLeft: 10
                                                }}
                                                // tf='uppercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"Nom de l'article"}
                                            />
                                        </View>
                                        <View style={{ width: '25%' }}>
                                            <MyText
                                                size={responsiveFontSize(2)}
                                                fw={'bold'}
                                                style={{
                                                    marginLeft: 10
                                                }}
                                                // tf='uppercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"Qté :"}
                                            />
                                        </View>
                                        <View style={{ width: '25%' }}>
                                            <MyText
                                                size={responsiveFontSize(2)}
                                                fw={'bold'}
                                                style={{
                                                    marginLeft: 10
                                                }}
                                                // tf='uppercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"Prix:"}
                                            />
                                        </View>
                                    </View>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item, i) => i.toString()}
                                        data={[1, 2, 3]}
                                        style={{
                                            marginVertical: responsiveScreenFontSize(2)
                                        }}
                                        ItemSeparatorComponent={
                                            <DashedLine dashLength={10} dashThickness={1} dashGap={5} dashColor='white' dashStyle={{ borderRadius: 1 }} />
                                        }
                                        renderItem={(item, index) => {
                                            return (
                                                <View style={{ height: responsiveFontSize(5), width: '95%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', alignSelf: 'center' }}>
                                                    <View style={{ width: '50%' }}>
                                                        <MyText
                                                            size={responsiveFontSize(2)}
                                                            fw={'bold'}
                                                            style={{
                                                                marginLeft: 10
                                                            }}
                                                            // tf='uppercase'
                                                            color={'white'}
                                                            decoration={'none'}
                                                            textAlign={'left'}
                                                            Label={"Poulet braisé entier"}
                                                        />
                                                    </View>
                                                    <View style={{ width: '25%' }}>
                                                        <MyText
                                                            size={responsiveFontSize(2)}
                                                            fw={'bold'}
                                                            style={{
                                                                marginLeft: 10
                                                            }}
                                                            // tf='uppercase'
                                                            color={'white'}
                                                            decoration={'none'}
                                                            textAlign={'left'}
                                                            Label={"1"}
                                                        />
                                                    </View>
                                                    <View style={{ width: '25%' }}>
                                                        <MyText
                                                            size={responsiveFontSize(2)}
                                                            fw={'bold'}
                                                            style={{
                                                                marginLeft: 10
                                                            }}
                                                            tf='lowercase'
                                                            color={'white'}
                                                            decoration={'none'}
                                                            textAlign={'left'}
                                                            Label={"xx,xx €"}
                                                        />
                                                    </View>
                                                </View>
                                            )
                                        }}
                                    />
                                    <View style={{ width: '50%', height: responsiveFontSize(8), alignSelf: 'flex-end', flexDirection: 'column', justifyContent: 'space-around' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                                            <MyText
                                                size={responsiveFontSize(2.2)}
                                                fw={'normal'}
                                                style={{
                                                    fontWeight: '800'
                                                }}
                                                // tf='uppercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"TVA :"}
                                            />
                                            <MyText
                                                size={responsiveFontSize(2.2)}
                                                fw={'bold'}
                                                style={{

                                                }}
                                                // tf='uppercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"10%"}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
                                            <MyText
                                                size={responsiveFontSize(2.2)}
                                                fw={'normal'}
                                                style={{
                                                    fontWeight: '800'
                                                }}
                                                // tf='uppercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"Total:"}
                                            />
                                            <MyText
                                                size={responsiveFontSize(2.2)}
                                                fw={'bold'}
                                                style={{

                                                }}
                                                tf='lowercase'
                                                color={'white'}
                                                decoration={'none'}
                                                textAlign={'left'}
                                                Label={"xx,xx €"}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ height: responsiveFontSize(15), width: '100%', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Btn
                                            text="Suivre votre commande"
                                            color={'#F7BE00'}
                                            pSText={{
                                                fontWeight: 'bold',
                                                color: 'white',
                                                fontSize: responsiveFontSize(1.8)
                                            }}
                                            pS={{ width: '60%', alignSelf: 'center', marginVertical: responsiveFontSize(1) }}
                                            textColor={colors.themeblue}

                                            loader={null}
                                        />
                                        <MyText
                                            size={responsiveFontSize(2)}
                                            fw={'900'}
                                            style={{
                                                marginLeft: 10
                                            }}
                                            // tf='uppercase'
                                            color={'white'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={"Merci pour votre commande !"}
                                        />
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: responsiveScreenFontSize(15), flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginVertical: responsiveFontSize(2) }}>
                                    <Text style={{ color: 'black', fontSize: responsiveFontSize(2), textAlign: 'center' }}>
                                        Vous avez des problèmes ? Veuillez contacter <Text style={{ color: colors.themeblue, fontSize: responsiveFontSize(2) }}>l'assistance</Text>
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            alignSelf: 'center',
                                        }}>
                                        <Image style={{ width: 50, height: 50 }} source={require('../../../assets/logo.png')} />
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
                        </View>
                    </ScrollView>
                </View>
            </View>

        </View>
    );
};
export default ReceiptScreen;

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
        marginVertical: responsiveScreenFontSize(5),
        alignItems: 'flex-start',
        width: '90%',
        alignSelf: 'center',



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
