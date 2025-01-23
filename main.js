const worker = (argMessage) => {
  if (window.Worker) {
    const w1 = new Worker("./getFibonacciNumber/webworker1.js", {
      type: "module",
    });

    w1.postMessage({ value: argMessage });

    w1.onmessage = (message) => {
      console.log("Result from worker: ", message.data);
    };

    w1.onerror = (error) => {
      console.error("Worker error: ", error);
    };
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
