// console.log("hello world");

// function sayWoo() {
//   return "woo!";
// }

// let sum = 4 + 5;

// sum = 8 + 2;

// function userGreeting() {
//   const timeGreeting = timeOfDayGreeting();
//   return `Good ${timeGreeting}!`;
// }
// function timeOfDayGreeting() {
//   const date = new Date();
//   const time = date.getHours();
//   let message;

//   if (time < 12) {
//     message = "morning";
//   } else if (time >= 12 && time < 17) {
//     message = "afternoon";
//   } else {
//     message = "evening";
//   }
//   return message;
// }
// console.log(userGreeting());
// console.log(Date());

//
//anonymous function
// function regularFunction() {
//   console.log("boo");
// }
//iffy passed and called immediately
// (function () {
//   console.log("boo");
// })();

// //ES6
// const sayHello = (name) => `hey ${name}!`;

// console.log(sayHello("Ron Burgundy"));

//Callback

// function myCallBackFunc() {
//   console.log("call me!");
// }
// function superUserFunc(callbackFun) {
//   callbackFun();
// }
// superUserFunc(myCallBackFunc);

// superUserFunc(() => {
//   console.log("Illbe called later");
// });

const test = ["test", 1, true, false, "bob"];

console.log(test);

function addUser() {}
const returnValue = test.push("Lion");

console.log(returnValue);

const removeValue = test.pop();
console.log(removeValue);
console.log(test);
const unshiftValue = test.unshift("Koala");
console.log(unshiftValue);
