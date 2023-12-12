// @ts-nocheck
import React, { useEffect, useState } from 'react';
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
    responsiveWidth,
    responsiveScreenFontSize
} from 'react-native-responsive-dimensions';
import Btn from '../../../components/Btn';
import { CommonActions } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import colors from '../../../assets/colors/colors';
import InfluencerIcon from 'react-native-vector-icons/Entypo';
import InputField from '../../../components/InputField';
import { useNavigation } from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import OrderDetails from './Child/OrderDetails';
import OrderModal from '../../Modal/OrderModal'
import OopsModal from '../../Modal/OopsModal'
import BackBtnHeader from '../../../components/BackBtnHeader';
import { CheckBox } from 'react-native-elements'
let { width, height } = Dimensions.get('window');


export default function OrderProcess({ navigation }) {
    const [show, setshow] = useState(false);
    const [show1, setshow1] = useState(false);
    const [check, onChangeCheck] = useState(false)
    const [check1, onChangeCheck1] = useState(false)
    const [promoCode, onChangePromoCode] = useState('')
    const data = [
        1,
    ]
    const data1 = [
        1
    ]

    function bottomComponent() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    justifyContent: 'space-around', marginVertical: responsiveFontSize(2),
                    width: '88%', alignSelf: 'center'
                }}>
                    <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'normal'}
                        color={'black'}
                        decoration={'none'}
                        Label={'Je récupère ma commande'}
                    />
                    <CheckBox
                        title='Au plus vite à 11:15'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor={colors.themeblue}

                        containerStyle={{
                            backgroundColor: 'white',
                            borderWidth: 0
                        }}
                        checked={check}
                        onPress={() => {
                            onChangeCheck(!check)
                        }}
                    />
                    <CheckBox
                        title='Programmer'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor={colors.themeblue}

                        containerStyle={{
                            backgroundColor: 'white',
                            borderWidth: 0
                        }}
                        checked={check1}
                        onPress={() => {
                            navigation.navigate('time')
                            onChangeCheck1(!check)
                        }}
                    />
                </View>
                <View style={{ width: '90%', height: responsiveScreenFontSize(6), backgroundColor: '#383838', alignSelf: 'center', borderRadius: responsiveFontSize(1), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{
                        flexDirection:'row', justifyContent:'center', width:'60%', alignItems:'center', 
                    }}>
                        <Image resizeMode='contain' 
                        style={{width: 20, height:responsiveFontSize(3), marginHorizontal:responsiveFontSize(1)}}
                         source={require('../../../assets/discount.png')} />
                         <View style={{width:'70%', height:responsiveScreenFontSize(6)}}>
                           <InputField
                   
                           
                                getValue={v => {
                                    console.log(v, "vvvvvvvvvvvvvvvv");
                                    onChangePromoCode(v)
                                }}
                                passedStyle={{
                                    backgroundColor:'#383838',
                                    borderWidth: 1, borderRadius: responsiveFontSize(1),
                                }}
                                password={false}
                                value={promoCode}
                                placeHolder="Promo code"
                                smallCaps={true}
                                MyBorderColor={'white'}
                                color={'white'}
                            />
                            </View>
                    </View>
                    <Btn
                        text="Modifier"
                        color={'#F7BE00'}
                        pSText={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: responsiveFontSize(1.8),
                            marginHorizontal:responsiveFontSize(1)
                        }}
                        pS={{ width: '30%', height: responsiveFontSize(4) }}
                        textColor={colors.themeblue}
                        call={() => setshow1(true)}
                        loader={null}
                    />
                </View>
                <View style={{height:responsiveScreenFontSize(8)}} />
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '90%', alignSelf:'center', height:responsiveFontSize(4)}}>
                <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'Sous-total'}
                    />
                      <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'23 €'}
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '90%', alignSelf:'center', height:responsiveFontSize(4)}}>
                <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'Réduction'}
                    />
                      <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'-1 €'}
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '90%', alignSelf:'center', height:responsiveFontSize(4)}}>
                <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'TVA'}
                    />
                      <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'2 €'}
                    />
                </View>
                <View style={{width:'100%', height:responsiveScreenFontSize(0.1), backgroundColor:'#b8b8b8'}} />
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '90%', alignSelf:'center', height:responsiveFontSize(5)}}>
                <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'normal'}
                        color={'black'}
                        decoration={'none'}
                        Label={'TOTAL'}
                    />
                      <MyText
                        style={{}}
                        size={responsiveFontSize(2.1)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'24 €'}
                    />
                </View>

                <View style={{
                  alignSelf:'center', width: '100%', justifyContent:'center', alignItems:'center', height:responsiveScreenFontSize(10)  
                }}>
                <Btn
                        text="Aller au paiement"
                        color={colors.themeblue}
                        pSText={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: responsiveFontSize(1.8),
                            marginHorizontal:responsiveFontSize(1)
                        }}
                        pS={{ width: '80%', height: responsiveFontSize(5) }}
                        textColor={colors.themeblue}
                        call={() => navigation.navigate('personalinfo')}
                        loader={null}
                    />
                    </View>
                <View style={{height:responsiveScreenFontSize(30)}} />
            </View>
        )
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
            <StatusBar barStyle="light-content" backgroundColor={colors.themeblue} />
            {
                show && 
                <OrderModal
                ModalState={show}
                ChangeModalState={setshow}
                nav={navigation}
            />
            }
           
             {
                show1 && 
                <OopsModal
                ModalState={show1}
                ChangeModalState={setshow1}
                nav={navigation}
                dada={'Aucun code n’a été appliqué'}
            />
             }
           
            {/* <View
                style={{
                    backgroundColor: colors.themeblue,
                    width: '100%',
                    height: responsiveFontSize(8),
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                   
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather
                        style={{ marginLeft: responsiveFontSize(2) }}
                        name="chevron-left"
                        size={responsiveFontSize(3)}
                        color={'white'}
                    />
                </TouchableOpacity>
                <MyText
                    style={{ marginLeft: responsiveFontSize(2) }}
                    size={responsiveFontSize(2)}
                    fw={'bold'}
                    color={'white'}
                    decoration={'none'}
                    Label={'Mes commandes'}
                />
            </View> */}
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
                            text={'Mes commandes'}
                            odd={true}
                            call={() => navigation.goBack()}
                        />
                    </View>
                </View>




            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data1}
                    ListHeaderComponent={<View style={{ height: responsiveFontSize(2) }} />}
                    ListFooterComponent={bottomComponent()}
                    keyExtractor={(item, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <OrderDetails date={item} onChange={setshow} index={index} />
                    }

                />
          
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
