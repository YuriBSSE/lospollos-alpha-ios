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
    ScrollView,
    Dimensions,
    Keyboard
} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Avatar } from 'react-native-elements';
import BackBtnHeader from '../../../components/BackBtnHeader';
import { CommonActions } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EarningIcon from 'react-native-vector-icons/FontAwesome5';
import PurchasesIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
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
import MapView, { PROVIDER_GOOGLE, Circle, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import InputField from '../../../components/InputField';
import Btn from '../../../components/Btn';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0925;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function NavigationOrder({ navigation, locationRed }) {
    const _map = React.useRef(null);
    // const GOOGLE_MAPS_APIKEY = 'AIzaSyBStPDYl2bu_pA_G3XRzWA5eEWc_yBGBx4' meri
    const GOOGLE_MAPS_APIKEY = 'AIzaSyDsrIMPxnUkU92Jn4kF_I-0uFb-KWzT8zY'
    const [enable, onChangeEnable] = useState(false)
    const [submit, setSubmit] = useState(false);
    const [state, setState] = React.useState({
        latitude: locationRed?.latitude,
        longitude: locationRed?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    const [fields, setFields] = useState({
        Address: '',
        City: '',
    });
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
                        <HomeIcon
                            style={{ marginLeft: responsiveFontSize(2) }}
                            name="close"
                            size={responsiveFontSize(2.5)}
                            color={'white'}
                        />
                    </TouchableOpacity>
                    <MyText
                        style={{ marginLeft: responsiveFontSize(2) }}
                        size={responsiveFontSize(2.5)}
                        fw={'normal'}
                        color={'white'}
                        decoration={'none'}
                        Label={'Mon compte'}
                    />
                </View> */}
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


    const [keyboardStatus, setKeyboardStatus] = useState(false);
    console.log(keyboardStatus, "keyboardStatus")
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);


    useEffect(() => {
        console.log(locationRed, "locationRed");
    }, [])

    function getValue(k, v) {
        setFields(pS => {
            return {
                ...pS,
                [k]: v,
            };
        });
    }


    const zoomlocation = (z) => {
        console.log(z)
        var currntlat = state.latitude;
        var currntlgn = state.longitude;
        onChangeZoomLevel(z)
        setState({
            latitude: currntlat,
            longitude: currntlgn,
            latitudeDelta: z * 2.5,
            longitudeDelta: z * 2.5,
        })
    }
    const onRegionChange = (mark) => {
        const Delta = 0.025
        console.log(mark.nativeEvent.coordinate)
        console.log(mark)
        setState({
            latitude: mark.nativeEvent.coordinate.latitude,
            longitude: mark.nativeEvent.coordinate.longitude,
            latitudeDelta: Delta,
            longitudeDelta: Delta
        })
    }

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
                    zIndex: 9999
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
                        text={'Périmètre de livraison'}
                        odd={true}
                        call={() => navigation.goBack()}
                    />
                </View>
            </View>
            {/* <View
                style={{
                    backgroundColor: colors.themeblue,
                    width: '100%',
                    height: responsiveFontSize(8),
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center', zIndex: 9999
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <HomeIcon
                        style={{ marginLeft: responsiveFontSize(2) }}
                        name="close"
                        size={responsiveFontSize(2.5)}
                        color={'white'}
                    />
                </TouchableOpacity>
                <MyText
                    style={{ marginLeft: responsiveFontSize(2) }}
                    size={responsiveFontSize(2.5)}
                    fw={'bold'}
                    color={'white'}
                    decoration={'none'}
                    Label={'Périmètre de livraison'}
                />
            </View> */}

            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={[styles.map, {
                        marginBottom: enable ? responsiveFontSize(15) : responsiveFontSize(0)
                    }]}
                    initialRegion={state?.region}
                    onMarkerDragEnd={onRegionChange}
                    ref={_map}
                    pitchEnabled={false} rotateEnabled={false} zoomEnabled={false} scrollEnabled={false}
                    region={state}
                >
                    {
                        enable ?
                            <>
                                <MapViewDirections
                                    origin={{
                                        "latitude": state.latitude,
                                        "longitude": state.longitude
                                    }}
                                    destination={{
                                        "latitude": state.latitude + 0.0119,
                                        "longitude": state.longitude + 0.0119
                                    }}
                                    strokeColor={'#C12F2F'}
                                    strokeWidth={3}
                                    apikey={GOOGLE_MAPS_APIKEY}
                                />
                                <Marker
                                    stopPropagation={false}

                                    style={{ position: 'absolute' }}
                                    onMarkerDragEnd={onRegionChange}

                                    coordinate={{
                                        "latitude": state.latitude,
                                        "longitude": state.longitude
                                    }}

                                >
                                    <Image
                                        source={require('../../../assets/marker1.png')}
                                        style={{ width: 26, height: 26 }}
                                        resizeMode="contain"
                                    />
                                </Marker>
                                <Marker
                                    stopPropagation={false}

                                    style={{ position: 'absolute' }}
                                    onMarkerDragEnd={onRegionChange}

                                    coordinate={{
                                        "latitude": state.latitude + 0.0119,
                                        "longitude": state.longitude + 0.0119
                                    }}

                                >
                                    <Image
                                        source={require('../../../assets/Frame.png')}
                                        style={{ width: 26, height: 26 }}
                                        resizeMode="contain"
                                    />
                                </Marker>

                                <Circle
                                    key={(state?.latitude + state?.longitude).toString()}
                                    center={state}
                                    radius={2200}
                                    strokeWidth={1}
                                    strokeColor={'#C12F2F'}
                                    fillColor={'rgba(176,17,37,0)'}
                                />
                                <Circle
                                    key={(state?.latitude + state?.longitude).toString()}
                                    center={state}
                                    radius={2100}
                                    strokeWidth={0.3}
                                    strokeColor={'#C12F2F'}
                                    fillColor={'rgba(176,17,37,0.1)'}
                                />
                            </> : null


                    }

                </MapView>
            </View>

            {
                enable ?
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: responsiveFontSize(25),
                            flexDirection: 'row',

                            alignItems: 'center', zIndex: 9999, position: 'absolute', bottom: 0,
                            borderTopRightRadius: 15, borderTopLeftRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            paddingBottom: responsiveFontSize(10),
                            elevation: 5,
                            flexDirection: 'row', justifyContent: 'space-around',
                        }}>
                        <Avatar
                            rounded
                            size={responsiveFontSize(10)}
                            source={require('../../../assets/name.png')}
                        />
                        <View style={{ width: '50%', }}>
                            <MyText
                                style={{}}
                                size={responsiveFontSize(2)}
                                fw={'bold'}
                                color={'black'}
                                decoration={'none'}
                                Label={'Entrer votre mot XX rue... 69000 LYON'}
                            />

                            <MyText
                                style={{}}
                                size={responsiveFontSize(1.6)}
                                fw={'bold'}
                                color={colors.themeblue}
                                decoration={'none'}
                                Label={'ETA: 15 min'}
                            />

                        </View>
                        <View style={{
                            backgroundColor: '#33942B',
                            width: '15%',
                            height: responsiveFontSize(7),
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            borderRadius: responsiveFontSize(1),
                            elevation: 5,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <FontAwesome
                                style={{}}
                                name="phone"
                                size={responsiveFontSize(4)}
                                color={'white'}
                            />
                        </View>
                    </View> :

                    <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(235, 235, 235, 0.9)', 'white']} style={[styles.linearGradient, {
                        height: keyboardStatus ? responsiveFontSize(40) : responsiveFontSize(70),
                    }]}>

                        <View style={{ width: '80%', height: responsiveFontSize(45), justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center', }}>
                            <MyText
                                style={{ textAlign: 'center', }}
                                size={responsiveFontSize(3.4)}
                                fw={'normal'}
                                textAlign={'center'}
                                color={'black'}
                                decoration={'none'}
                                Label={'Veuillez saisir votre adresse'}
                            />
                            <InputField
                                error={!fields.Address && submit}
                                returnKeyType="next"
                                getValue={v => getValue('Address', v)}
                                password={false}
                                value={fields.Address}
                                placeHolder="Adresse"
                                smallCaps={true}
                                MyBorderColor={'black'}
                                color={'#BDBDBD'}
                            />
                            <InputField
                                error={!fields.City && submit}
                                returnKeyType="next"
                                getValue={v => getValue('City', v)}
                                password={false}
                                value={fields.City}
                                placeHolder="Zone de la ville"
                                smallCaps={true}
                                MyBorderColor={'black'}
                                color={'#BDBDBD'}
                            />
                            <Btn
                                text="utiliser ma position actuelle"
                                color={colors.themeblue}
                                pSText={{
                                    fontWeight: 'normal',
                                    color: 'white'
                                }}
                                textColor={colors.themeblue}
                                call={()=> onChangeEnable(true)}
                                loader={null}
                            />
                                    <Btn
                                text="Enregistrer mon adresse"
                                color={'#383838'}
                                pSText={{
                                    fontWeight: 'normal',
                                    color: 'white'
                                }}
                                textColor={colors.themeblue}

                                loader={null}
                            />
                        </View>

                    </LinearGradient>


            }




        </View>
    )
}

function mapStateToProps({ locationRed }) {
    return { locationRed };
}

export default connect(mapStateToProps, null)(NavigationOrder);
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    linearGradient: {
        width: '100%',

        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        zIndex: 99999,
        opacity: 1,
        position: 'absolute', bottom: 0,
    },
});