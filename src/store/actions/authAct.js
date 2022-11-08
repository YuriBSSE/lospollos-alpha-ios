// @ts-nocheck
// import LosPollos from './../../config/LosPollos';
// import config from '../../config/config';
import {LOSPOLLOS_LOGIN, LOSPOLLOS_LOGIN_ERROR} from './type';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message';
// import deviceInfo from 'react-native-device-info';

export const loginAct = (password, email) => async dispatch => {
  try {
    dispatch({
      type: LOSPOLLOS_LOGIN,
      payload: {
        login: true,
      },
    });
    console.log("TRUE")
  } catch (err) {
    dispatch({
      type: LOSPOLLOS_LOGIN_ERROR,
      payload: null,
    });
  }
};
