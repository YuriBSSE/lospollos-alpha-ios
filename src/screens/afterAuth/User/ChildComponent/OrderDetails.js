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
import Feather from 'react-native-vector-icons/Feather';
import PurchasesIcon from 'react-native-vector-icons/FontAwesome5';
import InfluencerSetupIcon from 'react-native-vector-icons/FontAwesome';
import ShippingAddIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BalanceIcon from 'react-native-vector-icons/Fontisto';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import colors from '../../../../assets/colors/colors';
import InfluencerIcon from 'react-native-vector-icons/Entypo';
import UpDownIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MyText from '../../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useRef } from 'react';



export default function OrderDetails({ index, data, onChange }) {
    const [state, onChangeState] = useState(false)
    const [details, onChangeDetails] = useState(false)
    const flatRef = useRef(null)
    const [ind, onChangeIndex] = useState(null)
    const [value, onChangeValue] = useState(0);
    useEffect(() => {
        if (ind != null) {
            console.log("sss", ind)
            flatRef?.current?.scrollToIndex({ animated: true, index: ind })
        }
    }, [ind])

    const onViewCallBack = React.useCallback((viewableItems) => {
        // console.log(viewableItems.changed[0]?.index, "SDADAS")
        // onChangeIndex(viewableItems.changed[0]?.index)
        // Use viewable items in state or as intended
    }, []) // any dependencies that require the function to be "redeclared"

    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    function renderOrderDetailsScreen() {
        return (
            <View style={{

                width: '90%', borderRadius: responsiveFontSize(2), alignSelf: 'center',
                backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}>
                <View style={{ width: '100%', height: responsiveFontSize(5), justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => onChangeDetails(false)}>
                        <Feather
                            style={{ marginRight: responsiveFontSize(1), marginTop: responsiveFontSize(1) }}
                            name="x"
                            size={responsiveFontSize(3)}
                            color={'#ABABAB'}
                        />
                    </TouchableOpacity>

                </View>
                <View style={{
                    paddingVertical: responsiveFontSize(1),
                    width: '92%',
                    justifyContent: 'space-around', alignSelf: 'center',
                }}>
                    <MyText
                        style={{ paddingVertical: responsiveFontSize(0.5) }}
                        size={responsiveFontSize(2.5)}
                        fw={'bold'}
                        color={'black'}
                        decoration={'none'}
                        Label={'Pain baguette'}
                    />
                    <MyText
                        style={{ paddingVertical: responsiveFontSize(0.5) }}
                        size={responsiveFontSize(2)}
                        fw={'bold'}
                        color={colors.pale_yellow}
                        decoration={'none'}
                        Label={'Info ?'}
                    />
                    <MyText
                        style={{ paddingVertical: responsiveFontSize(0.5) }}
                        size={responsiveFontSize(1.6)}
                        fw={'bold'}
                        color={'#BDBDBD'}
                        decoration={'none'}
                        Label={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the '}
                    />
                    <View style={{ justifyContent: 'space-between', width: '100%', alignItems: 'center', height: responsiveFontSize(5), flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image resizeMode='contain' style={{ height: 20 }} source={require('../../../../assets/delete.png')} />
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                // height: responsiveFontSize(7),
                                width: '30%',
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (value >= 1) {
                                        onChangeValue(value - 1);
                                    }
                                }}
                                style={{
                                    width: 22,
                                    height: 22,
                                    borderRadius: responsiveFontSize(0.5),
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
                                    size={responsiveFontSize(2.5)}
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
                                    width: 22,
                                    height: 22,
                                    borderRadius: responsiveFontSize(0.5),
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
                                    size={responsiveFontSize(2.5)}
                                    color={'white'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        )
    }

    function renderOrderDetails() {
        return (
            <View style={{
                // height: responsiveFontSize(15),
                width: '100%',

                alignSelf: 'center',
                marginTop: responsiveFontSize(1)
            }}>

                <FlatList
                    data={[1, 2, 3, 4]}
                    ref={flatRef}
                    ListHeaderComponent={<View style={{ height: responsiveFontSize(2) }} />}
                    onViewableItemsChanged={onViewCallBack}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    horizontal={true}
                    pagingEnabled={true}
                    viewabilityConfig={viewConfigRef.current}
                    keyExtractor={(item, i) => i.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => {
                        return (
                            <TouchableOpacity onPress={() => onChangeDetails(true)}>
                                <View key={i} style={{
                                    alignItems: 'center', width: responsiveWidth(100), paddingVertical: responsiveFontSize(1), shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                }}>
                                    <Image style={{ width: responsiveWidth(70) }} resizeMode='contain' source={require('../../../../assets/pp.png')} />
                                </View>
                            </TouchableOpacity>
                        );
                    }}

                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: '100%', height: responsiveFontSize(10), position: 'absolute', top: responsiveHeight(28) }}>
                    <TouchableOpacity onPress={() => {
                        if (ind >= 1) {
                            onChangeIndex(ind == null ? 1 : ind - 1)
                        }
                    }} >
                        <Image source={require('../../../../assets/leftColor.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {

                        if (ind < 3) {
                            onChangeIndex(ind == null ? 1 : ind + 1)
                        }


                    }} >
                        <Image source={require('../../../../assets/rightColor.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '100%', flexDirection: 'row', height: responsiveFontSize(5), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            [1, 2, 3, 4].map((item, index) => {
                                console.log(index, ind, "MAP");
                                return (
                                    <View style={{
                                        width: '3%',
                                        backgroundColor: 'white',
                                        height: responsiveFontSize(1.5),
                                        borderRadius: responsiveFontSize(100),
                                        borderWidth: 1,
                                        borderColor: colors.themeblue,
                                        marginHorizontal: responsiveFontSize(0.5),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {
                                            (index == ind || (ind == null && index == 0)) &&
                                            <View style={{ backgroundColor: colors.themeblue, height: responsiveFontSize(0.7), width: '60%', borderRadius: responsiveFontSize(100) }} />
                                        }


                                    </View>
                                )
                            })
                        }
                    </View>

                    {details ? renderOrderDetailsScreen() : null}

                    <View style={{ height: responsiveFontSize(5), width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                        <TouchableOpacity onPress={() => onChangeState(false)} style={{ width: '35%', height: responsiveFontSize(4), justifyContent: 'center', alignItems: 'center', }}>
                            <Feather
                                style={{}}
                                name="chevron-up"
                                size={responsiveFontSize(3)}
                                color={colors.themeblue}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

    return (
        <>

            <View
                key={index}
                style={{
                    borderWidth: state ? responsiveFontSize(0.1) : 0,
                    borderColor: '#b8b8b8',
                    width: '94%',
                    paddingHorizontal: responsiveFontSize(0.5),
                    borderRadius: responsiveFontSize(2),
                    backgroundColor: 'white',
                    height: responsiveFontSize(15),
                    flexDirection: 'row',
                    alignItems: 'center', alignSelf: 'center', justifyContent: 'space-around'
                }} >
                <View style={{
                    height: responsiveFontSize(14), width: '40%', alignItems: 'center', justifyContent: 'center',alignSelf:'center'
                }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
                        {[1, 2, 3].map(item => (
                            <View style={{
                                borderRadius: responsiveFontSize(1), padding: 1
                            }}>
                                <Image
                                    resizeMode='cover'
                                    style={{
                                        height: responsiveFontSize(6), width: 50, borderRadius: responsiveFontSize(1), backgroundColor: 'white',
                                    }}
                                    source={require('../../../../assets/large.png')}
                                />
                            </View>
                        ))}
                        <View style={{
                            borderRadius: responsiveFontSize(1), backgroundColor: '#b8b8b8', height: responsiveFontSize(6), width: 50, marginLeft: 1, justifyContent: 'center', alignItems: 'center'
                        }}>

                            <Text style={{ fontSize: responsiveFontSize(2.8), color: 'white' }}>+1</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '55%', height: responsiveFontSize(12)}}>
                    <View style={{
                        height: responsiveFontSize(6), width: '100%', flexDirection: 'column', justifyContent: 'flex-start',
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <MyText
                                size={responsiveFontSize(1.8)}
                                fw={'normal'}
                                color={'black'}
                                decoration={'none'}
                                textAlign={'left'}
                                Label={'05 septembre à 11:13'}
                            />
                            <MyText
                                size={responsiveFontSize(1.9)}
                                fw={'normal'}
                                color={colors.themeblue}
                                decoration={'none'}
                                textAlign={'right'}
                                Label={'23 €'}
                            />
                        </View>
                        <MyText
                            size={responsiveFontSize(1.65)}
                            fw={'bold'}
                            color={'black'}
                            decoration={'none'}
                            textAlign={'left'}
                            Label={'6 articles'}
                        />


                    </View>
                    <View style={{
                        height: responsiveFontSize(6), width: '100%', borderRadius: responsiveFontSize(1), flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            {
                                !state ?
                                    <TouchableOpacity onPress={() => onChangeState(true)} style={{ width: '35%', height: responsiveFontSize(4), justifyContent: 'center', alignItems: 'center', }}>
                                        <Feather
                                            style={{}}
                                            name="chevron-down"
                                            size={responsiveFontSize(3)}
                                            color={colors.themeblue}
                                        />
                                    </TouchableOpacity> :
                                    <View style={{ width: '35%', height: responsiveFontSize(4), }} />
                            }

                            <TouchableOpacity onPress={() => onChange(true)} style={{ width: '55%', height: responsiveFontSize(4), backgroundColor: colors.themeblue, justifyContent: 'center', alignItems: 'center', borderRadius: responsiveFontSize(1) }}>
                                <MyText
                                    size={responsiveFontSize(2)}
                                    fw={'normal'}
                                    color={'white'}
                                    decoration={'none'}
                                    textAlign={'left'}
                                    
                                    Label={'Commander'}
                                />
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>

            </View>
            {state ? renderOrderDetails() : null}
        </>
    )
}