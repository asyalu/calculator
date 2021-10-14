import { SET_PREV_NUMBER } from '../actions/prevNumberAction';

const initialState = '';

export const setPrevNumber = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREV_NUMBER:
      return action.number;
    default:
      return state;
  }
};
