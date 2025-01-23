import {
  FibonacciGetNumber,
  fibGetNumberRecursionMemoizeGoodPractice,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberRecursionMemoizeGoodPractice;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};
