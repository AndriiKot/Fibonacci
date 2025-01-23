const fibGetValueNumber = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibGetValueNumber(n - 1) + fibGetValueNumber(n - 2);
  }
};

export default fibGetValueNumber;
