// @ts-nocheck
import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ImageBackground,
    FlatList,
    ScrollView, Dimensions
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveScreenFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import Btn from '../../../components/Btn';
import colors from '../../../assets/colors/colors';
import MyText from '../../../components/MyText';
import BackBtnHeader from '../../../components/BackBtnHeader';
import InputField from '../../../components/InputField';
import TimeItem from './ChildComponent/TimeItem';
let { width, height } = Dimensions.get('window');

export default function OurResturant({ navigation }) {
    const [text, onChangeText] = useState('')

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.themeblue,
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
                        left={true}
                        cross={false}
                        text={'Notre restaurant'}
                        odd={true}
                        call={() => navigation.goBack()}
                    />
                </View>
            </View>

            <View
                style={{
                    height: responsiveScreenFontSize(100),
                    width: '100%',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.ctn1}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'space-around', height: responsiveFontSize(20), alignItems: 'center', }}>

                                    <Text style={{
                                        fontSize: responsiveFontSize(3),
                                        color: 'black',
                                        textAlign: 'center',
                                        fontWeight: '900',
                                        letterSpacing: 5,
                                        textDecorationLine: 'underline'

                                    }}>
                                        ÉCRIVEZ-NOUS
                                    </Text>
                                    <View style={{
                                        width: '100%', height: responsiveFontSize(10),
                                        alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
                                        paddingVertical: responsiveFontSize(1)
                                    }}>
                                        <MyText
                                            size={responsiveFontSize(1.6)}
                                            fw={'normal'}
                                            color={'black'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={'Une question, un commentaire, une suggestion ?'}
                                        />
                                        <MyText
                                            size={responsiveFontSize(1.6)}
                                            fw={'bold'}
                                            color={'black'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={' '}
                                        />
                                        <MyText
                                            size={responsiveFontSize(1.6)}
                                            fw={'bold'}
                                            color={'black'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={'Le cadre ci-dessous est fait pour vous !'}
                                        />
                                    </View>

                                </View>
                                <View style={{
                                    width: '90%', height: responsiveFontSize(35), justifyContent: 'space-around', alignItems: 'center',
                                }}>
                                    <InputField
                                        passedStyle={{ height: responsiveFontSize(23), textAlignVertical: 'top', }}
                                        returnKeyType="next"
                                        getValue={v => onChangeText(v)}
                                        password={false}
                                        value={text}
                                        placeHolder="Écrivez votre message ici ..."
                                        smallCaps={true}
                                        MyBorderColor={'#b8b8b8'}
                                        color={'#BDBDBD'}
                                    />

                                <Btn
                                                        text="Envoyer"
                                                        color={colors.themeblue}
                                                        pSText={{
                                                        fontWeight: 'bold',
                                                        color: 'white',
                                                        fontSize: responsiveFontSize(1.8)
                                                        }}
                                                        pS={{ width: '80%' }}
                                                        textColor={colors.themeblue}
                                                        // call={()=> onChangeScreen(false)}
                                                        loader={null}
                                                    />
                                </View>
                                <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'space-around', height: responsiveFontSize(20), alignItems: 'center', }}>

                                    <Text style={{
                                        fontSize: responsiveFontSize(3),
                                        color: 'black',
                                        textAlign: 'center',
                                        fontWeight: '900',
                                        letterSpacing: 5,
                                        textDecorationLine: 'underline'

                                    }}>
                                        NOTRE RESTAURANT
                                    </Text>
                                    <View style={{
                                        width: '100%', height: responsiveFontSize(10),
                                        alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                                        paddingVertical: responsiveFontSize(1)
                                    }}>
                                        <MyText
                                            size={responsiveFontSize(1.8)}
                                            fw={'bold'}
                                            color={'black'}
                                            decoration={'none'}
                                            textAlign={'center'}
                                            tf={'uppercase'}
                                            Label={'NOS HORAIRES'}
                                        />

                                        <MyText
                                            size={responsiveFontSize(1.6)}
                                            fw={'bold'}
                                            color={'grey'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={'Nous ouvrons dans ... minutes !'}
                                        />
                                    </View>

                                </View>
                                <View style={{ width: '100%', alignSelf: 'center', }}>
                                    <FlatList
                                        data={[1, 2, 3, 4, 5, 6, 7]}
                                        keyExtractor={(item, i) => i.toString()}
                                        style={{ alignSelf: 'center' }}
                                        contentContainerStyle={{
                                            justifyContent: 'center',
                                            alignItems: 'flex-start',
                                        }}

                                        numColumns={2}

                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item, index }) =>

                                            <TimeItem data={item} navigation={navigation} key={index} />
                                        }
                                    />
                                </View>
                                <View style={{ width: '90%', height: responsiveScreenFontSize(10), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/phonee.png')} />
                                    <MyText
                                        size={responsiveFontSize(2.2)}
                                        fw={'bold'}
                                        style={{
                                            marginLeft: 10
                                        }}
                                        tf='uppercase'
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'XX.XX.XX.XX.XX'}
                                    />

                                </View>
                                <Text style={{
                                    fontSize: responsiveFontSize(3),
                                    color: 'black',
                                    textAlign: 'center',
                                    fontWeight: '900',
                                    letterSpacing: 5,


                                }}>
                                    SUIVEZ-NOUS
                                </Text>
                                <View style={{
                                    width: '90%', height: responsiveScreenFontSize(15), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center'
                                }}>
                                    <Image source={require('../../../assets/ig.png')} />
                                    <Image source={require('../../../assets/fbb.png')} />
                                    <Image source={require('../../../assets/tw.png')} />
                                </View>
                            </View>

                        </View>
                    </View>
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
                    <View style={{ height: responsiveFontSize(23) }} />
                </ScrollView>
            </View>

        </View>
    )

}

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
        alignItems: 'flex-start',
        width: '80%',
        alignSelf: 'center',



    },
    col: {
        flexDirection: "column",

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
