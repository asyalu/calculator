import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signAction } from '../../redux/actions/signAction';
import { numberAction } from '../../redux/actions/numpudAction';
import { prevNumbAction } from '../../redux/actions/prevNumberAction';
import { enterNumberAction } from '../../redux/actions/enterNumberAction';
import { minusMemoryAction, plusMemoryAction, resetMemryAction } from '../../redux/actions/memoryAction';
import './Memory.scss';

const Memory = () => {
  const dispatch = useDispatch();

  const memory = useSelector((state) => +state.memory);
  const currentNumber = useSelector((state) => state.currentNumber);

  const allClean = () => {
    dispatch(signAction(''));
    dispatch(numberAction('0'));
    dispatch(prevNumbAction(''));
    dispatch(enterNumberAction(true));
    dispatch(resetMemryAction())
  };

  return (
    <div className="memory">
      <button className="memory__button memory__ac" onClick={allClean}>
        AC
      </button>
      <button className="memory__button" onClick={() => dispatch(plusMemoryAction(currentNumber))}>
        MEM+
      </button>
      <button className="memory__button" onClick={() => dispatch(minusMemoryAction(currentNumber))}>
        MEM-
      </button>
      <button className="memory__button" onClick={() => dispatch(dispatch(numberAction(memory)))}>
        MR
      </button>
    </div>
  );
};

export default Memory;
