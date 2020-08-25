import React from 'react';

export default (props) => {
  return (
    <div className="screen">
      <div className="row-1">{props.text}</div>
      <div className="row-2">{props.result}</div>
    </div>
  );
};
