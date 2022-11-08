// @ts-nocheck
import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

export default function Heading({
    text, color, fontsize, align,width,fontWeight
}) {
  return (
    <View style={{
        justifyContent:'center', alignItem:'center', width: width
    }}>
      <Text style={{
        fontWeight: fontWeight,
        
        color: color,
        textAlign: align,
        fontSize: fontsize ? fontsize : responsiveFontSize(4),
      }}>{text}</Text>
    </View>
  )
}