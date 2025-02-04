const numbers_array = [12, 7, 5, 20, 33, 42, 19, 8, 10];

function separateEvenOdd(numbers) {
    const even_numbers = [];
    const odd_numbers = [];
  
    for (const num of numbers) {
      if (num % 2 === 0) {
        even_numbers.push(num);
      } else {
        odd_numbers.push(num);
      }
    }
  
    console.log(`Numbers: ${numbers.join(", ")}`);
    console.log(`Even Numbers: ${even_numbers.join(", ")} | Count ${even_numbers.length}`);
    console.log(`Odd Numbers: ${odd_numbers.join(", ")} | Count ${odd_numbers.length}`);
  }
  
  separateEvenOdd(numbers_array);