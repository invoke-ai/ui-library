const evaluateSimpleExpression = (expr: string): number => {
  // Tokenize input: numbers and operators
  const tokens = expr.match(/\d+(\.\d+)?|[+\-*/]/g);
  if (!tokens) {
    throw new Error("Invalid expression");
  }

  // Operator precedence
  const precedence: Record<string, number> = { "+": 1, "-": 1, "*": 2, "/": 2 };
  const output: (string | number)[] = [];
  const operators: string[] = [];

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      // Number
      output.push(Number(token));
    } else if (token in precedence) {
      // Operator
      while (
        operators.length &&
        precedence[operators[operators.length - 1]!]! >= precedence[token]!
      ) {
        output.push(operators.pop()!);
      }
      operators.push(token);
    } else {
      throw new Error(`Unknown token: ${token}`);
    }
  }

  // Drain remaining operators
  while (operators.length) {
    output.push(operators.pop()!);
  }

  // Evaluate RPN
  const stack: number[] = [];
  for (const token of output) {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) {
        throw new Error("Invalid expression");
      }
      switch (token) {
        case "+": stack.push(a + b); break;
        case "-": stack.push(a - b); break;
        case "*": stack.push(a * b); break;
        case "/": stack.push(a / b); break;
      }
    }
  }

  if (stack.length > 1) {
    throw new Error("Invalid evaluation");
  }

  return stack[0]!;
}

export default evaluateSimpleExpression;
