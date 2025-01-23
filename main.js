const worker = (argMessage) => {
  if (window.Worker) {
    const w1 = new Worker(
      "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-for.js",
      {
        type: "module",
      }
    );

    w1.postMessage({ value: argMessage });

    w1.onmessage = (message) => {
      console.log("Result from worker: ", message.data);
    };

    w1.onerror = (error) => {
      console.error("Worker error: ", error);
    };
  }

  const w2 = new Worker(
    "./WebWorkers/getFibonacciNumberByIndex/webWorker__v-matrix-exponentiation.js",
    {
      type: "module",
    }
  );
  w2.postMessage({ value: argMessage });

  w2.onmessage = (message) => {
    console.log("Result from worker: ", message.data);
  };

  w2.onerror = (error) => {
    console.error("Worker error: ", error);
  };
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
