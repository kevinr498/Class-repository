// setTimeout(() => {
//   console.log("TimeOUT!!!");
//   const textElement = document.createElement("p");
//   textElement.innerText = "Hello World";
//   document.body.appendChild(textElement);
// }, 5000);

// console.log("<<< START >>>");

// function exampleCallBack(name, cb) {
//   cb(name);
// }

// exampleCallBack("Bob", (name) => console.log(name));
// console.log("<<< END >>>");

// exampleCallBack("Sara", (name) => {
//   exampleCallBack("Tom", (name2) => {
//     exampleCallBack("laura", (name3) => {
//       console.log("The");
//     });
//   });
// });

//Promise
// console.log();

// const sub = new Promise((resolve, reject) => {
//   const value = true;
//   if (value) resolve("Your sub is successful");
//   else reject(new Error("Your sub failed"));
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("<<< START >>>");
// setTimeout(() => {
//   console.log("TimeOUT!!!");
// }, 0);
// Promise.resolve("micro").then((res) => console.log(res));
// console.log("<<< END >>>");

// promise chaining

// const prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 1 called");
//   }, 1000);
// });
// const prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 2 called");
//   }, 1000);
// });
// const prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 3 called");
//   }, 1000);
// });

// prom1
//   .then((res) => {
//     console.log(res);
//     return prom2;
//   })
//   .then((res) => {
//     console.log(res);
//     return prom3;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// //   Promise all

// Promise.all([prom1, prom2, prom3]).then((res) => {
//   console.log(res);
// });

// Promise.race([prom1, prom2, prom3]).then((res) => {
//   console.log(res);
// });
const prom1 = new Promise((resolve, reject) => {
  console.log("inside p1");
  setTimeout(() => {
    console.log("inside p1 called");
    resolve("promise 1 called");
  }, 1000);
});
const prom2 = new Promise((resolve, reject) => {
  console.log("inside p2");

  setTimeout(() => {
    console.log("inside p2 called");
    resolve("promise 2 called");
  }, 1000);
});
const prom3 = new Promise((resolve, reject) => {
  console.log("inside p3");

  setTimeout(() => {
    console.log("inside p3 called");
    reject("promise 3 called");
  }, 1000);
});

const runPromise = async () => {
  try {
    const prom1Value = await prom1;
    console.log("async" + prom1Value);
    const prom2Value = await prom2;
    console.log("async" + prom2Value);
    const prom3Value = await prom3;
    console.log("async" + prom3Value);
  } catch (err) {
    console.log(`there is an error`);
  }
};
runPromise();

(async () => {
  const result = await prom1;
  console.log("results");
})();
