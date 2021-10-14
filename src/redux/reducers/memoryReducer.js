import { PLUS_MEMORY } from '../actions/memoryAction';
import { MINUS_MEMORY } from '../actions/memoryAction';
import { RESET_MEMORY } from '../actions/memoryAction';

const initialState = 0;

export const setMemory = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_MEMORY:
      return +state + +action.number;
    case MINUS_MEMORY:
      return +state - +action.number;
    case RESET_MEMORY:
      return 0;
    default:
      return state;
  }
};
