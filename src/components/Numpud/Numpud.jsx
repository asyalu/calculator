import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { numberAction } from '../../redux/actions/numpudAction';
import { enterNumberAction } from '../../redux/actions/enterNumberAction';
import './Numpud.scss';

const Numpud = () => {
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

  const dispatch = useDispatch();

  const currnetNumber = useSelector((state) => state.currentNumber);
  const enterNumber = useSelector((state) => state.enterNumber);

  const setNumber = (number) => {
    if (currnetNumber === '0') {
      dispatch(numberAction(number));
    } else if (!enterNumber) {
      dispatch(numberAction(number));
      dispatch(enterNumberAction(true))
    } else {
      dispatch(numberAction(currnetNumber + number));
    }
  };

  return (
    <div className="numpud">
      {numbers.map((number) => (
        <button className="numpud__number" onClick={() => setNumber(number)} key={number}>
          {number}
        </button>
      ))}
      <button className="numpud__number numpud__zero" onClick={() => setNumber('0')}>
        0
      </button>
    </div>
  );
};

export default Numpud;
