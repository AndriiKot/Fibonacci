const fibGetValueNumber = (n) => {
  let fibFirst = 0;
  let fibNext = 1;

  for (let i = 2; i <= n; i++) {
    let temp = fibNext;
    fibNext = fibFirst + fibNext;
    fibFirst = temp;
  }

  return fibNext;
};

export default fibGetValueNumber;

