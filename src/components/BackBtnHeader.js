// @ts-nocheck
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '../assets/colors/colors';

export default function BackBtnHeader({text, call, left, right, full, odd}) {
  return (
    <View style={{ height: 50, width: '90%', alignSelf:'center',}}>
      <TouchableOpacity onPress={call} style={{ flexDirection:'row', justifyContent:'flex-start', alignItems:'center' }}>
        <Ionicons
          style={{
        
          }}
          name="md-chevron-back-sharp"
          size={responsiveFontSize(3)}
          color={odd ? "white" : colors.themeblue}
        />
        <Text style={{color: odd ? "white" : colors.themeblue, fontSize: responsiveFontSize(2), fontWeight: '800', left: 30}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
