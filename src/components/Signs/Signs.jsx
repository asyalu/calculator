import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signAction } from '../../redux/actions/signAction';
import { numberAction } from '../../redux/actions/numpudAction';
import { prevNumbAction } from '../../redux/actions/prevNumberAction';
import { enterNumberAction } from '../../redux/actions/enterNumberAction';
import './Signs.scss';

const Signs = () => {
  const signs = ['÷', '×', '+', '-'];
  const [signState, setSignState] = useState('')

  const dispatch = useDispatch();
  const prevNumber = useSelector((state) => state.prevNumber);
  const currentNumber = useSelector((state) => state.currentNumber);

  const setSign = (sign) => {
    if (prevNumber.length > 0) {
      switch (signState) {
        case '÷':
          dispatch(prevNumbAction(`${+prevNumber / +currentNumber}`));
          dispatch(numberAction(`${+prevNumber / +currentNumber}`));
          break;
        case '×':
          dispatch(prevNumbAction(`${+prevNumber * +currentNumber}`));
          dispatch(numberAction(`${+prevNumber * +currentNumber}`));
          break;
        case '+':
          dispatch(prevNumbAction(`${+prevNumber + +currentNumber}`));
          dispatch(numberAction(`${+prevNumber + +currentNumber}`));
          break;
        case '-':
          dispatch(prevNumbAction(`${+prevNumber - +currentNumber}`));
          dispatch(numberAction(`${+prevNumber - +currentNumber}`));
          break;
        default:
          break;
      }
    } else {
      dispatch(prevNumbAction(currentNumber));
    }
    setSignState(sign);
    dispatch(signAction(sign));
    dispatch(enterNumberAction(false));
  };

  const sumNumber = () => {
    switch (signState) {
      case '÷':
        dispatch(numberAction(`${+prevNumber / +currentNumber}`));
        break;
      case '×':
        dispatch(numberAction(`${+prevNumber * +currentNumber}`));
        break;
      case '+':
        dispatch(numberAction(`${+prevNumber + +currentNumber}`));
        break;
      case '-':
        dispatch(numberAction(`${+prevNumber - +currentNumber}`));
        break;
      default:
        break;
    }
    dispatch(prevNumbAction(''));
    dispatch(signAction(''));
    dispatch(enterNumberAction(false));
  }

  return (
    <div className="signs">
      {signs.map((sign) => (
        <button className="signs__sign" onClick={() => setSign(sign)} key={sign}>
          {sign}
        </button>
      ))}
      <button className="signs__sign" onClick={sumNumber}>=</button>
    </div>
  );
};

export default Signs;
