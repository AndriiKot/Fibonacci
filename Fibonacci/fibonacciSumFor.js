const fibonacciSum = (n) => {
  if (n <= 0) return 0;
  let fib1 = 0;
  let fib2 = 1;
  let sum = fib1;

  for (let i = 1; i < n; i++) {
      let nextFib = fib1 + fib2;
      sum += fib2;
      fib1 = fib2;
      fib2 = nextFib;
  }

  return sum;
};

export default fibonacciSum;
