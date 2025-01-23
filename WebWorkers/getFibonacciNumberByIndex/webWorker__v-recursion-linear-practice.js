import {
  FibonacciGetNumber,
  fibGetNumberRecursionLinearTimePractice,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberRecursionLinearTimePractice;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};
