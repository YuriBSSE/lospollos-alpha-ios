import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import colors from '../assets/colors/colors';
import CheckIcon from 'react-native-vector-icons/FontAwesome5';
import deviceInfoModule from 'react-native-device-info';

const tablet = deviceInfoModule.isTablet();

const ShippingAddressCard = ({
  onPressCard,
  onEdit,
  onDelete,
  address,
  cardCont,
  isShowBtns=true
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPressCard} style={[styles.shipCardCont,cardCont]}>
        <View
          style={{
            width: '90%',
          }}>
          <Text>{`${address?.firstName} ${address?.lastName}`}</Text>
          <Text>{`${address?.address1}`}</Text>
          {(address?.address2 !== "" && address?.address2) && <Text>{`${address?.address2}`}</Text>}
          <Text>{`${address?.country}, ${address?.province}`}</Text>
          <Text>{address?.city}</Text>
          {isShowBtns && <View style={styles.cardBtnCont}>
            <TouchableOpacity
              onPress={onEdit}
              style={{...styles.crdBtn, backgroundColor: colors.themeblue}}>
              <Text style={{color: 'white'}}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onDelete}
              style={{
                ...styles.crdBtn,
                backgroundColor: colors.themeblue,
                marginLeft: '2%',
              }}>
              <Text style={{color: 'white'}}>Delete</Text>
            </TouchableOpacity>
          </View>}
        </View>
        <View
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {address?.is_default && (
            <CheckIcon
              name="check"
              size={responsiveFontSize(tablet ? 1 : 2)}
              color={colors.themeblue}
              style={{right: 0}}
            />
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ShippingAddressCard;

const styles = StyleSheet.create({
  crdBtn: {
    paddingHorizontal: '8%',
    paddingVertical: responsiveHeight(0.5),
    borderRadius: responsiveFontSize(0.5),
  },
  shipCardCont: {
    borderWidth: 1,
    borderColor: '#cecece',
    backgroundColor:'white',
    borderRadius: responsiveFontSize(0.5),
    paddingVertical: responsiveHeight(1.4),
    paddingHorizontal: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3%',
  },
  cardBtnCont: {
    flexDirection: 'row',
    paddingVertical: responsiveHeight(1),
  },
});
