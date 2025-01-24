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

const workers_sum = {
  worker_for: "./WebWorkers/getFibonacciSumByNumber/webWorker__v-for.js",
  worker_while: "./WebWorkers/getFibonacciSumByNumber/webWorker__v-while.js",
};


const worker = (argMessage) => {
  if (window.Worker) {
    Object.entries(workers).forEach(([workerName, workerPath], index) => {
      const w = new Worker(workerPath, { type: "module" });
      const i = index + 1;

      w.postMessage({ value: argMessage });

      w.onmessage = (message) => {
        result = Array.isArray(message.data) ? message.data[0] : message.data;
        document.querySelector(`#worker-${i}`).textContent += result
      };

      w.onerror = (error) => {
        document.querySelector(`#worker-${i}`).textContent += `Worker ${i} error from ${workerName}: `;
        console.error(`Worker ${i} error from ${workerName}: `, error);
      };
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector("input[type=submit]");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const NodeWorkers = document.querySelectorAll("[id^='worker-']");
    NodeWorkers.forEach((worker) => (worker.textContent = `Web-Worker-${worker.id.at(-1)}: `));
    const number = document.querySelector("input[name=number]").value;
    worker(number);
  });
});
