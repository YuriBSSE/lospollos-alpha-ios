// @ts-nocheck
// import LosPollos from './../../config/LosPollos';
// import config from '../../config/config';
import {LOCATION} from './type';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message';
// import deviceInfo from 'react-native-device-info';

export const locationAction = (latitude, longitude) => async dispatch => {
    console.log(latitude, "locationAction");
        console.log(longitude, "locationAction");
    dispatch({
      type: LOCATION,
      payload: {
        latitude: latitude,
        longitude: longitude
      },
    });
  
 
};
