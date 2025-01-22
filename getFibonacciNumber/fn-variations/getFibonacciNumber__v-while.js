const fibGetValueNumber = (n) => {
  let fibFirst = 0;
  let fibNext = 1;

  while (--n) {
    let temp = fibNext;
    fibNext = fibFirst + fibNext;
    fibFirst = temp;
  }
  return fibNext;
};

export default fibGetValueNumber;
