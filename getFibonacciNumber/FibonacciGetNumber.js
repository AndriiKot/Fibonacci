import Fibonacci from "../Fibonacci/Fibonacci.js";
import fibGetNumberFor from "./fn-variations/getFibonacciNumber__v-for.js";
import fibGetNumberWhile from "./fn-variations/getFibonacciNumber__v-while.js";
import fibGetNumberRecursionBadPractice from "./fn-variations/getFibonacciNumber__v-recursion-bad-practice.js";
import fibGetNumberRecursionLinearTimePractice from "./fn-variations/getFibonacciNumber__v-recursion-linear-practice.js";
import fibGetNumberRecursionMemoizeBadPractice from "./fn-variations/getFibonacciNumber__v-recursion-memoize-bad-practice.js";
import fibGetNumberRecursionMemoizeGoodPractice from "./fn-variations/getFibonacciNumber__v-recursion-memoize-good-practice.js";
import fibGetNumberMatrixExponentiation from "./fn-variations/getFibonacciNumber__v-matrix-exponentiation.js";

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

export {
  FibonacciGetNumber,
  fibGetNumberFor,
  fibGetNumberWhile,
  fibGetNumberRecursionBadPractice,
  fibGetNumberRecursionLinearTimePractice,
  fibGetNumberRecursionMemoizeBadPractice,
  fibGetNumberRecursionMemoizeGoodPractice,
  fibGetNumberMatrixExponentiation,
};
