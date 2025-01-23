import {
  FibonacciGetNumber,
  fibGetNumberRecursionMemoizeBadPractice,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberRecursionMemoizeBadPractice;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};
