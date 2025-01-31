function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let num1: number = 5;
let num2: number = 3;

let result1 = add(num1, num2); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

console.log(result1); // Output: 8
console.log(result2); // Output: 6

//Example of incorrect usage leading to error
//let str: string = "5";
//let result3 = add(str, num2); //This line would throw an error

// Solution: Ensure that all inputs to add and subtract functions are numbers.