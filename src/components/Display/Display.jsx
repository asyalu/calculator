import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Display.scss';

const Display = () => {
  const currnetNumber = useSelector((state) => state.currentNumber);
  const currentSign = useSelector((state) => state.currentSign);

  return (
    <div className="display">
      <div className="display__output">{currnetNumber.length > 6 ? (+currnetNumber).toFixed(7) : currnetNumber}</div>
      <div className="display__sign">{currentSign}</div>
    </div>
  );
};

export default Display;
