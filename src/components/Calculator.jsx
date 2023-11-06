import React, { useState } from 'react';
import Title from './Title';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import BeautifulScreen from './BeautifulScreen';
import '../../src/App.css'; // Import the CSS file

function Calculator() {
  const [operation, setOperation] = useState('');

  const click = (value) => {
    let concat = operation.concat(value.toString());
    setOperation(concat);
    console.log('Operation:', value);
  }

  const calculate = () => {
    try {
      const calculateResult = eval(operation);
      setOperation(String(calculateResult));
    } catch (error) {
      setOperation('Error');
    }
  }

  const clear = () => {
    setOperation('');
  }

  return (
    <div className="calculator-container">
      <Title text="Calculator 9000" />
      <BeautifulScreen displayOperation={operation} />
      <div className="button-container">
        <NumberButton handleClick={click} />
        <OperatorButton handleClick={click} />
        <EqualButton handleClick={calculate} />
        <button className="clear-button" onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
