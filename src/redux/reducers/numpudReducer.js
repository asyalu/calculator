import { SET_NUMBER } from '../actions/numpudAction';

const initialState = '0';

export const setCurrentNumber = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return action.number;
    default:
      return state;
  }
};
