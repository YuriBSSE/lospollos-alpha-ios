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
    responsiveWidth,

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
import rowFormate from '../../../utils/rowFormate';
import { useNavigation } from '@react-navigation/native';
import MyText from '../../../components/MyText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import * as authAct from '../store/actions/authAct';
import deviceInfo from 'react-native-device-info';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import OrderDetails from '../User/ChildComponent/OrderDetails';
import OrderModal from '../../Modal/OrderModal'
import BackBtnHeader from '../../../components/BackBtnHeader';
import Item from './Child/Item';
import BottomItem from './Child/BottomItem';
let { width, height } = Dimensions.get('window');

export default function CartScreen({ navigation }) {
    const [show, setshow] = useState(false);
    const data1 = [
        {
          id: 1,
          title: 'Poulet braisé entier',
          des: 'Nombre au choix',
          amount: '100',
        },
        {
          id: 2,
          title: 'Poulet braisé entier',
          des: 'Nombre au choix',
          amount: '1200',
        },
        {
          id: 3,
          title: 'Poulet braisé entier',
          des: 'Nombre au choix',
          amount: '300',
        },
        {
          id: 4,
          title: 'Poulet braisé entier',
          des: 'Nombre au choix',
          amount: '400',
        },
        {
          id: 5,
          title: 'Poulet braisé entier',
          des: 'Nombre au choix',
          amount: '20',
        },
        {
          id: 6,
          title: 'Poulet braisé entier',
          des: 'Nombre au choix',
          amount: '30',
        },
        {
            id: 7,
            title: 'Poulet braisé entier',
            des: 'Nombre au choix',
            amount: '450',
          },
      ];
// console.log(rowFormate(data1, 2), "rowFormate(data1, 2)");
    if (!show) {
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
                            text={'Mon panier'}
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
                        <View>
                            <View style={styles.ctn1}>
                                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                                    <Image
                                        resizeMode="contain"
                                        style={{ height: 300, width: 300 }}
                                        source={require('../../../assets/basket.png')}
                                    />

                                    <View style={{ width: '80%', alignSelf: 'center', justifyContent: 'space-around', height: responsiveFontSize(20), alignItems: 'center' }}>
                                        <MyText
                                            size={responsiveFontSize(3)}
                                            fw={'normal'}
                                            color={'black'}
                                            decoration={'none'}
                                            textAlign={'center'}
                                            Label={'Il n’y a pas d’article dans votre panier'}
                                        />
                                        <MyText
                                            size={responsiveFontSize(1.9)}
                                            fw={'bold'}
                                            color={'#b8b8b8'}
                                            decoration={'none'}
                                            textAlign={'center'}
                                            Label={'Parcourez notre menu !'}
                                        />
                                        <Btn
                                            text="J’y vais !"
                                            color={colors.themeblue}
                                            pSText={{
                                                fontWeight: 'bold',
                                                color: 'white',
                                                fontSize: responsiveFontSize(1.8)
                                            }}
                                            pS={{ width: '60%' }}
                                            textColor={colors.themeblue}
                                            call={() => setshow(true)}
                                            loader={null}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
          <View>
            <Item {...item[0]} />
            <Item {...item[1]} />
          </View>
        );
      }
    
      const keyExtractor = (item) => {
        return item.id;
      }
    

    return (
        <>
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
                        left={true}
                        cross={false}
                        text={'Mon panier'}
                        odd={true}
                        call={() => navigation.goBack()}
                    />
                </View>
            </View>
            <View style={{
                marginVertical: responsiveFontSize(2),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 9,
                backgroundColor: '#21B12F',
                width: '93%',
                height: responsiveFontSize(10),
                borderRadius: responsiveFontSize(2), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flexDirection: 'row'
            }}>
                <Image source={require('../../../assets/celebration.png')} style={{
                    height: 40, width: 40
                }} />
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '60%', }}>
                    <MyText
                        size={responsiveFontSize(1.7)}
                        fw={'normal'}
                        color={'white'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Un code promo vous attends !'}
                    />
                    <MyText
                        size={responsiveFontSize(1.4)}
                        fw={'bold'}
                        color={'white'}
                        decoration={'none'}
                        textAlign={'left'}
                        Label={'Encore 2€ pour bénéficier de -10% sur votre commande'}
                    />
                </View>
                <View style={{
                    width: '20%', height: responsiveFontSize(8),

                    alignItems: 'flex-end', justifyContent: 'flex-end'
                }}>
                    <Btn
                        text="J’ajoute !"
                        color={'#F7BE00'}
                        pSText={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: responsiveFontSize(1.8)
                        }}
                        pS={{ width: '100%', height: responsiveFontSize(4) }}
                        textColor={colors.themeblue}
                        call={() => setshow(true)}
                        loader={null}
                    />
                </View>
            </View>




            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center', }}>
            <FlatList
                data={rowFormate(data1, 2)}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal={true}
                ListHeaderComponent={<View style={{width:10}}></View>}
                ListFooterComponent={<View style={{width:10}}></View>}
                    />
            
            </View>
            <View style={{ width: '90%', alignSelf: 'center', justifyContent: 'flex-start', backgroundColor:'#EDEDED', borderRadius:responsiveFontSize(2), marginTop:responsiveFontSize(2), paddingVertical:responsiveFontSize(2) }}>
            <View style={{paddingLeft: 10}}>
            <MyText
                                            size={responsiveFontSize(2)}
                                            fw={'normal'}
                                            color={'black'}
                                            decoration={'none'}
                                            textAlign={'left'}
                                            Label={'Complétez votre commande avec'}
                                        />
                                        </View>
            <FlatList
                //   style={{alignSelf:'center'}}
                  data={[1,2,3,4]}
            
                  horizontal={true}
                  ListHeaderComponent={<View style={{width:10}}></View>}
                  ListFooterComponent={<View style={{width:10}}></View>}
    
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, i) => i.toString()}
                  renderItem={({item, index}) => 
                  <BottomItem data={item} navigation={navigation} key={index} />
                  }
                />
            
            </View>
             
                <View style={{height:responsiveFontSize(20)}} />
        </ScrollView>
             <View style={{position:'absolute',bottom: responsiveFontSize(13), right: responsiveFontSize(2.5), width:'40%'}}>
             <Btn
                                       text="23€  Continuer"
                                       color={'#F7BE00'}
                                       pSText={{
                                           fontWeight: '800',
                                           color: 'white',
                                           fontSize: responsiveFontSize(1.8)
                                       }}
                                       pS={{ width: '100%' }}
                                       textColor={'white'}
                                       call={() => navigation.navigate('cartorderprocess')}
                                       loader={null}
                                   />
             </View>
            </>
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
    col:{
        flexDirection:"column",
       
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
