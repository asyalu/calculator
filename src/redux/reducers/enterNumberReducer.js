import { ENTER_NUMBER } from '../actions/enterNumberAction';

const initialState = true;

export const setEnterNumber = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_NUMBER:
      return action.enter;
    default:
      return state;
  }
};