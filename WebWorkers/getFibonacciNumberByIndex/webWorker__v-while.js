import {
  FibonacciGetNumber,
  fibGetNumberWhile,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";

self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberWhile;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};
