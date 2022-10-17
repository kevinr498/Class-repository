console.log("<<< Starting >>>");

setTimeout(() => {
  console.log("Timeout Called");
}, 0);

const p1 = new Promise((resolve, reject) => {
  console.log("First");
  resolve("Second");
  console.log("Last");
});

p1.then((res) => {
  console.log(res);
});
console.log("<<< Ending >>>");

//ANSWER:
//start: starting is read first and is called first. Then first and last is console logged. p1 resolve is called aftwerwards and because settimeout time is set to 0 it is called after the promise.
// resolve is called after ending because it is awaiting the successful page load.
