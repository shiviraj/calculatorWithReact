const operators = ['+', '-', '*', '/', '%', '^'];

const createArrayOfNumbers = (text) => {
  const numbers = [];
  let number = '0';
  for (let i = 0; i < text.length; i++) {
    if (operators.includes(text[i])) {
      numbers.push(+number, text[i]);
      number = '0';
    } else {
      number += text[i];
    }
  }
  return numbers.concat(+number);
};

const operate = (num1, operator, num2) => {
  if (num2 === undefined) return num1;
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return (num1 * num2) / 100;
    case '^':
      return num1 ** num2;
  }
};

const findResult = (array) => {
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (operators.includes(array[i])) {
      result = operate(result, array[i], array[++i]);
    }
  }
  return result;
};

export { findResult, createArrayOfNumbers };
