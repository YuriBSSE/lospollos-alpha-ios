// @ts-nocheck
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Heading from '../../components/Heading';
import Btn from '../../components/Btn';
import {connect} from 'react-redux';
import colors from '../../assets/colors/colors';
import * as Actions from '../../store/actions/authAct';
const WalkthroughScreens = ({navigation, loginAct}) => {
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
                color:'white'
              }}
              text="Créer un nouveau compte"
              color={'#353535'}
              call={() => navigation.navigate('signup')}
              loader={null}
            />
          </View>
          <View
            style={{
              height: responsiveHeight(5),
              // backgroundColor: 'white',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                console.log('ASD');
                loginAct('ahsanmuneer81@gmail.com', '1234567');
              }}
              style={{width: responsiveWidth(50)}}>
              <Text
                style={{
                  color: '#fac414',
                  fontWeight: '400',
                  fontSize: responsiveFontSize(2),
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                }}>
                S'enregistrer plus tard
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default connect(null, Actions)(WalkthroughScreens);
