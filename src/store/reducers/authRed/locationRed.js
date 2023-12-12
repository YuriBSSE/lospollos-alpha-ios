import {LOCATION} from '../../actions/type';

const initialState = {};

export default function locationRed(state = initialState, action) {
  switch (action.type) {
    case LOCATION:
      return action.payload;
    default:
      return state;
  }
}
