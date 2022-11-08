import { StyleSheet, Text, View, ImageBackground, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from "../assets/colors/colors"
import deviceInfo from 'react-native-device-info';
const tablet = deviceInfo.isTablet();

export default function LiveBox({ liveText,call,item }) {
    return (
        <TouchableOpacity onPress={call}>
            <ImageBackground
                style={styles.con}
                source={item?{uri:item.banner}:require('../assets/picture.webp')
            }
            >
                <View style={styles.overlay} />
                <View style={styles.liveCon}>
                    <Text style={styles.liveText}>{liveText}</Text>
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={styles.head}>{item?item.title:"FASHION FAIR MAKEUP RELAUNCHING"}</Text>
                <View style={styles.bottom}>
                    <Image
                        style={{ 
                            width: tablet?30:20, 
                            height: tablet?30:20, 
                            borderRadius: tablet?30:20 
                        }}
                        source={item?{uri:item.brand_profile}:require('../assets/logo22new.png')}
                    />
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(tablet?0.65:1), marginLeft: responsiveFontSize(0.5) }}>{item?item?.brand_name:"DL1961"}</Text>
                </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    con: {
        width: responsiveWidth(tablet?20:35),
        height:responsiveHeight(tablet?20:25),
        marginRight: responsiveFontSize(tablet?0.5:1),
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)'
      },
    liveText: {
        color: 'white',
        fontSize: responsiveFontSize(tablet?0.5:0.75)
    },
    liveCon: {
        backgroundColor: colors.themeblue,
        padding: responsiveFontSize(0.25),
        width: responsiveWidth(tablet?8:12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveFontSize(tablet?0.3:0.8),
        margin: responsiveFontSize(0.5)
    },
    head: {
        marginTop: responsiveHeight(8),
        color: 'white',
        fontWeight: 'bold',
        margin: responsiveFontSize(0.5),
        textTransform:'uppercase'
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: responsiveFontSize(0.5),
        marginVertical: responsiveFontSize(0.75)
    }
})