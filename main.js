const workers = {
  worker_for: "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-for.js",
  worker_matrix:
    "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-matrix-exponentiation.js",
  worker_while: "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-while.js",
  worker_recursion_bad:
    "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-recursion-bad-practice.js",
  worker_recursion_linear:
    "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-recursion-linear-practice.js",
  worker_recursion_memoize_bad:
    "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-recursion-memoize-bad-practice.js",
  worker_recursion_memoize_good:
    "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-recursion-memoize-good-practice.js",
};

const worker = (argMessage) => {
  if (window.Worker) {
    Object.entries(workers).forEach(([workerName, workerPath]) => {
      const w = new Worker(workerPath, { type: "module" });

      w.postMessage({ value: argMessage });

      w.onmessage = (message) => {
        console.log(`Result from ${workerName}: `, Array.isArray(message.data) ? message.data[0] : message.data);
      };

      w.onerror = (error) => {
        console.error(`Worker error from ${workerName}: `, error);
      };
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector("input[type=submit]");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const number = document.querySelector("input[name=number]").value;
    console.log(number);
    worker(number);
  });
});
