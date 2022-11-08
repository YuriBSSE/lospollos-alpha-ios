// @ts-nocheck
import {View, Text, ImageBackground, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import Heading from '../../components/Heading';
import Btn from '../../components/Btn';
import colors from '../../assets/colors/colors';
export default function WalkthroughScreens({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent
      />

      <ImageBackground
        style={{flex: 1}}
        resizeMode="cover"
        source={require('../../assets/background.png')}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            // backgroundColor:"white",
            height: responsiveHeight(50),
            bottom: 10,
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Heading
              width={'70%'}
              color={'white'}
              align={'center'}
              fontWeight={'bold'}
              text="Spécialiste du Poulet Braisé"
            />
          </View>
          <View
            style={{
              height: responsiveHeight(15),
              //  backgroundColor:'white',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Btn
              text="Se connecter"
              color={'white'}
              pSText={{
                fontWeight: 'bold',
              }}
              textColor={colors.themeblue}
              call={() => navigation.navigate('login')}
              loader={null}
            />
            <Btn
              pSText={{
                fontWeight: 'bold',
              }}
              text="Créer un nouveau compte"
              color={'#353535'}
              call={() => navigation.navigate('signup')}
              loader={null}
            />
          </View>
          <View
            style={{
              height: responsiveHeight(10),
              // backgroundColor: 'white',
              alignItems:'center',
              alignSelf:'center',
              justifyContent:'center'
            }}>
               <TouchableOpacity style={{ width: responsiveWidth(50) }} onPress={() => console.log("AA")}>
             <Text style={{ color: '#fac414', fontWeight: '400' ,fontSize:responsiveFontSize(2), textAlign:'center', textDecorationLine:'underline', textDecorationStyle:'italic' }}>S'enregistrer plus tard</Text>
          </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}
