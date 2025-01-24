import {
  FibonaciiSum,
  fibonacciSumWhile,
} from "../../Fibonacci/sumFibonacci/FibonacciSum.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibonacciSumWhile;
  const result = new FibonaciiSum(value, fn).result;
  self.postMessage(result);
};
