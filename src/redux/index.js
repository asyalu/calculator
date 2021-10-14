import { combineReducers, createStore } from 'redux';
import { setCurrentNumber } from './reducers/numpudReducer';
import { setCurrentSign } from './reducers/signReducer';
import { setEnterNumber } from './reducers/enterNumberReducer';
import { setPrevNumber } from './reducers/prevNumberReducer';
import { setMemory } from './reducers/memoryReducer';

const rootReducer = combineReducers({
  currentNumber: setCurrentNumber,
  currentSign: setCurrentSign,
  enterNumber: setEnterNumber,
  prevNumber: setPrevNumber,
  memory: setMemory,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
