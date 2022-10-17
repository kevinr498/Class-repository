console.log("<<< Starting >>>");

const p2 = new Promise((resolve, reject) => {
  console.log("First");
  console.log("Last");
});

p2.then((res) => {
  console.log(res);
});

console.log("<<< Ending >>>");
//ANSWER:
//start: the first last is called in the correct order, but it doesn't wait for the page to load successfully because the resolve is never called.
//the p2.then is irrelevaqnt and can be removed and still run the same results.
