// Function to calculate the factorial of a number using recursion
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Prompt the user for input
  const num = parseInt(prompt("Enter a number:"));
  
  // Check if the input is a valid number
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else {
    if (num < 0) {
      console.log("Factorial is not defined for negative numbers.");
    } else {
      const result = factorial(num);
      console.log(`The factorial of ${num} is ${result}`);
    }
  }
  