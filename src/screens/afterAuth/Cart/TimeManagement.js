// @ts-nocheck
import React, { useEffect, useState, useCallback } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    FlatList,
    ScrollView, Dimensions
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../../../assets/colors/colors';
import BackBtnHeader from '../../../components/BackBtnHeader';
import moment from 'moment';
import MyText from '../../../components/MyText';
import 'moment/locale/fr'
import Btn from '../../../components/Btn';
import OopsModal from '../../Modal/OopsModal';
let { width, height } = Dimensions.get('window');

export default function TimeManagement({navigation}) {
    const [show, setshow] = useState('Midi');
    const [show1, setshow1] = useState(false);
    const [value, onChangeValue] = useState(null)
    const [onTouch, onChangeOnTouch] = useState('1');
    const data = [
        { id: 1, date: 'AUJ ' + moment().add(0, 'day').format('D') },
        { id: 2, date: moment().add(1, 'day').format('ddd D') },
        { id: 3, date: moment().add(2, 'day').format('ddd D') },
        { id: 4, date: moment().add(3, 'day').format('ddd D') },
    ]

    const Midi = [
        {id: 1, date: '11:15'},
        {id: 2, date: '11:30'},
        {id: 3, date: '11:45'},
        {id: 4, date: '12:00'},
        {id: 5, date: '12:15'},
        {id: 6, date: '12:30'},
        {id: 7, date: '12:45'},
        {id: 9, date: '01:00'},
    ]
    const Soir = [
        {id: 1, date: '18:45'},
        {id: 2, date: '19:00'},
        {id: 3, date: '19:15'},
        {id: 4, date: '19:30'},
        {id: 5, date: '19:45'},
        {id: 6, date: '20:00'},
        {id: 7, date: '20:15'},
        {id: 9, date: '20:30'},
    ]
    
    
    useEffect(()=>{
        
    console.log(show, "show")
    },[show])


    const DateItem = ({data, key}) => {
        console.log(data.item.date, "data");
        return (
            <TouchableOpacity
                onPress={()=> onChangeValue(data?.item?.date)}
                disabled={show == 'Midi' ? false: true}
            >
                {
                    value == data.item.date ?
                    <View style={{width: '70%', height:responsiveFontSize(6), backgroundColor: '#F7BE00', marginVertical:responsiveFontSize(1), alignSelf:'center', borderRadius:responsiveFontSize(1), 
                    justifyContent:'center', alignItems:'center'
                    }}>
                          <MyText
                                        size={responsiveFontSize(2.2)}
                                        fw={'bold'}
                                        color={'white'}
                                        decoration={'none'}
                                        textAlign={'center'}
                                        Label={data.item.date}
                                    />
                    </View>:
                       <View style={{width: '70%', height:responsiveFontSize(6), backgroundColor: show == 'Midi' ?  '#8b0000': '#BDBDBD', marginVertical:responsiveFontSize(1), alignSelf:'center', borderRadius:responsiveFontSize(1), 
                       justifyContent:'center', alignItems:'center'
                       }}>
                             <MyText
                                           size={responsiveFontSize(2.2)}
                                           fw={'bold'}
                                           color={'white'}
                                           decoration={'none'}
                                           textAlign={'center'}
                                           Label={data.item.date}
                                       />
                       </View>
                }
         
            </TouchableOpacity>
        )
    }
    const DateItem1 = ({data, key}) => {
        return (
            <TouchableOpacity
            onPress={()=> onChangeValue(data?.item?.date)}
            disabled={show == 'Soir' ? false: true}
            >
                     {
                    value == data.item.date ?
            <View style={{width: '70%', height:responsiveFontSize(6),  backgroundColor: '#F7BE00', marginVertical:responsiveFontSize(1), alignSelf:'center', borderRadius:responsiveFontSize(1), 
            justifyContent:'center', alignItems:'center'}}>
                 <MyText
                                size={responsiveFontSize(2.2)}
                                fw={'bold'}
                                color={'white'}
                                decoration={'none'}
                                textAlign={'center'}
                                Label={data.item.date}
                            />
            </View>:
               <View style={{width: '70%', height:responsiveFontSize(6), backgroundColor: show == 'Soir' ?  '#8b0000': '#BDBDBD', marginVertical:responsiveFontSize(1), alignSelf:'center', borderRadius:responsiveFontSize(1), 
               justifyContent:'center', alignItems:'center'}}>
                    <MyText
                                   size={responsiveFontSize(2.2)}
                                   fw={'bold'}
                                   color={'white'}
                                   decoration={'none'}
                                   textAlign={'center'}
                                   Label={data.item.date}
                               />
               </View>

    }
            </TouchableOpacity>
        )
    }


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.themeblue,
            }}>
            <OopsModal
                ModalState={show1}
                ChangeModalState={setshow1}
                nav={navigation}
                dada={'Vous devez sélectionner une heure pour valider'}
            />
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
                        text={'Choix de l’heure de retrait'}
                        odd={true}
                        call={() => navigation.goBack()}
                    />
                </View>
            </View>
            <View
                style={{
                    height: responsiveHeight(100),
                    width: '100%',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                }}>
                <View style={styles.container}>
                    <View style={styles.ctn1}>
                        {/* <ScrollView> */}
                            <View style={{ height: responsiveScreenFontSize(7), }}>
                                <FlatList
                                    horizontal={true}
                                    data={data}
                                    contentContainerStyle={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginHorizontal: responsiveScreenFontSize(3),
                                    }}
                                    style={{ flex: 1 }}
                                    ListFooterComponent={<View style={{ width: 100 }} />}
                                    ListHeaderComponentStyle={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 50,
                                    }}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, i) => i.toString()}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeOnTouch(item.id)}>
                                                <View
                                                    style={{
                                                        backgroundColor:
                                                            onTouch == item.id ? colors.themeblue : '#BDBDBD',
                                                        //   padding: responsiveScreenFontSize(2),
                                                        borderRadius: responsiveScreenFontSize(1),
                                                        marginHorizontal: responsiveScreenFontSize(0.8),
                                                        width: 120,
                                                        height: responsiveScreenFontSize(6),
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        shadowColor: "#000",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 2,
                                                        },
                                                        shadowOpacity: 0.25,
                                                        shadowRadius: 3.84,

                                                        elevation: 5,

                                                    }}
                                                    key={index}>
                                                    <Text style={{
                                                        fontSize: responsiveScreenFontSize(2),
                                                        color: 'white',
                                                        fontWeight: '800',
                                                        letterSpacing: 3
                                                    }}>
                                                        {(item.date).toUpperCase()}
                                                    </Text>
                                                    {/* <MyText
                                                        size={responsiveFontSize(2.5)}
                                                        fw={'bold'}
                                                        color={'white'}
                                                        decoration={'none'}
                                                        textAlign={'left'}
                                                        Label={item.date}
                                                    /> */}
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            </View>
                            <View style={{
                                width: '80%',
                                height: responsiveScreenFontSize(55),
                                backgroundColor: '#EDEDED',
                                alignSelf: 'center',
                                marginVertical: responsiveFontSize(2),
                                borderRadius: responsiveScreenFontSize(1),
                                flexDirection: 'row',
                                justifyContent: 'space-around', alignItems: 'center',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}>
                                <TouchableOpacity
                                // disabled
                                onPress={() => {
                                    onChangeValue(null)
                                    setshow('Midi')}} style={{
                                    width: '40%',
                                    height: responsiveScreenFontSize(44),
                                    backgroundColor: show == 'Midi' ? colors.themeblue: '#EDEDED',
                                    borderRadius: responsiveFontSize(2),
                                    padding: responsiveFontSize(1)

                                }}>
                                    <View style={{height:responsiveFontSize(4)}}>
                                        <MyText
                                        size={responsiveFontSize(2.5)}
                                        fw={'normal'}
                                        color={show == 'Midi' ? 'white' : 'black'}
                                        decoration={'none'}
                                        textAlign={'center'}
                                        Label={'Midi'}
                                    />
                                    </View>
                                <FlatList
                                   showsVerticalScrollIndicator={false}
                                   keyExtractor={(item, i) => i.toString()}
                                   data={Midi}
                                   renderItem={(item, index)=><DateItem data={item} key={index} />}
                                />

                                 
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    //   disabled
                                onPress={() => {
                                    onChangeValue(null)
                                    setshow('Soir')}} style={{
                                    width: '40%',
                                    height: responsiveScreenFontSize(44),
                                    backgroundColor: show == 'Soir' ? colors.themeblue : '#EDEDED',
                                    borderRadius: responsiveFontSize(2),
                                  padding: responsiveFontSize(1)

                                }}>
                                      <View style={{height:responsiveFontSize(4)}}>
                                      <MyText
                                        size={responsiveFontSize(2.5)}
                                        fw={'normal'}
                                        color={show == 'Soir' ? 'white' : 'black'}
                                        decoration={'none'}
                                        textAlign={'center'}
                                        Label={'Soir'}
                                    />
                                    </View>
                                      <FlatList
                                      

                                   showsVerticalScrollIndicator={false}
                                   keyExtractor={(item, i) => i.toString()}
                                   data={Soir}
                                   renderItem={(item, index)=><DateItem1 data={item} key={index} />}
                                />

                                </TouchableOpacity>
                            </View>
                            <View style={{
                  alignSelf:'center', width: '100%', justifyContent:'center', alignItems:'center', height:responsiveScreenFontSize(10)  
                }}>
                <Btn
                        text="Valider"
                        color={colors.themeblue}
                        pSText={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: responsiveFontSize(1.8),
                            marginHorizontal:responsiveFontSize(1)
                        }}
                        pS={{ width: '40%', height: responsiveFontSize(5) }}
                        textColor={colors.themeblue}
                        call={() => setshow1(true)}
                        loader={null}
                    />
                    </View>
                <View style={{height:responsiveScreenFontSize(30)}} />
                        {/* </ScrollView> */}
                    </View>
                </View>
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
        width: '100%',
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