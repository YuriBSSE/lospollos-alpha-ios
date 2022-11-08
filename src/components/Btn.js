import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import colors from '../assets/colors/colors';
import deviceInfo from 'react-native-device-info';

const tablet = deviceInfo.isTablet();
const Btn = ({text, call, color, loader, pS, pSText, disabled, textColor}) => {
  return (
    <TouchableOpacity
      disabled={loader || disabled ? true : disabled}
      onPress={call}
      style={[
        {
          ...styles.button,
          backgroundColor: color ? color : colors.themeblue,
        },
        pS,
        pSText,
      ]}>
      {loader ? (
        <ActivityIndicator
          size={responsiveFontSize(3)}
          color={colors.loaderWhite}
        />
      ) : (
        <Text
          style={[
            {
              color: textColor ? textColor : colors.themeColor,
              fontSize: responsiveFontSize(tablet ? 1.25 : 2),
            },
            pSText,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    borderRadius: responsiveFontSize(tablet ? 0.4 : 0.95),
    height: responsiveHeight(5.7),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Btn;
