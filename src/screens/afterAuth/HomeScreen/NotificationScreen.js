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
    ScrollView
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

import { CommonActions } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EarningIcon from 'react-native-vector-icons/FontAwesome5';
import PurchasesIcon from 'react-native-vector-icons/FontAwesome5';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import colors from '../../../assets/colors/colors';
import InfluencerIcon from 'react-native-vector-icons/Entypo';
import UpDownIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import BackBtnHeader from '../../../components/BackBtnHeader';
export default function NotificationScreen({ navigation }) {

    if (false) {
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
                <View style={{ height: responsiveFontSize(80), width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground
                        resizeMode="cover"
                        style={{
                            height: 250,
                            width: 250,
                        }}
                        source={require('../../../assets/bellShadow.png')}>
                        <Image
                            resizeMode="contain"
                            style={{ height: 230, width: 230 }}
                            source={require('../../../assets/bells.png')}
                        />
                    </ImageBackground>
                    <View style={{ width: '80%', alignSelf: 'center' }}>
                        <MyText
                            size={responsiveFontSize(3)}
                            fw={'normal'}
                            color={'black'}
                            decoration={'none'}
                            textAlign={'center'}
                            Label={'Vous n’avez pas de notifications'}
                        />
                    </View>
                </View>
            </View>
        )
    }


    const data = [
        1,
    ]
    const data1 = [
        1, 2
    ]
    const data2 = [
        1, 2,3
    ]



    return (
        <ScrollView
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
            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data}
                    ListHeaderComponent={<View style={{ alignItems: 'flex-start', justifyContent: "flex-start", height: responsiveFontSize(5), marginTop: 10, width: '80%', alignSelf: 'center' }}>
                        <MyText
                            size={responsiveFontSize(2)}
                            fw={'normal'}
                            color={'black'}
                            decoration={'none'}
                            textAlign={'left'}
                            Label={'Nouvelles notifications'}
                        />
                    </View>}
                    ListFooterComponent={<View style={{ height: responsiveFontSize(5) }} />}
                    keyExtractor={(item, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (

                            <LinearGradient
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 10,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 9,
                                    width: '90%',
                                    borderRadius: responsiveFontSize(2),
                                    backgroundColor: 'white',
                                    height: responsiveFontSize(15),
                                    flexDirection: 'row',
                                    alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around'
                                }} colors={['#FFC700', '#FF9900']}>
                                <View style={{
                                    borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                }}>
                                    <Image
                                        resizeMode='cover'
                                        resizeMethod='auto'
                                        style={{
                                            height: responsiveFontSize(12), width: 110, borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                        }}
                                        source={require('../../../assets/large.png')}
                                    />
                                </View>
                                <View style={{
                                    height: responsiveFontSize(12), width: '50%', borderRadius: responsiveFontSize(1), flexDirection:'column', justifyContent:'space-around'
                                }}>
                                     <MyText
                                        size={responsiveFontSize(1.9)}
                                        fw={'normal'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'En cours de cuisson'}
                                    />
                                     <MyText
                                        size={responsiveFontSize(1.5)}
                                        fw={'bold'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'Votre commande est en cours de cuisson !'}
                                    />
                                     <MyText
                                        size={responsiveFontSize(1.5)}
                                        fw={'bold'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'right'}
                                        Label={'11:10'}
                                    />
                                 
                                </View>
                                <View style={{
                                    height: responsiveFontSize(12), width: '10%', borderRadius: responsiveFontSize(1),
                                    justifyContent:'center', alignItems:"center"
                                }}>
                                    <TouchableOpacity onPress={() => console.log("DONE")}>
                                        <Icon
                                            style={{  }}
                                            name="chevron-right-circle"
                                            size={responsiveFontSize(3.5)}
                                            color={'black'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>

                        )
                    }}

                />
            </View>
            <View style={{
                width:'100%', height:responsiveFontSize(0.1), backgroundColor:'grey'
            }} />

            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data1}
                    ListHeaderComponent={<View style={{ alignItems: 'flex-start', justifyContent: "flex-start", height: responsiveFontSize(5), marginTop: 10, width: '80%', alignSelf: 'center' }}>
                        <MyText
                            size={responsiveFontSize(2)}
                            fw={'normal'}
                            color={'black'}
                            decoration={'none'}
                            textAlign={'left'}
                            Label={'Aujourd’hui'}
                        />
                    </View>}
                    ListFooterComponent={<View style={{ height: responsiveFontSize(5) }} />}
                    keyExtractor={(item, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (

                            <View
                                style={{
                                  
                                    width: '90%',
                                    borderRadius: responsiveFontSize(2),
                                    backgroundColor: 'white',
                                    height: responsiveFontSize(15),
                                    flexDirection: 'row',
                                    alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around'
                                }} >
                                <View style={{
                                    borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                }}>
                                    <Image
                                        resizeMode='cover'
                                        resizeMethod='auto'
                                        style={{
                                            height: responsiveFontSize(12), width: 110, borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                        }}
                                        source={require('../../../assets/large.png')}
                                    />
                                </View>
                                <View style={{
                                    height: responsiveFontSize(12), width: '50%', borderRadius: responsiveFontSize(1), flexDirection:'column', justifyContent:'space-around'
                                }}>
                                     <MyText
                                        size={responsiveFontSize(1.9)}
                                        fw={'normal'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'En cours de cuisson'}
                                    />
                                     <MyText
                                        size={responsiveFontSize(1.5)}
                                        fw={'bold'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'Votre commande est en cours de cuisson !'}
                                    />
                                     <MyText
                                        size={responsiveFontSize(1.5)}
                                        fw={'bold'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'right'}
                                        Label={'11:10'}
                                    />
                                 
                                </View>
                                <View style={{
                                    height: responsiveFontSize(12), width: '10%', borderRadius: responsiveFontSize(1),
                                    justifyContent:'center', alignItems:"center"
                                }}>
                                    <TouchableOpacity onPress={() => console.log("DONE")}>
                                        <Icon
                                            style={{  }}
                                            name="chevron-right-circle"
                                            size={responsiveFontSize(3.5)}
                                            color={'black'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )
                    }}

                />
            </View>
            <View style={{
                width:'100%', height:responsiveFontSize(0.1), backgroundColor:'grey'
            }} />

            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={data2}
                    ListHeaderComponent={<View style={{ alignItems: 'flex-start', justifyContent: "flex-start", height: responsiveFontSize(5), marginTop: 10, width: '80%', alignSelf: 'center' }}>
                        <MyText
                            size={responsiveFontSize(2)}
                            fw={'normal'}
                            color={'black'}
                            decoration={'none'}
                            textAlign={'left'}
                            Label={'Le 8 août'}
                        />
                    </View>}
                    ListFooterComponent={<View style={{ height: responsiveFontSize(5) }} />}
                    keyExtractor={(item, i) => i.toString()}
                    ListFooterComponent={<View style={{height:responsiveFontSize(10)}} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (

                            <View
                                style={{
                                  
                                    width: '90%',
                                    borderRadius: responsiveFontSize(2),
                                    backgroundColor: 'white',
                                    height: responsiveFontSize(15),
                                    flexDirection: 'row',
                                    alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around'
                                }} >
                                <View style={{
                                    borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                }}>
                                    <Image
                                        resizeMode='cover'
                                        resizeMethod='auto'
                                        style={{
                                            height: responsiveFontSize(12), width: 110, borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                        }}
                                        source={require('../../../assets/large.png')}
                                    />
                                </View>
                                <View style={{
                                    height: responsiveFontSize(12), width: '50%', borderRadius: responsiveFontSize(1), flexDirection:'column', justifyContent:'space-around'
                                }}>
                                     <MyText
                                        size={responsiveFontSize(1.9)}
                                        fw={'normal'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'En cours de cuisson'}
                                    />
                                     <MyText
                                        size={responsiveFontSize(1.5)}
                                        fw={'bold'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'left'}
                                        Label={'Votre commande est en cours de cuisson !'}
                                    />
                                     <MyText
                                        size={responsiveFontSize(1.5)}
                                        fw={'bold'}
                                        color={'black'}
                                        decoration={'none'}
                                        textAlign={'right'}
                                        Label={'11:10'}
                                    />
                                 
                                </View>
                                <View style={{
                                    height: responsiveFontSize(12), width: '10%', borderRadius: responsiveFontSize(1),
                                    justifyContent:'center', alignItems:"center"
                                }}>
                                    <TouchableOpacity onPress={() => console.log("DONE")}>
                                        <Icon
                                            style={{  }}
                                            name="chevron-right-circle"
                                            size={responsiveFontSize(3.5)}
                                            color={'black'}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )
                    }}

                />
            </View>
        </ScrollView>
    )
}