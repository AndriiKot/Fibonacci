import Fibonacci from "../Fibonacci/Fibonacci.js";
import fibGetNumberFor from "./fn-variations/getFibonacciNumber__v-for.js";

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
  console.log(
    `Fibonacci get (while) for ${i}:`,
    new FibonacciGetNumber(i, fibGetNumberFor).result
  );
}
