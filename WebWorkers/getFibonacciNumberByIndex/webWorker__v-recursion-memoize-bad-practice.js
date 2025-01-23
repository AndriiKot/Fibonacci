const fibGetValueNumber = (n) => {
  const oldFib = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return oldFib(n - 1) + oldFib(n - 2);
    }
  };

  const memoize = (f) => {
    const cache = {};
    return (arg) => cache[arg] || (cache[arg] = f(arg));
  };

  return memoize(oldFib);
};

export default fibGetValueNumber();
