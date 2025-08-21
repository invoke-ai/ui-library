const evaluateSimpleExpression = (expression: string): number => {
  try {
    // Remove whitespace
    const expr = expression.replace(/\s+/g, '');

    // Split by operators but keep them
    const tokens = expr.split(/([+\-*/])/).filter((token) => token !== '');

    // First pass: handle multiplication and division
    const intermediate: (string | number)[] = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (token === undefined) {
        throw new Error('Invalid expression');
      }

      if (token === '*' || token === '/') {
        const operator = token;

        const leftToken = intermediate.pop();
        if (leftToken === undefined) {
          throw new Error('Invalid expression');
        }
        const leftOperand = typeof leftToken === 'number' ? leftToken : parseFloat(leftToken);

        const rightToken = tokens[i + 1];
        if (rightToken === undefined) {
          throw new Error('Invalid expression');
        }
        const rightOperand = parseFloat(rightToken);

        if (operator === '*') {
          intermediate.push(leftOperand * rightOperand);
        } else {
          if (rightOperand === 0) {
            throw new Error('Division by zero');
          }
          intermediate.push(leftOperand / rightOperand);
        }
        i++; // Skip the right operand
      } else {
        intermediate.push(token);
      }
    }

    // Second pass: handle addition and subtraction
    const firstOperandToken = intermediate[0];
    if (firstOperandToken === undefined) {
      throw new Error('Invalid expression');
    }
    let result = typeof firstOperandToken === 'number' ? firstOperandToken : parseFloat(firstOperandToken);

    for (let i = 1; i < intermediate.length; i += 2) {
      const operator = intermediate[i];
      if (typeof operator !== 'string') {
        throw new Error('Invalid expression');
      }
      const operandToken = intermediate[i + 1];
      if (typeof operandToken !== 'string') {
        throw new Error('Invalid expression');
      }
      const operand = parseFloat(operandToken);

      if (operator === '+') {
        result += operand;
      } else if (operator === '-') {
        result -= operand;
      }
    }

    return result;
  } catch {
    return NaN; // Return NaN if the expression is invalid
  }
};

export default evaluateSimpleExpression;
