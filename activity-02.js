function simple_calculator(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero!";
    }
    return a / b;
  }
  
  console.log(`Addition 10 + 5: ${simple_calculator(10, 5, add)}`);
  console.log(`Subtraction 10 - 5: ${simple_calculator(10, 5, subtract)}`);
  console.log(`Multiplication 10 * 5: ${simple_calculator(10, 5, multiply)}`);
  console.log(`Division 10 / 5: ${simple_calculator(10, 5, divide)}`);
  console.log(`Division by zero 10 / 0: ${simple_calculator(10, 0, divide)}`);
