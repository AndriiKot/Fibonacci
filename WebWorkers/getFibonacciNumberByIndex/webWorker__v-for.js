import {
  FibonacciGetNumber,
  fibGetNumberFor,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";


self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberFor;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};

