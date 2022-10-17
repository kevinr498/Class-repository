console.log("<<< Starting >>>");

function run(value) {
  return new Promise((resolve, reject) => {
    if (value) resolve("Win!");
    else reject("Lose!");
  });
}

let p3 = run(true);

p3.then((res) => {
  console.log(res);
  return run(false);
})
  .catch((res) => {
    console.log(res);
    return "Error!";
  })
  .then((res) => {
    console.log(res);
    return run(true);
  })
  .then((res) => {
    console.log(res);
    return run(false);
  })
  .then((res) => {
    console.log(res);
    return run(true);
  });

console.log("<<< Ending >>>");
//ANSWER:
//start: p3 is run, the first then statement is true, so win! is called, then the next is a false. This calls Lose! and results in the catch to be called, so error! is console.logged.
// then is returns to the chain. The last statement is called and this is true. So Win! is called again.
// Finally the chain ends in return run(false). So this results in an error lose! because it is rejected.
