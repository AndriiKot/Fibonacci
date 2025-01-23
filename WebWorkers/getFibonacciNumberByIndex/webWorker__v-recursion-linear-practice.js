const fibGetValueNumber = (n) => {
  if (n == 0) {
    return [0, 1];
  } else {
    const arrResult = fibGetValueNumber(n - 1);
    const prev = arrResult[0];
    const next = arrResult[1];
    return [next, prev + next];
  }
};

export default fibGetValueNumber;
