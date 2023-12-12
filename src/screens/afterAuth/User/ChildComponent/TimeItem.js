// @ts-nocheck
import React, { useState, useEffect, useMemo, useContext, useRef } from 'react';
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
    ImageBackground
} from 'react-native';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../../assets/colors/colors';
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveScreenFontSize
} from 'react-native-responsive-dimensions';
import MyText from '../../../../components/MyText';
let { width, height } = Dimensions.get('window');

export default function TimeItem({ navigation, data, }) {
    const [select, onChangeSelect] = useState(null)
    console.log(select)
    return (
        <TouchableOpacity
            key={data}
            onPress={()=> onChangeSelect(data)}
            style={{
                backgroundColor: select == data ? colors.themeblue : '#666666',
                elevation: 5,
                width:130,
                height: responsiveScreenFontSize(7),
                // paddingVertical:responsiveScreenFontSize(0.8),
                borderRadius: responsiveScreenFontSize(1),
                // paddingHorizontal: responsiveScreenFontSize(3),
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: responsiveFontSize(1),
                marginVertical: responsiveFontSize(1),
                flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center'
            }}>
            <MyText
                size={responsiveFontSize(2)}
                fw={'bold'}
                color={'white'}
                decoration={'none'}
                textAlign={'center'}
                Label={'Lundi'}
            />
             <MyText
                size={responsiveFontSize(1.8)}
                fw={'bold'}
                color={'white'}
                decoration={'none'}
                textAlign={'center'}
                Label={'00:00 - 00:00'}
            />
        </TouchableOpacity>
    )
}