// @ts-nocheck
import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        resizeMode="cover"
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={require('../assets/loadingcircle.png')}>
        <Image
          resizeMode="contain"
          style={{height: 100, width: 100}}
          source={require('../assets/logo.png')}
        />
      </ImageBackground>
    </View>
  );
}
