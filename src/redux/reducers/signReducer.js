import { SET_SIGN } from '../actions/signAction';

const initialState = '';

export const setCurrentSign = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN:
      return action.sign;
    default:
      return state;
  }
};
