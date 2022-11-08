import {LOSPOLLOS, LOSPOLLOS_LOGIN,LOSPOLLOS_LOGIN_ERROR} from '../../actions/type';

const initialState = {};

export default function authRed(state = initialState, action) {
  switch (action.type) {
    case LOSPOLLOS_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
