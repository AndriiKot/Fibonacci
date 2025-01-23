const fibGetValueNumber = () => {
  const oldFib = (fib, n) => {
    if (n <= 1) {
      return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  };

  const memoize = (f) => {
    const cache = [];
    return (arg) => {
      if (cache[arg] !== undefined) {
        return cache[arg];
      }
      const result = f(fib, arg);
      cache[arg] = result;
      return result;
    };
  };

  const fib = memoize(oldFib);
  return fib;
};

export default fibGetValueNumber();
