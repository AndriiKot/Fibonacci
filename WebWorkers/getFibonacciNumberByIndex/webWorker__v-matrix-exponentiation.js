import {
  FibonacciGetNumber,
  fibGetNumberMatrixExponentiation,
} from "../../Fibonacci/getFibonacciNumber/FibonacciGetNumber.js";


self.onmessage = (e) => {
  const { value } = e.data;
  const fn = fibGetNumberMatrixExponentiation;
  const result = new FibonacciGetNumber(value, fn).result;
  self.postMessage(result);
};

