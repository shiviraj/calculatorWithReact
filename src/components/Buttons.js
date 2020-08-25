import React from 'react';
import Button from './Button';

const buttonTexts = [
  ['C', '^', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['00', '0', '.', '='],
];

export default (props) => {
  const buttons = buttonTexts.map((row) => {
    return row.map((text) => (
      <Button key={text} text={text} handleClick={props.handleClick} />
    ));
  });
  return <div className="buttons">{buttons}</div>;
};
