class Fibonacci {
  constructor(value) {
    this.value = this.#validationValue(value);
  }

  #validationValue(value) {
    value = +value; 
    if (isNaN(value)) {
      throw new Error("Invalid input: value must be a number.");
    }
    if (value < 0) {
      throw new Error("Invalid input: value must be a non-negative integer.");
    }
    return value;
  }
}

export default Fibonacci;
