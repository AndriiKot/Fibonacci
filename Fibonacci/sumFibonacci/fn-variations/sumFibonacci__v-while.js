const fibonacciSum = (n) => {
  let fib1 = 0; 
  let fib2 = 1;
  let sum = fib1; 

  while (n--) {
      sum += fib1; 
      let nextFib = fib1 + fib2;
      fib1 = fib2;
      fib2 = nextFib;
  }
  
  return sum; 
};

export default fibonacciSum;

