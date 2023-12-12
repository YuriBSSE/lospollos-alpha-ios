// @ts-nocheck
import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';

const MyText = ({
  decoration,
  Label,
  color,
  size,
  tf,
  family,
  textAlign,
  nol,
  style,
  fw
}) => {

  return (
    <Text
      numberOfLines={nol}
      style={[
        style && style,
        {
          color: color,
          fontFamily: family || 'FredokaOne-Regular',
          fontSize: size,
          textAlign: textAlign,
          flexShrink: 1,
          fontWeight: fw,
          
          textDecorationLine:decoration,
          textTransform: tf || 'none',
        },
      ]}>
      {Label}
    </Text>
  );
};
export default MyText;
