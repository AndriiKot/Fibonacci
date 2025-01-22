import Fibonacci from "../Fibonacci/Fibonacci.js";
import fibGetNumberFor from "./fn-variations/getFibonacciNumber__v-for.js";
import fibGetNumberWhile from "./fn-variations/getFibonacciNumber__v-while.js";
import fibGetNumberRecursionBadPractice from "./fn-variations/getFibonacciNumber__v-recursion-bad-practice.js";
import fibGetNumberRecursionLinearTimePractice from "./fn-variations/getFibonacciNumber__v-recursion-linear-practice.js";
import fibGetNumberRecursionMemoizeBadPractice from "./fn-variations/getFibonacciNumber__v-recursion-memoize-bad-practice.js";
import fibGetNumberRecursionMemoizeGoodPractice from "./fn-variations/getFibonacciNumber__v-recursion-memoize-good-practice.js";

class FibonacciGetNumber extends Fibonacci {
  constructor(value, fn) {
    super(value);
    this.result = this.#getNumber(this.value, fn);
  }

  #isValueZero(value) {
    return value === 0;
  }

  #isValueOne(value) {
    return value === 1;
  }

  #getNumber(value, fn) {
    if (this.#isValueZero(value)) return 0;
    if (this.#isValueOne(value)) return 1;
    return fn(value);
  }
}

for (let i = 0; i <= 10; i++) {
  console.log("\n",
    `Fibonacci get (for) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberFor).result, "\n",
    `Fibonacci get (while) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberWhile).result, "\n",
    `Fibonacci get (recursion bad practice) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberRecursionBadPractice).result, "\n",
    `Fibonacci get (recursion linear practice) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberRecursionLinearTimePractice).result, "\n",
    `Fibonacci get (recursion memoize bad practice) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberRecursionMemoizeBadPractice).result, "\n",
    `Fibonacci get (recursion memoize good practice) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberRecursionMemoizeGoodPractice).result, "\n",
  );
}
