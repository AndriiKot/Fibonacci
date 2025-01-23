import {
  FibonacciGetNumber,
  fibGetNumberRecursionBadPractice,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberRecursionBadPractice;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};
