import fibonacciSumWhile from './fibonacciSumWhile.js'
import fibonacciSumFor from './fibonacciSumFor.js'

class FibonacciSum {
  constructor(value, fn) {
    this.value = this.validationValue(value);
    this.result = this.sum(this.value, fn);
  }
  
  validationValue(value) {
    value = +value; 
    if (isNaN(value) || value < 0) {
      throw new Error('Invalid input: value must be a non-negative integer.');
    }
    return value;
  }

  isValueZero(value) {        
    return value === 0;
  }
                             
  isValueOne(value) {
    return value === 1;
  }

  isValueTwo(value) {
	return value === 2
  }

  sum(value, fn) {
    if (this.isValueZero(this.value)) return 0;
    if (this.isValueOne(this.value)) return 0;
    if (this.isValueTwo(this.value)) return 1;
    return fn(value);
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(`Fibonacci sum (while) for ${i}:`, new FibonacciSum(i, fibonacciSumWhile).result);
  console.log(`Fibonacci sum (for) for ${i}:`, new FibonacciSum(i, fibonacciSumFor).result);
}