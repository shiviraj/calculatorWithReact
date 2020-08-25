import React from 'react';

import Screen from './components/Screen';
import Buttons from './components/Buttons';
import { findResult, createArrayOfNumbers } from './utils';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', result: 0 };
    this.buttonClick = this.buttonClick.bind(this);
  }

  performCalculate() {
    const numbers = createArrayOfNumbers(this.state.text);
    this.setState({ text: '', result: findResult(numbers) });
  }

  performSpecialOperation(text) {
    if (text === 'C') {
      return this.setState({ text: '', result: 0 });
    }
    this.performCalculate();
  }

  buttonClick(e) {
    const button = e.target.innerText;
    if (button === 'C' || button === '=') {
      return this.performSpecialOperation(button);
    }
    this.setState((state) => ({ text: (state.text + button).slice(0, 21) }));
  }

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div className="calculator">
          <Screen text={this.state.text} result={this.state.result} />
          <Buttons handleClick={this.buttonClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
