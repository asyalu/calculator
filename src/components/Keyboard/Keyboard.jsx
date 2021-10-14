import React from 'react';
import Memory from '../Memory/Memory';
import Numpud from '../Numpud/Numpud';
import Signs from '../Signs/Signs';
import './Keyboard.scss';

const Keyboard = () => {
  const asd = 123;
  return (
    <div className="keyboard">
      <div className="first">
        <Memory />
      </div>
      <div className="second">
        <Signs />
      </div>
      <div className="third">
        <Numpud />
      </div>
    </div>
  );
};

export default Keyboard;
