import Fibonacci from "../Fibonacci/Fibonacci.js";
import fibonacciSumWhile from "./fn-variations/sumFibonacci__v-for.js";
import fibonacciSumFor from "./fn-variations/sumFibonacci__v-while.js";

class FibonacciSum extends Fibonacci {
  constructor(value, fn) {
    super(value);
    this.result = this.#sum(this.value, fn);
  }

  #isValueLessTwo(value) {
    return value < 2;
  }

  #sum(value, fn) {
    if (this.#isValueLessTwo(value)) return 0;
    return fn(value);
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(
    `Fibonacci sum (while) for ${i}:`,
    new FibonacciSum(i, fibonacciSumWhile).result
  );
  console.log(
    `Fibonacci sum (for) for ${i}:`,
    new FibonacciSum(i, fibonacciSumFor).result
  );
}
