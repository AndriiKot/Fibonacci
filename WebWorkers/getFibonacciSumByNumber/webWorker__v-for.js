import {
  FibonaciiSum,
  fibonacciSumFor,
} from "../../Fibonacci/sumFibonacci/FibonacciSum.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibonacciSumFor;
  const result = new FibonaciiSum(value, fn).result;
  self.postMessage(result);
};
